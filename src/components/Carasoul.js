import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class extends React.Component {
  render(props) {
    let temp = -1;
     return (
     <>
      <CarouselProvider
        naturalSlideWidth={10}
        naturalSlideHeight={12}
        totalSlides={this.props.carasoulList.length}
        infinite='true'
        interval={2000}
        isPlaying='true'
        touchEnabled='true'
      >
        <Slider style={{
          'height':'300px',
          'width':'100%',
          'border':'solid black 2px'
        }}>
          {this.props.carasoulList.map((element)=>{
               {temp = temp + 1}
               return <Slide index={temp} key={temp}>
                    <img src={element} 
                        style= {{
                              'height':'300px',
                              'width' : '100%'   
                         }}             
                    /> 
               </Slide>
          })}
        </Slider>
        
        {/* <ButtonBack >Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
       */}
     </CarouselProvider>
    </>  
    );
  }
}