// Change "{}" to your options:
// https://github.com/sampotts/plyr/#options
const player = new Plyr('#player', {autoplay: true, muted: false, volume: 0});

// Expose player so it can be used from the console
window.player = player;
