import './Bounce.css';
import icon3 from '../assets/img/vs-icon.png';
import icon4 from '../assets/img/agile-icon.png';
import icon6 from '../assets/img/js-icon.png';
import icon7 from '../assets/img/css-icon.png';
import icon8 from '../assets/img/sql-icon.png';
import icon9 from '../assets/img/html-icon.png';
import icon10 from '../assets/img/python-icon.png';
import icon11 from '../assets/img/bootstrap-icon.png';
import icon12 from '../assets/img/flask-icon.png';
import icon13 from '../assets/img/react-icon.png';
export const Bounce = () => {
    return (
        <div id="animated-example">
            <div  className = "animated bounce"><img src={icon3} id="icon3"/></div>
            <div  className = "animated bounce"><img src={icon6} id="icon6"/></div>
            <div  className = "animated bounce"><img src={icon7} id="icon7"/></div>
            <div  className = "animated bounce"><img src={icon8} id="icon8"/></div>
            <div  className = "animated bounce"><img src={icon9} id="icon9"/></div>
            <div  className = "animated bounce"><img src={icon10} id="icon10"/></div>
            <div  className = "animated bounce"><img src={icon12} id="icon12"/></div>
            {/* <div id = "animated-example2" class = "animated bounce"><img src={icon9} /></div> */}
        </div>


    )
}