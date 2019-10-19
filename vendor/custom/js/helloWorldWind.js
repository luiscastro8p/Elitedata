//vincular worldwind con canvas en html
var wwd = new WorldWind.WorldWindow("canvasOne");
//mapa alta definición
//wwd.addLayer(new WorldWind.AtmosphereLayer());
wwd.addLayer(new WorldWind.BingAerialWithLabelsLayer());
//mostrar coordenadas 
wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
//mostrar controles
wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

agregarAtmosfera = () =>{
    wwd.addLayer(new WorldWind.AtmosphereLayer());
}
//calarle el map
// var serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
// var layerName = "MOD_LSTD_CLIM_M";
// var createLayer = function (xmlDom) {
//     var wms = new WorldWind.WmsCapabilities(xmlDom);
//     var wmsLayerCapabilities = wms.getNamedLayer(layerName);
//     var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
//     var wmsLayer = new WorldWind.WmsLayer(wmsConfig);
//     wwd.addLayer(wmsLayer);
// };
// var logError = function (jqXhr, text, exception) {
//     console.log("There was a failure retrieving the capabilities document: " +
//         text +
//     " exception: " + exception);
// };
// $.get(serviceAddress).done(createLayer).fail(logError);
