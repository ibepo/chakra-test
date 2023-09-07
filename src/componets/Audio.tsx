import React from 'react'
import ReactDOM from 'react-dom'
import { useAudio } from 'react-use'

export default Audio = () => {
  const [audio, state, controls, ref] = useAudio({
    // src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    src: `https://pay.chinatsi.net//static/sound/20230731/458c96da0758b4291c1c1657b38a6bde3357a710c1fb8f24f8938b3d19fe701f.mp3`,
    autoPlay: true,
  })

  return (
    <div>
      {audio}
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={controls.pause}>Pause</button>
      <button onClick={controls.play}>Play</button>
      <br />
      <button onClick={controls.mute}>Mute</button>
      <button onClick={controls.unmute}>Un-mute</button>
      <br />
      <button onClick={() => controls.volume(0.1)}>Volume: 10%</button>
      <button onClick={() => controls.volume(0.5)}>Volume: 50%</button>
      <button onClick={() => controls.volume(1)}>Volume: 100%</button>
      <br />
      <button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>
      <button onClick={() => controls.seek(state.time + 5)}>+5 sec</button>
    </div>
  )
}
