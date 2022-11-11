var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
    "img/favicon.png",
    "img/map/Click Egypt Pland.png",
    "img/map/Click Greek Pland.png",
    "img/map/Click Norse Pland.png",
    "img/map/Click Japan Pland.png",
)
