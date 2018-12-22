import React from 'react';
import { Col, Button } from 'reactstrap';
import './panier.css';

const ElementsPanier = (props) => {
    return (
        <Col md='12' className='pt-2 pb-2'>
          <img src={props.img} alt='Produit' className='img-fluid imagePanier' />
          {props.name} - {props.price}€
          <Button color="danger" className='btnDeletePanier' name={props.id} onClick={() => props.handleClick(props.id)}>Supprimer <i className="fas fa-trash-alt"></i></Button>
        </Col>
    )
}

export default ElementsPanier;