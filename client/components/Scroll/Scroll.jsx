import React from 'react';
// import ReactDOM from 'react-dom';
// import ReactFullpage from '@fullpage/react-fullpage';
import DetailSlide from './DetailSlide'
import ScrollFullPage from './ScrollFullPage'
import LandingNav from './LandingNav' 

const text1 = "Te Kaupapa Rāhuiatia maps Māori knowledge and customs of kaitiakitanga of whenua, moana and tangata"

const text2 = "The chief Tukuha set up a rāhui post at Te Rautāwhiri. The post remained in the same position, but whenever the chief wanted to rāhui the eels of his part of the Rangitāiki River, he would ‘hang one of his old garments’ on it. That would signal a complete ban on that one resource, eels."

const text3 = "Why is the practice of rahui important? Drawing connection from Te Ao Maori to real life. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"

function Scroll() {
  return (
    <div className="landing-scroll">
      <LandingNav />
      <ScrollFullPage >
          <DetailSlide image="BackgroundLanding.jpg" SlideText={text1} />
          <DetailSlide image="BackgroundLanding.jpg" SlideText={text2}  />
          <DetailSlide image="BackgroundLanding.jpg" SlideText={text3} />
      </ScrollFullPage>
    </div>
  )
}

export default Scroll



// const Scroll = () => (
//   <ReactFullpage
//     render={({ state, fullpageApi }) => {
//       return (
//         <ReactFullpage.Wrapper>
//             {/* <button onClick={() => fullpageApi.moveSectionDown()}>
//               Click me to move down
//             </button> */}
//             <DetailSlide image="BackgroundLanding.jpg" />
//             <DetailSlide image="BackgroundLanding.jpg" />
//             <DetailSlide image="BackgroundLanding.jpg" />
//             <DetailSlide image="BackgroundLanding.jpg" />
//             <DetailSlide image="BackgroundLanding.jpg" />
//             <DetailSlide image="BackgroundLanding.jpg" />
//             <DetailSlide image="BackgroundLanding.jpg" />
//         </ReactFullpage.Wrapper>
//       );
//     }}
//   />
// );

// export default Scroll