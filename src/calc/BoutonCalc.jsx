import React from 'react';
import { Button } from 'reactstrap';
import './BoutonCalc.css';

const Bouton = (props) => {
    return(
        <Button color={props.color} value={props.value} className="add" onClick={props.fonctionClick}>{props.contenu}</Button>
    )
}

export default Bouton;