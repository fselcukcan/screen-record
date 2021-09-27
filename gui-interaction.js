import { captureStartButton, captureStopButton, video, recordStartButton } from "./gui.js";
import { getDisplayMedia, stopDisplayMedia } from "./stream.js";
import { recordStart } from "./record.js";

captureStartButton.addEventListener('click', () => showDisplayMedia(video))

captureStopButton.addEventListener('click', () => stopShowingDisplayMedia(video))

recordStartButton.addEventListener('click', () => recordStart(video, {}))


async function showDisplayMedia(video) {
  const stream = await getDisplayMedia();
  video.srcObject = stream
  video.play()
  return video
}

function stopShowingDisplayMedia(video) {
  const stream = video.srcObject
  stopDisplayMedia(stream)
  video.srcObject = null
  return video
}