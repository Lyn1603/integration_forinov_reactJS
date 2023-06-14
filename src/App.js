import './App.css';
import { Fragment } from 'react';
import Logo from './components/logo.js';
import LocalMap from './assets/map-localisation-copy.png'
import Button1 from './components/button1.js';

function App() {
  return (
    <Fragment>

      <div className="Card">

        <div className="bgphoto">
          
        </div>


      <div className="bgprofile">

        <div className="profile">

            <div className="photoprofile">

                  <Logo />
                <Button1 />

            </div>

          <div className="about">

              <h2 className='Jubiwee'>Jubiwee</h2>

              <div className="dots">

                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
          
              </div>
           


            </div>
        
        </div> 


        <div className="contact">

          <div className="about">

          <img src={LocalMap} alt="map" className="map" />
          
              <div className="dots">

                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
          
              </div>
           


            </div>
        
        </div> 


        </div>

      </div>
      
    </Fragment>
  );
}

export default App;
