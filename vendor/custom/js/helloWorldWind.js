//variables de control
var fueguito = false;
var poblacion = false;
var temp = false;
var anom = false;
var today = false;

var mapfire = null;
var mappoblacion = null;
var maptemp = null;
var mapanom = null;
var maptoday = null;



// Create a WorldWindow for the canvas.
var wwd = new WorldWind.WorldWindow("canvasOne");

function evento($event) {
    switch ($event) {
        case 'MOD14A1_M_FIRE':
            if (fueguito === false) {
                amfire($event);
                fueguito = true;
                break;
            } else {
                dmapfire()
                fueguito = false;
                break;
            }
            case 'SEDAC_POP':
                if (poblacion === false) {
                    ampob($event);
                    poblacion = true;
                    break;
                } else {
                    dmappob();
                    poblacion = false;
                    break;
                }
                case 'MOD_LSTD_CLIM_M':
                    if (temp === false) {
                        amtemp($event);
                        temp = true;
                        break;
                    } else {
                        dmaptemp()
                        temp = false;
                        break;
                    }
                    case 'MOD_143D_RR':
                        if (today === false) {
                            amtoday($event);
                            today = true;
                            break;
                        } else {
                            dmaptoday()
                            today = false;
                            break;
                        }
                        case 'MOD_LSTAD_M':
                        if (anom === false) {
                            amanom($event);
                            anom = true;
                            break;
                        } else {
                            dmapanom()
                            anom = false;
                            break;
                        }
                        default:
                            break;
    }

}
//Funciones de activado y desactivado//////////////////////////////////////////////////////////////////////////////////////////
function amfire($event) {
    var layerName = $event;
    var serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
    var createLayer = function (xmlDom) {
        var wms = new WorldWind.WmsCapabilities(xmlDom);
        var wmsLayerCapabilities = wms.getNamedLayer(layerName);
        var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
        mapfire = new WorldWind.WmsLayer(wmsConfig);
        wwd.addLayer(mapfire);
    };
    $.get(serviceAddress).done(createLayer).fail(logError);
}

function dmapfire() {
    wwd.removeLayer(mapfire);
}

function ampob($event) {
    var layerName = $event;
    var serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
    var createLayer = function (xmlDom) {
        var wms = new WorldWind.WmsCapabilities(xmlDom);
        var wmsLayerCapabilities = wms.getNamedLayer(layerName);
        var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
        mappoblacion = new WorldWind.WmsLayer(wmsConfig);
        wwd.addLayer(mappoblacion);
    };
    $.get(serviceAddress).done(createLayer).fail(logError);
}

function dmappob() {
    wwd.removeLayer(mappoblacion);
}

function amtemp($event) {
    var layerName = $event;
    var serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
    var createLayer = function (xmlDom) {
        var wms = new WorldWind.WmsCapabilities(xmlDom);
        var wmsLayerCapabilities = wms.getNamedLayer(layerName);
        var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
        maptemp = new WorldWind.WmsLayer(wmsConfig);
        wwd.addLayer(maptemp);
    };
    $.get(serviceAddress).done(createLayer).fail(logError);
}

function dmaptemp() {
    wwd.removeLayer(maptemp);
}
function amtoday($event) {
    var layerName = $event;
    var serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
    var createLayer = function (xmlDom) {
        var wms = new WorldWind.WmsCapabilities(xmlDom);
        var wmsLayerCapabilities = wms.getNamedLayer(layerName);
        var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
        maptoday = new WorldWind.WmsLayer(wmsConfig);
        wwd.addLayer(maptoday);
    };
    $.get(serviceAddress).done(createLayer).fail(logError);
}

function dmaptoday() {
    wwd.removeLayer(maptoday);
}
function amanom($event) {
    var layerName = $event;
    var serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
    var createLayer = function (xmlDom) {
        var wms = new WorldWind.WmsCapabilities(xmlDom);
        var wmsLayerCapabilities = wms.getNamedLayer(layerName);
        var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
        mapanom = new WorldWind.WmsLayer(wmsConfig);
        wwd.addLayer(mapanom);
    };
    $.get(serviceAddress).done(createLayer).fail(logError);
}

function dmapanom() {
    wwd.removeLayer(mapanom);
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
wwd.addLayer(new WorldWind.BingAerialLayer());
// wwd.addLayer(new WorldWind.CompassLayer());
wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

// Add WMS imagery


var logError = function (jqXhr, text, exception) {
    console.log("There was a failure retrieving the capabilities document: " +
        text +
        " exception: " + exception);
};