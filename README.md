# demo-electron-jsmpeg

This is a demo to setup an Electron Application to play RTSP video.

1. clone
2. npm install
3. Install ffmpeg. https://ffmpeg.org/download.html
4. Edit src/websocket-relay.js to change the SOURCE_RTSP to your source.
5. npm run start

## Known issue:
1. ffmpeg may fail with error randomly. Please check the devtool console output. Maybe it is caused by low CPU fenqency?

[CC0 1.0 (Public Domain)](LICENSE.md)
