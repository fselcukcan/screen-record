var recordedChunks = [];
var mediaRecorder;
var id;

export function recordStart(video) {
  var stream = video.srcObject;

  console.log(stream);
  var options = { mimeType: "video/webm" /* "video/webm; codecs=vp9" */ };
  mediaRecorder = new MediaRecorder(stream, options);
  mediaRecorder.ondataavailable = handleDataAvailable;
  // mediaRecorder.onstart = () => id = startTimer();
  mediaRecorder.onstop = clearTimeout(id);
  mediaRecorder.start();
}

function handleDataAvailable(event) {
  console.log("data-available");
  if (event.data.size > 0) {
    recordedChunks.push(event.data);
    console.log(recordedChunks);
    download();
  } else {
    // ...
    console.log("handleDataAvailable else")
  }
}

function download() {
  var blob = new Blob(recordedChunks, {
    type: "video/webm"
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

// demo: to download after 9sec
// function startTimer() {
//   return setTimeout(event => {
//     console.log("stopping");
//     mediaRecorder.stop();
//   }, 9000);
// }
