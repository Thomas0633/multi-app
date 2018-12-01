import React, { Component } from 'react';
import Header from '../Header';
import './pagePerso.css';

import { Button } from 'reactstrap';

class CarouselCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      background: 'bg-white',
      hauteur: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let hauteur = window.innerHeight - 100;
    this.setState({
        hauteur: hauteur,
    }, () => console.log(this.state));
  }

  handleChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleClick(e) {
    this.setState({
      background: e.target.value,
    })
  }

  render() {
    return (
      <div className={this.state.background} style={{ minHeight: this.state.hauteur }}>
        <Header img={<i className="fas fa-pencil-alt"></i>} txt="Page perso" />
        <p className='mb-5 mt-4 textTitle'>Saisi du texte dans le champ pour l'afficher en temps réel sur la page ou modifie la couleur du fond !</p>
        <h2>{this.state.name}</h2>
        <form>
          <label htmlFor="name">Text : </label>
          <input id="name" type="text" value={this.state.name} onChange={this.handleChange} />
        </form>

        <div className='mt-5'>
          <Button className='ml-2 mr-2 btnWhite' onClick={this.handleClick} value='bg-white'>Blanc</Button>
          <Button className='ml-2 mr-2' color="primary" onClick={this.handleClick} value='bg-primary'>Bleu clair</Button>
          <Button className='ml-2 mr-2' color="secondary" onClick={this.handleClick} value='bg-secondary'>Gris</Button>
          <Button className='ml-2 mr-2' color="success" onClick={this.handleClick} value='bg-success'>Vert</Button>
          <Button className='ml-2 mr-2' color="info" onClick={this.handleClick} value='bg-info'>Bleu</Button>
          <Button className='ml-2 mr-2' color="warning" onClick={this.handleClick} value='bg-warning'>Jaune</Button>
          <Button className='ml-2 mr-2' color="danger" onClick={this.handleClick} value='bg-danger'>Rouge</Button>
        </div>
      </div>
    );
  }
}

export default CarouselCards;