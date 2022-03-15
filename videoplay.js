import { getDisplayMedia, stopDisplayMedia } from "./stream.js";

export async function showDisplayMedia(stream, video) {
  video.srcObject = stream
  video.play()
  return video
}

export function stopShowingDisplayMedia(video) {
  video.srcObject = null
  return video
}