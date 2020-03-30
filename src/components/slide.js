import React from 'react';
import { Slide } from 'react-slideshow-image';
import one from '../images/one.jpg'
import two from '../images/two.jpg'
import three from '../images/three.jpg'
import four from '../images/four.jpg'
import five from '../images/five.jpg'

const properties ={

}
const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...properties}>
                <div className="each-slide">
            <div>
                <img src={one} alt="one" />
            </div>
        </div>
        <div className="each-slide">
            <div>
                <img src={two} alt="teo" />
            </div>
        </div>
        <div className="each-slide">
            <div>
                <img src={three} alt="three" />
            </div>
        </div>
        <div className="each-slide">
            <div>
                <img src={four} alt="four" />
            </div>
        </div>
        <div className="each-slide">
            <div>
                <img src={five} alt="five" />
            </div>
        </div>
            </Slide>
        </div>
    )
}

export default Slideshow;