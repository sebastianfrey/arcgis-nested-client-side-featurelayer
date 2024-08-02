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

const createSubgroupLayerWithFeatureLayers = (
  title: string,
  featureLayerCount: number,
  featureCount: number
) => {
  const subgroupLayer = new GroupLayer({
    title,
  });
  const sublayers: FeatureLayer[] = [];
  for (let i = 0; i < featureLayerCount; i++) {
    const featureSet = randomPolygon(featureCount, {
      num_vertices: 4,
      max_radial_length: 0.5,
      bbox: [5.98865807458, 47.3024876979, 15.0169958839, 54.983104153],
    });
    const graphics = featureSet.features.map((feature: any, idx) => {
      const geometry = geojsonToArcGIS(feature.geometry);
      return Graphic.fromJSON({
        geometry,
        attributes: {
          ID: idx + 1,
          ...feature.properties,
        },
      });
    });

    const featureLayer = new FeatureLayer({
      source: graphics,
      title: `Feature Layer ${i + 1}`,
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
    sublayers.push(featureLayer);
  }

  subgroupLayer.addMany(sublayers.reverse());
  return subgroupLayer;
};

const createNestedLayers = (
  subgroupCount: number,
  featureLayerCount: number,
  featuresCount: number
) => {
  const groups: GroupLayer[] = [];
  for (let i = 0; i < subgroupCount; i++) {
    groups.push(
      createSubgroupLayerWithFeatureLayers(
        `Subgroup ${i + 1}`,
        featureLayerCount,
        featuresCount
      )
    );
  }
  return groups.reverse();
};

const addProjectToMap = (title: string) => {
  const rootLayer = new GroupLayer({
    title,
  });

  map.add(rootLayer);

  return rootLayer;
};

const updateGroups = (
  rootLayer: GroupLayer,
  groupCount: number,
  subgroupCount: number,
  featureLayerCount: number,
  featuresCount: number
) => {
  rootLayer.removeAll();
  const groupLayers: GroupLayer[] = [];
  for (let i = 0; i < groupCount; i++) {
    const groupLayer = new GroupLayer({
      title: `Group ${i + 1}`,
    });
    groupLayers.push(groupLayer);
    groupLayer.addMany(
      createNestedLayers(subgroupCount, featureLayerCount, featuresCount)
    );
  }
  rootLayer.addMany(groupLayers.reverse());

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

  const groupsSlider = document.getElementById(
    "groups-slider"
  )! as HTMLCalciteSliderElement;
  const subgroupSlider = document.getElementById(
    "subgroups-slider"
  )! as HTMLCalciteSliderElement;
  const featureLayerSlider = document.getElementById(
    "featurelayers-slider"
  )! as HTMLCalciteSliderElement;
  const featuresSlider = document.getElementById(
    "features-slider"
  )! as HTMLCalciteSliderElement;

  for (const slider of [
    groupsSlider,
    subgroupSlider,
    featureLayerSlider,
    featuresSlider,
  ]) {
    slider.addEventListener("calciteSliderChange", () => {
      updateGroups(
        rootLayer,
        groupsSlider!.value as number,
        subgroupSlider!.value as number,
        featureLayerSlider!.value as number,
        featuresSlider!.value as number
      );
    });
  }

  updateGroups(
    rootLayer,
    groupsSlider!.value as number,
    subgroupSlider!.value as number,
    featureLayerSlider!.value as number,
    featuresSlider!.value as number
  );

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
