import { Fragment } from "react";
import React from "react";
import "../App.css";


function ProgressionBar() {



        return (
            <Fragment>
                <div className="progressionBar">
                <span> Collaboration en discussion - POC </span>

                <div className="progression">
                    <div className="points">

                        <button className="point"></button>
                        <button className="point"></button>
                        <button className="point"></button>
                        <button className="point"></button>
                        <button className="point"></button>
                        <button className="point"></button>
                        <button className="point"></button>
                        
                    </div>

                </div>
                
                </div>
            </Fragment>
        );



}


export default ProgressionBar;