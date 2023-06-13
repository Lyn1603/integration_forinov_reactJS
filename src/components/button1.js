import '../App.css';
import pdf from '../assets/pdf.png';
import { Fragment } from 'react';



function Button1() {
    return (
        <Fragment>
    


                <button className="button1">
                    <img src={pdf} alt="pdf" className="pdf" />
                </button>


        </Fragment>
    );
    }



export default Button1;