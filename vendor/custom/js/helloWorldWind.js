// Create a WorldWindow for the canvas.
var wwd = new WorldWind.WorldWindow("canvasOne");

function evento($event){
    console.log("loco", $event);
    var layerName = $event;
    var serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";

    var createLayer = function (xmlDom) {
        console.log("init?");
        var wms = new WorldWind.WmsCapabilities(xmlDom);
        var wmsLayerCapabilities = wms.getNamedLayer(layerName);
        var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
        var wmsLayer = new WorldWind.WmsLayer(wmsConfig);
        wwd.addLayer(wmsLayer);
    };

    $.get(serviceAddress).done(createLayer).fail(logError);
}

wwd.addLayer(new WorldWind.BMNGOneImageLayer());
wwd.addLayer(new WorldWind.BMNGLandsatLayer());

wwd.addLayer(new WorldWind.CompassLayer());
wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

// Add WMS imagery


var logError = function (jqXhr, text, exception) {
    console.log("There was a failure retrieving the capabilities document: " +
        text +
    " exception: " + exception);
};
