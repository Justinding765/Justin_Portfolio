import './Orbit.css';
import icon1 from '../assets/img/nav-icon4.png';
import icon2 from '../assets/img/jira-icon.png';
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
export const Orbit = () => {
    return (
        <>
         <div id="circle-orbit-container">
       
        <div id="inner-orbit">
          <img id="github" src={icon1} alt="Image" />
          <img id="jira" src={icon2} alt="Image" />
          <img id="vs" src={icon3} alt="Image" />
          <img id="agile" src={icon4} alt="Image" />
        </div>
        {/* Circles second closest to the central point */}
        <div id="middle-orbit">
            <img id="js" src={icon6} alt="Image" />
            <img id="css" src={icon7} alt="Image" />
            <img id="sql" src={icon8} alt="Image" />
            <img id="html" src={icon9} alt="Image" />
            <img id="python" src={icon10} alt="Image" />
        </div>
        {/* Circles furthest away to the central point */}
        <div id="outer-orbit">
            <img id="bootstrap" src={icon11} alt="Image" />
            <img id="flask" src={icon12} alt="Image" />
            <img id="react" src={icon13} alt="Image" />
        </div>
      </div>

        </>


    )
}