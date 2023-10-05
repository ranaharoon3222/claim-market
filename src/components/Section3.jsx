import React from 'react';
import 'video-react/dist/video-react.css'; // import css
import { Player, BigPlayButton } from 'video-react';

const Section3 = () => {
  return (
    <>
      <div className='container'>
        <div className='video'>
          <Player
            playsInline
            poster='/video-pic.png'
            src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
          >
            <BigPlayButton position='center' />
          </Player>
        </div>
      </div>
      <div className='elip-3'>
        <img src='/elip-2.png' alt='' />
      </div>
    </>
  );
};

export default Section3;
