var size = 0;
function categories_powiaty(feature, value) {
                switch(value) {case "I":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(215,25,28,1.0)'})
    })];
                    break;
case "II":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(236,110,67,1.0)'})
    })];
                    break;
case "III":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(253,185,110,1.0)'})
    })];
                    break;
case "IV":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(254,231,164,1.0)'})
    })];
                    break;
case "V":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(229,244,167,1.0)'})
    })];
                    break;
case "VI":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(178,222,118,1.0)'})
    })];
                    break;
case "VII":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(106,188,88,1.0)'})
    })];
                    break;
case "":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(26,150,65,1.0)'})
    })];
                    break;}};
var styleCache_powiaty={}
var style_powiaty = function(feature, resolution){
    var value = feature.get("unemployment_rate_class_with_woj_class");
    var style = categories_powiaty(feature, value);
    if (feature.get("jpt_nazwa_") !== null && resolution > 0 && resolution < 200) {
        var bezrobocie = String(feature.get("unemployment_rate_class_with_woj_unemployment_ratio"));
        var powiat = String(feature.get("jpt_nazwa_"));
        var sep = "\n";
        var perc = " % ";
        var labelText = powiat.concat(sep, bezrobocie, perc);
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_powiaty[key]){
        var text = new ol.style.Text({
              font: '14.3px \'Verdana\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_powiaty[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_powiaty[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
}

function hideAlert() {
     document.getElementById('alert').style.display = "none";    
     document.getElementById('alert').style.visibility = "hidden";
}
