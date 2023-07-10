import React, { useEffect } from "react";
import "./css/style.css";

const Calculator = () => {
    return (
        <div className="calc_wrap">
            <div className="calc_row">
                <input
                    className="calc_input"
                    readOnly
                    disabled
                    value={"1234500"}
                />
            </div>
            <div className="calc_row">
                <div className="calc_btn">7</div>
                <div className="calc_btn">8</div>
                <div className="calc_btn">9</div>
                <div className="calc_btn">=</div>
            </div>
            <div className="calc_row">
                <div className="calc_btn">4</div>
                <div className="calc_btn">5</div>
                <div className="calc_btn">6</div>
                <div className="calc_btn">+</div>
            </div>
            <div className="calc_row">
                <div className="calc_btn">1</div>
                <div className="calc_btn">2</div>
                <div className="calc_btn">3</div>
                <div className="calc_btn">-</div>
            </div>
            <div className="calc_row">
                <div className="calc_btn lg">0</div>
                <div className="calc_btn">/</div>
                <div className="calc_btn">*</div>
            </div>
        </div>
    );
};

export default Calculator;
