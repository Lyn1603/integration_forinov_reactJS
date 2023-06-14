import { Fragment } from "react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../App.css";
import { hover } from "@testing-library/user-event/dist/hover";


function ProgressionBar() {

        const [progression, setProgression] = useState(0);
        const [date, setDate] = useState('');
        const currentDate = new Date();



        const increaseProgression = () => {
            if ( progression < 100) {

              setProgression(progression + 18); 
              localStorage.setItem('date', currentDate.toString());
              setDate(currentDate.toString()); 
                
            }else if (progression > 100 ) {

              setProgression(0);

        
            }
          };



        return (
            <Fragment>
                <div className="progressionBar">
                <span> Collaboration en discussion - POC </span>

                <div className="progression" style={{ width: `${progression}%`, backgroundColor : '#006dff' }}>
                    <div className="points">

                        <div onMouseOver={() => console.log(localStorage.getItem('date'))}>
                        <button className="point" onClick={increaseProgression}></button>                        
                        </div> 
                                               
                        <div onMouseOver={() => console.log(localStorage.getItem('date'))}>
                        <button className="point" onClick={increaseProgression}></button>                        
                        </div>

                        <div onMouseOver={() => console.log(localStorage.getItem('date'))}>
                        <button className="point" onClick={increaseProgression}></button>                        
                        </div>

                        <div onMouseOver={() => console.log(localStorage.getItem('date'))}>
                        <button className="point" onClick={increaseProgression}></button>                        
                        </div>

                        <div onMouseOver={() => console.log(localStorage.getItem('date'))}>
                        <button className="point" onClick={increaseProgression}></button>                        
                        </div>

                        <div onMouseOver={() => console.log(localStorage.getItem('date'))}>
                        <button className="point" onClick={increaseProgression}></button>                        
                        </div>

                        <div onMouseOver={() => console.log(localStorage.getItem('date'))}>
                        <button className="point" onClick={increaseProgression}></button>                        
                        </div>

                        
                        

                        
                    </div>

                </div>
                
                </div>
            </Fragment>
        );



}


export default ProgressionBar;