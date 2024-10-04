//________________________________APPLET GEOGEBRA_____________________________________

let el = document.getElementById('ggb')
const params = { appName: 'classic',
    "prerelease":false,
    "width":900,
    "height":510,
    "material_id":"rjtc6rzr"
 }
 
const applet = new GGBApplet(params, true)
window.onload = function() {
    applet.inject(el)
    }

function evalInput(strInput) {
    ggbApplet.evalCommand(strInput);
    return false;
}
