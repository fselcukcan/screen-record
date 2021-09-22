export async function getDisplayMedia(displayMediaConstraints = { video: { cursor: 'always' }, audio: true }) {
  try {
    return await navigator.mediaDevices.getDisplayMedia(displayMediaConstraints)
  } catch (error) {
    console.error(error)
  }
}

export function stopDisplayMedia(stream) {
  try {
    const tracks = stream.getTracks()
    tracks.forEach(track => track.stop());
  } catch (error) {
    console.error(error)
  }
}