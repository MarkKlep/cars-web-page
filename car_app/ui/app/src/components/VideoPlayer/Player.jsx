

const Player = () => {

  const videoId = '2SUwOgmvzK4';

  return (
    <div style={{position: 'absolute', left: '70%'}}>
      <iframe
            width="640"
            height="390"
            src={`https://www.youtube.com/embed/` + videoId}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
      >
      </iframe>


    </div>
  )
}

export default Player;