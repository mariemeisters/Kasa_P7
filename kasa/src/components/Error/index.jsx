import React from "react"; 
import { Link } from 'react-router-dom';
import './style.scss';


function Error(props) {

    return (
        <div className="error">
            <img src={props.errorImg} alt={props.errorAlt} className="error__img"/>
            <h2>{props.errorH2}</h2>
            <Link to={props.redirectionTo} className="error__backhome" aria-label="Retour">{props.errorTxt}</Link>
        </div>
    )
 }
 
export default Error;

