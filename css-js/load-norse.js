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
    "img/map/Nores Map/fenrir Norse.png",
    "img/map/Nores Map/Jörmungandr Norse.png",
    "img/map/Nores Map/kraken Norse.png",
    "img/map/Nores Map/Sleipnir Norse.png"
)
