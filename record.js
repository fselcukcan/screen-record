
export function recordStart(stream, { mimeType = "video/webm" }) {
  const mediaRecorder = new MediaRecorder(stream, { mimeType });
  mediaRecorder.ondataavailable = handleDataAvailable;
  mediaRecorder.start();
  return mediaRecorder
}

function handleDataAvailable(event) {
  let recordedChunks = [];
  if (event.data.size > 0) {
    recordedChunks.push(event.data);
    download(recordedChunks, {});
  } else {
    // ...
    console.log("handleDataAvailable else")
  }
}

function download(recordedChunks, { mimeType = "video/webm" }) {
  var blob = new Blob(recordedChunks, {
    type: mimeType
  });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  a.href = url;
  a.download = "test.webm";
  a.click();
  window.URL.revokeObjectURL(url);
}

export function recordStop(video) {

}