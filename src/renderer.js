// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

function startStreaming() {
    var canvas = document.getElementById('video-canvas');
    var url = 'ws://localhost:8082/';
    var player = new JSMpeg.Player(url, { canvas: canvas });
}

setTimeout(startStreaming, 1000);
