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
    "img/map/Japan Map/Gappa Japan.png",
    "img/map/Japan Map/inugami Japan.png",
    "img/map/Japan Map/nekomata Japan.png",
    "img/map/Japan Map/tanuki Japan.png",
)
