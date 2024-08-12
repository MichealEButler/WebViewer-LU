ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:27700").setExtent([98143.333645, 718584.407213, 420984.905208, 912289.350151]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AlluvialFans_1 = new ol.format.GeoJSON();
var features_AlluvialFans_1 = format_AlluvialFans_1.readFeatures(json_AlluvialFans_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_AlluvialFans_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlluvialFans_1.addFeatures(features_AlluvialFans_1);
var lyr_AlluvialFans_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlluvialFans_1, 
                style: style_AlluvialFans_1,
                popuplayertitle: "Alluvial Fans",
                interactive: false,
                title: '<img src="styles/legend/AlluvialFans_1.png" /> Alluvial Fans'
            });
var format_FluvialSurfaces_2 = new ol.format.GeoJSON();
var features_FluvialSurfaces_2 = format_FluvialSurfaces_2.readFeatures(json_FluvialSurfaces_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_FluvialSurfaces_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FluvialSurfaces_2.addFeatures(features_FluvialSurfaces_2);
var lyr_FluvialSurfaces_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FluvialSurfaces_2, 
                style: style_FluvialSurfaces_2,
                popuplayertitle: "Fluvial Surfaces",
                interactive: false,
                title: '<img src="styles/legend/FluvialSurfaces_2.png" /> Fluvial Surfaces'
            });
var format_TalosFeatures_3 = new ol.format.GeoJSON();
var features_TalosFeatures_3 = format_TalosFeatures_3.readFeatures(json_TalosFeatures_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_TalosFeatures_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TalosFeatures_3.addFeatures(features_TalosFeatures_3);
var lyr_TalosFeatures_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TalosFeatures_3, 
                style: style_TalosFeatures_3,
                popuplayertitle: "Talos Features",
                interactive: false,
                title: '<img src="styles/legend/TalosFeatures_3.png" /> Talos Features'
            });
var format_StandellMergedFeatures_4 = new ol.format.GeoJSON();
var features_StandellMergedFeatures_4 = format_StandellMergedFeatures_4.readFeatures(json_StandellMergedFeatures_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_StandellMergedFeatures_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StandellMergedFeatures_4.addFeatures(features_StandellMergedFeatures_4);
var lyr_StandellMergedFeatures_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StandellMergedFeatures_4, 
                style: style_StandellMergedFeatures_4,
                popuplayertitle: "Standell Merged Features",
                interactive: false,
                title: '<img src="styles/legend/StandellMergedFeatures_4.png" /> Standell Merged Features'
            });
var format_AustriaHPA20m_5 = new ol.format.GeoJSON();
var features_AustriaHPA20m_5 = format_AustriaHPA20m_5.readFeatures(json_AustriaHPA20m_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_AustriaHPA20m_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AustriaHPA20m_5.addFeatures(features_AustriaHPA20m_5);
var lyr_AustriaHPA20m_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AustriaHPA20m_5, 
                style: style_AustriaHPA20m_5,
                popuplayertitle: "Austria HPA (20m)",
                interactive: false,
                title: '<img src="styles/legend/AustriaHPA20m_5.png" /> Austria HPA (20m)'
            });
var format_SouthPenninesHPA20m_6 = new ol.format.GeoJSON();
var features_SouthPenninesHPA20m_6 = format_SouthPenninesHPA20m_6.readFeatures(json_SouthPenninesHPA20m_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_SouthPenninesHPA20m_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SouthPenninesHPA20m_6.addFeatures(features_SouthPenninesHPA20m_6);
var lyr_SouthPenninesHPA20m_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SouthPenninesHPA20m_6, 
                style: style_SouthPenninesHPA20m_6,
                popuplayertitle: "South Pennines HPA (20m)",
                interactive: false,
                title: '<img src="styles/legend/SouthPenninesHPA20m_6.png" /> South Pennines HPA (20m)'
            });
var format_TweedValleyHPA20m_7 = new ol.format.GeoJSON();
var features_TweedValleyHPA20m_7 = format_TweedValleyHPA20m_7.readFeatures(json_TweedValleyHPA20m_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_TweedValleyHPA20m_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TweedValleyHPA20m_7.addFeatures(features_TweedValleyHPA20m_7);
var lyr_TweedValleyHPA20m_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TweedValleyHPA20m_7, 
                style: style_TweedValleyHPA20m_7,
                popuplayertitle: "Tweed Valley HPA (20m)",
                interactive: false,
                title: '<img src="styles/legend/TweedValleyHPA20m_7.png" /> Tweed Valley HPA (20m)'
            });
