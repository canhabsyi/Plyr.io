// Change "{}" to your options:
// https://github.com/sampotts/plyr/#options
const player = new Plyr('#player', {autoplay: true, loop: true, muted: false, volume: 5});

// Expose player so it can be used from the console
window.player = player;
