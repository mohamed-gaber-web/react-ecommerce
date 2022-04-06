import React, { useState, useEffect } from 'react';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import './Slider.css';

import axios from 'axios';


function Slider() {

    const [sliders, setSliders] = useState([]);

    useEffect(() => {
        const fetchSlider = (async () => {
            let response = await axios.get('api/Slider/List?Offset=0&&Limit=5')
            console.log(response.data);
            // response = await response.json();
            setSliders(response.data['result'])
        })
        fetchSlider();
    }, [])

    const getDataSliders = sliders.map(slider => {
        return (
            <div key={slider.id}>
                <img src={slider.imagePath} />
                <div className="legend">
                <p>{ slider.sliderTranslations[0].title }</p>
                <p className="sub_title">{ slider.sliderTranslations[0].subTitle }</p>
                <button> shop now </button>
                </div>
                
            </div>
        );
    })

    return (
        <>
            <Carousel>
                { getDataSliders }
            </Carousel>
        </>
    );
}

export default Slider