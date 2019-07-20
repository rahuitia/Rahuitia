import React from 'react';
import LandingSlide from './LandingSlide'
import DetailSlide from './DetailSlide'
import ScrollFullPage from './ScrollFullPage'
import LandingNav from './LandingNav' 
import Bounce from './Bounce'

const text1 = "Te Kaupapa Rāhuiatia maps Māori knowledge and customs of kaitiakitanga of whenua, moana and tangata"

const text2 = "The chief Tukuha set up a rāhui post at Te Rautāwhiri. The post remained in the same position, but whenever the chief wanted to rāhui the eels of his part of the Rangitāiki River, he would ‘hang one of his old garments’ on it. That would signal a complete ban on that one resource, eels."

const text3 = "Why is the practice of rahui important? Drawing connection from Te Ao Maori to real life. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"

function Scroll() {
  return (
    <div className="landing-scroll">
      <LandingNav />
      <ScrollFullPage >
          <LandingSlide downIcon={<Bounce icon="blackarrow.svg"/>}/>
          <DetailSlide image="BackgroundLanding.jpg" SlideText={text1} icon={""} downIcon={<Bounce icon="whitearrow.svg"/>} />
          <DetailSlide image="BackgroundLanding.jpg" SlideText={text2} icon={""} downIcon={<Bounce icon="whitearrow.svg"/>} />
          <DetailSlide image="BackgroundLanding.jpg" SlideText={text3} icon={""} />
      </ScrollFullPage>
    </div>
  )
}

export default Scroll