var format_CombinedHPA20m_8 = new ol.format.GeoJSON();
var features_CombinedHPA20m_8 = format_CombinedHPA20m_8.readFeatures(json_CombinedHPA20m_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_CombinedHPA20m_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CombinedHPA20m_8.addFeatures(features_CombinedHPA20m_8);
var lyr_CombinedHPA20m_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CombinedHPA20m_8, 
                style: style_CombinedHPA20m_8,
                popuplayertitle: "Combined HPA (20m)",
                interactive: false,
    title: 'Combined HPA (20m)<br />\
    <img src="styles/legend/CombinedHPA20m_8_0.png" /> 2<br />\
    <img src="styles/legend/CombinedHPA20m_8_1.png" /> 3<br />\
    <img src="styles/legend/CombinedHPA20m_8_2.png" /> 4<br />'
        });
var format_MesolithicSites_9 = new ol.format.GeoJSON();
var features_MesolithicSites_9 = format_MesolithicSites_9.readFeatures(json_MesolithicSites_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_MesolithicSites_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MesolithicSites_9.addFeatures(features_MesolithicSites_9);
var lyr_MesolithicSites_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MesolithicSites_9, 
                style: style_MesolithicSites_9,
                popuplayertitle: "Mesolithic Sites",
                interactive: true,
                title: '<img src="styles/legend/MesolithicSites_9.png" /> Mesolithic Sites'
            });
var group_Predictions = new ol.layer.Group({
                                layers: [lyr_AustriaHPA20m_5,lyr_SouthPenninesHPA20m_6,lyr_TweedValleyHPA20m_7,lyr_CombinedHPA20m_8,],
                                fold: "open",
                                title: "Predictions"});
var group_StandellGeomorphology = new ol.layer.Group({
                                layers: [lyr_AlluvialFans_1,lyr_FluvialSurfaces_2,lyr_TalosFeatures_3,lyr_StandellMergedFeatures_4,],
                                fold: "open",
                                title: "Standell Geomorphology"});
var group_BaseLayers = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                fold: "open",
                                title: "Base Layers"});

lyr_OpenStreetMap_0.setVisible(true);lyr_AlluvialFans_1.setVisible(false);lyr_FluvialSurfaces_2.setVisible(false);lyr_TalosFeatures_3.setVisible(false);lyr_StandellMergedFeatures_4.setVisible(false);lyr_AustriaHPA20m_5.setVisible(false);lyr_SouthPenninesHPA20m_6.setVisible(false);lyr_TweedValleyHPA20m_7.setVisible(false);lyr_CombinedHPA20m_8.setVisible(false);lyr_MesolithicSites_9.setVisible(true);
var layersList = [group_BaseLayers,group_StandellGeomorphology,group_Predictions,lyr_MesolithicSites_9];
lyr_AlluvialFans_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_FluvialSurfaces_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_TalosFeatures_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_StandellMergedFeatures_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'layer': 'layer', 'path': 'path', });
lyr_AustriaHPA20m_5.set('fieldAliases', {'DN': 'DN', });
lyr_SouthPenninesHPA20m_6.set('fieldAliases', {'DN': 'DN', });
lyr_TweedValleyHPA20m_7.set('fieldAliases', {'DN': 'DN', });
lyr_CombinedHPA20m_8.set('fieldAliases', {'DN': 'DN', });
lyr_MesolithicSites_9.set('fieldAliases', {'site': 'site', 'easting': 'easting', 'northing': 'northing', 'NGR': 'NGR', 'visible': 'visible', 'letter lab': 'letter lab', 'map_no': 'map_no', 'file_path': 'file_path', });
lyr_AlluvialFans_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_FluvialSurfaces_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_TalosFeatures_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_StandellMergedFeatures_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_AustriaHPA20m_5.set('fieldImages', {'DN': 'Range', });
lyr_SouthPenninesHPA20m_6.set('fieldImages', {'DN': 'Range', });
lyr_TweedValleyHPA20m_7.set('fieldImages', {'DN': 'Range', });
lyr_CombinedHPA20m_8.set('fieldImages', {'DN': 'Range', });
lyr_MesolithicSites_9.set('fieldImages', {'site': 'TextEdit', 'easting': 'Range', 'northing': 'Range', 'NGR': 'TextEdit', 'visible': 'Range', 'letter lab': 'TextEdit', 'map_no': 'Range', 'file_path': 'ExternalResource', });
lyr_AlluvialFans_1.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_FluvialSurfaces_2.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_TalosFeatures_3.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_StandellMergedFeatures_4.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_AustriaHPA20m_5.set('fieldLabels', {'DN': 'no label', });
lyr_SouthPenninesHPA20m_6.set('fieldLabels', {'DN': 'no label', });
lyr_TweedValleyHPA20m_7.set('fieldLabels', {'DN': 'no label', });
lyr_CombinedHPA20m_8.set('fieldLabels', {'DN': 'no label', });
lyr_MesolithicSites_9.set('fieldLabels', {'site': 'inline label - always visible', 'easting': 'inline label - always visible', 'northing': 'inline label - always visible', 'NGR': 'inline label - always visible', 'visible': 'inline label - always visible', 'letter lab': 'inline label - always visible', 'map_no': 'inline label - always visible', 'file_path': 'inline label - always visible', });
lyr_MesolithicSites_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});