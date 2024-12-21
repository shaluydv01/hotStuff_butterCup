import React from "react";
import styled from "styled-components";
import AudioPlayer from "../../Components/audioPlayer/AudioPlayer";
import barsaatKe from "../../static/Barsaat Ke Mausam Mein Naajayaz 128 Kbps.mp3";
import tereMere from "../../static/Tere Mere Stebin Ben 128 Kbps.mp3";
import tuMilGaya from "../../static/Tu Mil Gaya Srikanth 128 Kbps.mp3";
import shaamBhiKoi from "../../static/Sham - JalRaj_320(MyMp3Song).mp3";
import aabroo from "../../static/Abroo-Nabeel-Shaukat-Ali.mp3";
import sagarJaisi from "../../static/Saagar-Jaisi-Aankhon-Wali-Unwind-Version-Sreerama-Chandra.mp3";
import tuJunoonSa from "../../static/Tu Junoon Sa Laga Shahid Mallya 128 Kbps.mp3";
import naamKar from "../../static/Naam Kar Mere Laqshay Kapoor 128 Kbps.mp3";
import Navbar from "../../Components/Navbar/Navbar"

const HotStuff = () => {
  return (
    <>
    <Navbar />
    <Div className="flex justify-start items-center flex-col gap-2 min-h-screen pt-44">
      {/* <h1 className="m-4 font-bold text-7xl text-orange-700">You & Me</h1> */}
      <AudioPlayer title="Naam Kar mere..." song={naamKar} />
      <AudioPlayer title="Barsaat ke mausam mein..." song={barsaatKe} />
      <AudioPlayer title="Tere mere bich mein..." song={tereMere} />
      <AudioPlayer title="Tu mil gaya song..." song={tuMilGaya} />
      <AudioPlayer title="Shaam bhi koi jaise..." song={shaamBhiKoi} />
      <AudioPlayer title="Aabroo song..." song={aabroo} />
      <AudioPlayer title="Sagar jaisi aankho waali..." song={sagarJaisi} />
      <AudioPlayer title="Tu junoon sa laga..." song={tuJunoonSa} />
      <button className="w-1/2 font-bold text-lg rounded-lg bg-orange-700 py-3 text-white">
        ButterCup
      </button>
    </Div>
    </>
  );
};

export default HotStuff;

const Div = styled.div`
  background-image: url("https://cdn.pixabay.com/photo/2021/10/16/05/43/love-6713977_1280.jpg");
  background-repeat: no-repeat;
  height: auto;
  @media only screen and (max-width: 1000px) {
    background-size: contain;
    h1 {
      font-size: 8vw;
    }
  }
`;
