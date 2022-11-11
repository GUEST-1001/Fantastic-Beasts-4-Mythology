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
    "img/map/Greek Map/Cerberus Greek.png",
    "img/map/Greek Map/Chimera Greek.png",
    "img/map/Greek Map/Cyclops Greek.png",
    "img/map/Greek Map/Pegasus Greek.png",
)
