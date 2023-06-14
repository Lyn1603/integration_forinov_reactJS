import './App.css';
import { Fragment } from 'react';
import pdf from './assets/pdf.png';
import Logo from './components/logo.js';
import Web from './assets/website.png';
import facebook from './assets/facebook.png';
import linkedin from './assets/linkedin.png';
import twitter from './assets/twitter.png';
import combineshape from './assets/combinedShape.png';
import LocalMap from './assets/map-localisation-copy.png';
import ProgressionBar from './components/progressionBar.js';


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

                  <button className="button1">
                    <img src={pdf} alt="pdf" className="pdf" />
                  </button>
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


          <img src={LocalMap} alt="map" className="map" />

          <p className='adress'>Paris, FR</p>
              
          <img src={Web} alt="website" className="website" />

          <p className='link'>www.demo.com</p>

          <div className="social">

            <img src={facebook} alt="social"  />
            <img src={twitter} alt="social" />
            <img src={linkedin} alt="social"  />
            <img src={combineshape} alt="social" />

          </div>
        
        </div>

        <div className="text">

          <span className='text1'>
            Jubiwee est une application web qui mesure automatiquement le ressenti des collaborateurs, 
          détecte les signaux faibles et populations à risque. 
          Elle génère également des plans d’actions pour donner aux managers
           les meilleures actions pour réduire le turnover, l’absentéisme et améliorer l’engagement dans leur équipe.
          </span>
        
        
        </div> 

        <div className="button">

        <button className="button2">
            <span style={{ color:"#006dff"}}>Ressources Humaines</span>
        </button>

          <div className='buttons'>

          <div >

              <button className="button3">
                    <span style={{ color:"#006dff"}}>Software</span>
              </button>

              <button className="button4">
                    <span style={{ color:"#006dff"}}>HR</span>
              </button>

          </div>
          
          <div >
              <button className="button1">
                    <span style={{ color:"#fff"}}>SUIVRE</span>
              </button>
          
              <button className="button5">
                    <span style={{ color:"#006dff"}}>PROFIL PUBLIC</span>
              </button>

          </div>

          </div>


          <div className="line"></div>

          <ProgressionBar />




        </div>


        </div>

      </div>
      
    </Fragment>
  );
}

export default App;
