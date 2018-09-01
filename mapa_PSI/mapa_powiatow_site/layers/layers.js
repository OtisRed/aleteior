var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_powiaty = new ol.format.GeoJSON();
var features_powiaty = format_powiaty.readFeatures(geojson_powiaty, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_powiaty = new ol.source.Vector();
jsonSource_powiaty.addFeatures(features_powiaty);var lyr_powiaty = new ol.layer.Vector({
                source:jsonSource_powiaty, 
                style: style_powiaty,
                title: "powiaty"
            });

lyr_powiaty.setVisible(true);
var layersList = [baseLayer,lyr_powiaty];
lyr_powiaty.set('fieldAliases', {'jpt_nazwa_': 'jpt_nazwa_', 'unemployment_rate_class_with_woj_powiat': 'unemployment_rate_class_with_woj_powiat', 'unemployment_rate_class_with_woj_unemployment_ratio': 'unemployment_rate_class_with_woj_unemployment_ratio', 'unemployment_rate_class_with_woj_class': 'unemployment_rate_class_with_woj_class', 'unemployment_rate_class_with_woj_woj': 'unemployment_rate_class_with_woj_woj', });
lyr_powiaty.set('fieldImages', {'jpt_nazwa_': 'TextEdit', 'unemployment_rate_class_with_woj_powiat': 'TextEdit', 'unemployment_rate_class_with_woj_unemployment_ratio': 'TextEdit', 'unemployment_rate_class_with_woj_class': 'TextEdit', 'unemployment_rate_class_with_woj_woj': 'TextEdit', });
lyr_powiaty.set('fieldLabels', {'jpt_nazwa_': 'no label', 'unemployment_rate_class_with_woj_powiat': 'inline label', 'unemployment_rate_class_with_woj_unemployment_ratio': 'inline label', 'unemployment_rate_class_with_woj_class': 'inline label', 'unemployment_rate_class_with_woj_woj': 'inline label', });
lyr_powiaty.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});