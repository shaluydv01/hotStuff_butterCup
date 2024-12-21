import React, { useState } from "react";
import useSound from "use-sound"; //for handling the sound
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customazing the icons
import styled from "styled-components";

const AudioPlayer = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(props.song);

  const playingButton = () => {
    if (isPlaying) {
      pause(); // this will pause the audio
      setIsPlaying(false);
    } else {
      play(); // this will play the audio
      setIsPlaying(true);
    }
  };
  return (
    <Div className="font-sans flex justify-center items-center gap-40 w-1/2 px-4 rounded-sm">
      <div id="text-song" className="font-bold text-xl w-1/2 text-nowrap">{props.title}</div>
      <div className="flex justify-center items-center">
        <button className="playButton">
          <IconContext.Provider value={{ size: "2em", color: "orangered" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "2em", color: "orangered" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "2em", color: "orangered" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
        <button className="playButton">
          <IconContext.Provider value={{ size: "2em", color: "orangered" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </Div>
  );
};

export default AudioPlayer;

const Div = styled.div`
  color: white;
  background-color: #7979fc;
  opacity: 50%;
  width: 50%;
  @media only screen and (max-width: 1000px) {
    gap: 40px;
    #text-song{
      font-size: 2.5vw;
    };
  }
`;
