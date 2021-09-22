var types = [
  "video/webm",
  "audio/webm",
  "video/webm\;codecs=vp8",
  "video/webm\;codecs=vp9",
  "video/webm\;codecs=daala",
  "video/webm\;codecs=h264",
  "audio/webm\;codecs=opus",
  "video/mpeg",
  "video/mp4",
  "video/ogg"
];

for (var i in types) {
  console.log("Is " + types[i] + " supported? " + (MediaRecorder.isTypeSupported(types[i]) ? "Maybe!" : "Nope :("));
}
