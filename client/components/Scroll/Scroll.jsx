import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import DetailSlide from './DetailSlide'


const Scroll = () => (
  <ReactFullpage
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
            {/* <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button> */}
            <DetailSlide image="BackgroundLanding.jpg" />
            <DetailSlide image="BackgroundLanding.jpg" />
            <DetailSlide image="BackgroundLanding.jpg" />
            <DetailSlide image="BackgroundLanding.jpg" />
            <DetailSlide image="BackgroundLanding.jpg" />
            <DetailSlide image="BackgroundLanding.jpg" />
            <DetailSlide image="BackgroundLanding.jpg" />
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Scroll