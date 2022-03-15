import { recordStartButton, recordStopButton, video } from "./gui.js";
import { recordStart, recordStop } from "./record.js";
import { getDisplayMedia, stopDisplayMedia } from "./stream.js";
import { showDisplayMedia, stopShowingDisplayMedia } from "./videoplay.js";

recordStartButton.addEventListener('click', async () => {
  const stream = await getDisplayMedia();
  recordStart(stream, {})
  await showDisplayMedia(stream, video)
  // make this button invisible after recording starts
  recordStartButton.style.display = 'none'
  recordStopButton.style.display = 'inline'
})

recordStopButton.addEventListener('click', () => {
  const stream = video.srcObject
  stopDisplayMedia(stream)
  stopShowingDisplayMedia(video)
  // make this button invisible after recording stops
  recordStopButton.style.display = 'none'
  recordStartButton.style.display = 'inline'
})