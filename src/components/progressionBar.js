import { Fragment } from "react";
import { useState } from "react";
import React from "react";
import "../App.css";


function ProgressionBar() {

        const [progression, setProgression] = useState(0);
        const [localStorageValue, setLocalStorageValue] = useState('');
        const [date, setDate] = useState('');
        const currentDate = new Date();


          const MouseOver = () => {
            const storedValue = localStorage.getItem('date');
            if (storedValue) {
              const date = new Date(storedValue);
              const hours = date.getHours(); // Jour du mois 
              const min = date.getMinutes() + 1; // Mois 
              const formattedDate = `${hours}h${min}`;
              setLocalStorageValue(formattedDate);
              console.log(localStorageValue);
            }
              
          };


          const MouseLeave = () => {
            setLocalStorageValue("");
          };



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

                        <div onMouseOver={MouseOver} onMouseLeave={MouseLeave}>
                        <button className="point" onClick={increaseProgression}> {localStorageValue} </button>                        
                        </div> 
                                               
                        <div onMouseOver={MouseOver} onMouseLeave={MouseLeave}>
                        <button className="point" onClick={increaseProgression}> {localStorageValue}</button>                        
                        </div>

                        <div onMouseOver={MouseOver} onMouseLeave={MouseLeave}>
                        <button className="point" onClick={increaseProgression}> {localStorageValue}</button>                        
                        </div>

                        <div onMouseOver={MouseOver} onMouseLeave={MouseLeave}>
                        <button className="point" onClick={increaseProgression}> {localStorageValue}</button>                        
                        </div>

                        <div onMouseOver={MouseOver} onMouseLeave={MouseLeave}>
                        <button className="point" onClick={increaseProgression}> {localStorageValue}</button>                        
                        </div>

                        <div onMouseOver={MouseOver} onMouseLeave={MouseLeave}>
                        <button className="point" onClick={increaseProgression}> {localStorageValue}</button>                        
                        </div>

                        <div onMouseOver={MouseOver} onMouseLeave={MouseLeave}>
                        <button className="point" onClick={increaseProgression}> {localStorageValue}</button>                        
                        </div>

                        
                        

                        
                    </div>

                </div>
                
                </div>
            </Fragment>       
        );



}


export default ProgressionBar;