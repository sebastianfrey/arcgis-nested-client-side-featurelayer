import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import GroupLayer from "@arcgis/core/layers/GroupLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import LayerList from "@arcgis/core/widgets/LayerList";

import "./style.css";

const map = new Map({
  basemap: "streets",
});

const view = new MapView({
  container: "viewDiv",
  map,
});

const layerList = new LayerList({
  view
});
view.ui.add(layerList, {
  position: "top-left"
});

interface ProjectVariantItem {
  id: number;
  title: string;
}

interface ProjectItem {
  title: string;
  variants: ProjectVariantItem[];
}

const createWindFarmLayers = () => {
  const wtgLayer = new GroupLayer({
    title: 'WTG',
  });
  const wtgPointLayer = new FeatureLayer({
    source: [],
    title: "Center point",
    objectIdField: "ID",
    spatialReference: view.spatialReference,
    geometryType: "point",
    fields: [
      {
        name: "ID",
        alias: "ID",
        type: "oid",
      },
    ],
  });
  const wtgFoundationLayer = new FeatureLayer({
    source: [],
    title: "Foundation area",
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
  const wtgRotationLayer = new FeatureLayer({
    source: [],
    title: "Rotation area",
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
  wtgLayer.addMany([wtgRotationLayer, wtgFoundationLayer, wtgPointLayer]);

  const cableLayer = new GroupLayer({
    title: 'Cable',
  });
  const cableCorridorLayer = new FeatureLayer({
    source: [],
    title: "Corridor",
    objectIdField: "ID",
    spatialReference: view.spatialReference,
    geometryType: "polyline",
    fields: [
      {
        name: "ID",
        alias: "ID",
        type: "oid",
      },
    ],
  });
  cableLayer.add(cableCorridorLayer);

  return [wtgLayer, cableLayer];
};

const addProjectToMap = (project: ProjectItem) => {
  const rootLayer = new GroupLayer({
    title: project.title,
  });

  for (const variant of project.variants) {
    const variantLayer = new GroupLayer({
      title: variant.title,
    });
    variantLayer.addMany(createWindFarmLayers());

    rootLayer.add(variantLayer);
  }

  map.add(rootLayer);
};

view.when(() => {
  addProjectToMap({
    title: "My Project",
    variants: [
      { id: 1, title: "V001" },
      { id: 2, title: "V002" },
      { id: 3, title: "V003" },
      { id: 4, title: "V004" },
    ],
  });
});

