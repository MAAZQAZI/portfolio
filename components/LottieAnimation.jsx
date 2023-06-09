import { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../public/hamburger.json';

const LottieAnimation = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isReversed, setIsReversed] = useState(false);
  
    const defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
  
    const handleClick = () => {
      if (isPlaying && !isReversed) {
        setIsReversed(true);
      } else if (isPlaying && isReversed) {
        setIsPlaying(false);
        setIsReversed(false);
      } else {
        setIsPlaying(true);
      }
    };
  
    return (
      <div onClick={handleClick} style={{ cursor: 'pointer' }}>
        <Lottie
          options={defaultOptions}
          height={300}
          width={300}
          isStopped={!isPlaying}
          isPaused={isReversed}
        />
      </div>
    );
  };
  
  export default LottieAnimation;
  