import React, { useEffect } from "react";
import "./css/style.css";
import { Slider } from "./js/Slider";

const ImageSlider = () => {
    useEffect(() => {
        new Slider();
    }, []);

    return (
        <div className="slider-wrap" id="slider-wrap">
            <ul className="list slider" id="slider">
                <li>
                    <img src={"image/red.jpeg"} />
                </li>
                <li>
                    <img src={"image/orange.jpeg"} />
                </li>
                <li>
                    <img src={"image/yellow.jpeg"} />
                </li>
                <li>
                    <img src={"image/green.jpeg"} />
                </li>
                <li>
                    <img src={"image/blue.jpeg"} />
                </li>
                <li>
                    <img src={"image/indigo.jpeg"} />
                </li>
                <li>
                    <img src={"image/violet.jpeg"} />
                </li>
            </ul>
            <div className="btn next" id="next">
                <i className="fa fa-arrow-right"></i>
            </div>
            <div className="btn previous" id="previous">
                <i className="fa fa-arrow-left"></i>
            </div>

            <div className="indicator-wrap" id="indicator-wrap">
                <ul>
                    <li className="active"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

            <div className="control-wrap play" id="control-wrap">
                <i className="fa fa-pause" id="pause" data-status="pause"></i>
                <i className="fa fa-play" id="play" data-status="play"></i>
            </div>
        </div>
    );
};

export default ImageSlider;
