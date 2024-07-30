import "@esri/calcite-components/dist/calcite/calcite.css";
import "@arcgis/core/assets/esri/themes/light/main.css";

import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import GroupLayer from "@arcgis/core/layers/GroupLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import LayerList from "@arcgis/core/widgets/LayerList";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";
import Graphic from "@arcgis/core/Graphic";
import { randomPolygon } from "@turf/random";
import { geojsonToArcGIS } from "@terraformer/arcgis";
import { setAssetPath } from "@esri/calcite-components/dist/components";

import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-navigation";
import "@esri/calcite-components/dist/components/calcite-navigation-logo";
import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-slider";
import "@esri/calcite-components/dist/components/calcite-label";

import "./style.css";

setAssetPath("/assets");

const map = new Map({
  basemap: "streets",
});

const view = new MapView({
  container: "viewDiv",
  map,
  padding: {
    left: 49,
  },
});

const layerList = new LayerList({
  view,
  visibilityAppearance: "checkbox",
  container: document.getElementById("layers-container")!,
});

function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

const createGroupLayerWithFeatureLayers = (
  title: string,
  childLayers: string[]
) => {
  const groupLayer = new GroupLayer({
    title,
  });
  const sublayers = childLayers.map((title) => {
    const featureCount = getRandomInt(0, 25);
    let graphics: any[] = [];
    if (featureCount > 5) {
      const featureSet = randomPolygon(featureCount, {
        num_vertices: 5,
        max_radial_length: 10,
      });
      graphics = featureSet.features.map((feature: any, idx) => {
        const geometry = geojsonToArcGIS(feature.geometry);
        return Graphic.fromJSON({
          geometry,
          attributes: {
            ID: idx + 1,
            ...feature.properties,
          },
        });
      });
    }

    return new FeatureLayer({
      source: graphics,
      title,
      objectIdField: "ID",
      spatialReference: view.spatialReference,
      geometryType: "polygon",
      fields: [
        {
          name: "ID",
          alias: "ID",
          type: "oid",
        },
      ],
    });
  });
  groupLayer.addMany(sublayers);
  return groupLayer;
};

const createWindFarmLayers = () => {
  const wtgLayer = createGroupLayerWithFeatureLayers("WTG", [
    "WEA-Position",
    "Umfahrung",
    "Fundament",
    "Fundamentschutz",
    "Permanente Inanspruchnahme",
    "Temporäre Inanspruchname",
    "Kranstellfläche",
    "Kranauslegerfläche",
    "Lagerflächen",
    "Böschungsring",
    "Rotorüberstreichfläche",
    "Reduzierte Abstandsfläche",
    "Abstandsfläche",
    "Turbulenzellipse (techn. Abstand)",
    "Turbulenzkreis 2.5 D",
    "Turbulenzkreis 3 D",
    "Turbulenzkreis 3.5 D",
  ]);
  const wtsLayer = createGroupLayerWithFeatureLayers("WTS", [
    "WEA-Position",
    "Umfahrung",
    "Fundament",
    "Fundamentschutz",
    "Permanente Inanspruchnahme",
    "Temporäre Inanspruchname",
  ]);
  const accessLayer = createGroupLayerWithFeatureLayers("Zuwegung", [
    "Mittellinie Zuwegung",
    "Schutzstreifen",
    "Serviceweg",
    "Überstreichfläche (Schleppkurve)",
    "Permanente Zuwegung",
    "Temporäre Zuwegung",
  ]);
  const claimLayer = createGroupLayerWithFeatureLayers("Inanspruchnahme", [
    "Permanente Inanspruchnahme",
    "Temporäre Inanspruchname",
    "Inanspruchnahme",
  ]);

  const cableLayer = createGroupLayerWithFeatureLayers("Kabel", ["Kabel"]);

  return [wtgLayer, wtsLayer, accessLayer, claimLayer, cableLayer];
};

const addProjectToMap = (title: string) => {
  const rootLayer = new GroupLayer({
    title,
  });

  map.add(rootLayer);

  return rootLayer;
};

const updateVariants = (rootLayer: GroupLayer, groupCount: number) => {
  rootLayer.removeAll();
  for (let i = 0; i < groupCount; i++) {
    const variantLayer = new GroupLayer({
      title: `Variant ${i + 1}`,
    });
    variantLayer.addMany(createWindFarmLayers());
    rootLayer.add(variantLayer);
  }

  document.getElementById(
    "layer-count"
  )!.innerHTML = `Number of layers: ${rootLayer.allLayers.length}`;
  document.getElementById("feature-count")!.innerHTML = `Number of features: ${
    rootLayer.allLayers
      .toArray()
      .filter((l: any) => l.type === "feature")
      .flatMap((l: any) => l.source.toArray()).length
  }`;
};

let activeWidget: any = null;

view.when(() => {
  (document.querySelector("#header-title")! as any).heading =
    "More than 200 nested client-side FeatureLayers cause significant frame drops";
  const handleActionBarClick = ({ target }: any) => {
    if (target.tagName !== "CALCITE-ACTION") {
      return;
    }

    if (activeWidget) {
      (
        document.querySelector(`[data-action-id=${activeWidget}]`)! as any
      ).active = false;
      (
        document.querySelector(`[data-panel-id=${activeWidget}]`)! as any
      ).hidden = true;
    }

    const nextWidget = target.dataset.actionId;
    if (nextWidget !== activeWidget) {
      (
        document.querySelector(`[data-action-id=${nextWidget}]`)! as any
      ).active = true;
      (document.querySelector(`[data-panel-id=${nextWidget}]`)! as any).hidden =
        false;
      activeWidget = nextWidget;
    } else {
      activeWidget = null;
    }
  };

  document
    .querySelector("calcite-action-bar")!
    .addEventListener("click", handleActionBarClick);

  let actionBarExpanded = false;

  document.addEventListener("calciteActionBarToggle", () => {
    actionBarExpanded = !actionBarExpanded;
    view.padding = {
      left: actionBarExpanded ? 150 : 49,
    };
  });

  document.querySelector("calcite-shell")!.hidden = false;

  const rootLayer = addProjectToMap("Root Group");

  const variantsSlider = document.querySelector("calcite-slider")!;
  variantsSlider!.addEventListener("calciteSliderChange", () => {
    updateVariants(rootLayer, variantsSlider!.value as number);
  });
  updateVariants(rootLayer, variantsSlider!.value as number);

  view.whenLayerView(rootLayer).then(() => {
    reactiveUtils
      .whenOnce(
        () =>
          document
            .getElementById("layers-container")
            ?.querySelector("calcite-list-item") !== null
      )
      .then(() => {
        document
          .getElementById("layers-container")!
          .querySelector("calcite-list-item")!.open = true;
      });
  });
});

(window as any).map = map;
(window as any).view = view;
(window as any).layerList = layerList;
