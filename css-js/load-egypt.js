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
    "img/map/Egypt Map/Ammit egypt.png",
    "img/map/Egypt Map/Anubis egypt.png",
    "img/map/Egypt Map/Apep egypt.png",
    "img/map/Egypt Map/Sphinx egypt.png",
)
