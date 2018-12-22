import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Header from '../Header';
import ElementsProduits from './ElementsProduits';
import ElementsPanier from './ElementsPanier';

import products from './products.json'

class Panier extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            elements: [],
            panier: [],
            total: 0,
        }
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.handleClickEmptyPanier = this.handleClickEmptyPanier.bind(this);
    }

    componentDidMount() {
      const height = window.innerHeight - 100;
      this.setState({
        height,
        elements: products,
      });
    }

    componentDidUpdate() {
      if (this.state.total < 0) {
        this.setState({
          total: 0,
        });
      }
    }

    handleClickAdd(idArg) {
      let id = parseInt(idArg);
      let priceNumber = this.state.elements.filter((item, index) => {
        if (id-1 === index) {
          return item.price;
        }
      });
      this.setState({
        panier: [...this.state.panier, products[id-1]],
        total: this.state.total + priceNumber[0].price,
      });
    }

    handleClickDelete(idArg) {
      let id = parseInt(idArg);
      let priceElement = 0;
      const newPanier = this.state.panier.filter(item => {
        if (id !== item.id) {
          return item;
        } else if (id === item.id) {
          priceElement = this.state.total - parseInt(item.price, 10);
        }
      });
      this.setState({
        panier: newPanier,
        total: priceElement,
      });
    }

    handleClickEmptyPanier() {
      this.setState({
        panier: [],
        total: 0,
      });
    }

    render() {
        return(
            <div>
                <Header img={<i className="fas fa-shopping-cart"></i>} txt="Panier" />
                <Container fluid>
                    <Row>
                        <Col md="6">
                            <h2>Produits</h2>
                            <Row>
                                {this.state.elements.map(item => {
                                    return <ElementsProduits img={item.img} id={item.id} name={item.product} price={item.price} handleClick={this.handleClickAdd} />
                                })}
                            </Row>
                        </Col>
                        <Col  md="6">
                            <h2>Panier</h2>
                            <Button color='info' onClick={this.handleClickEmptyPanier}>Vider le panier</Button>
                            <Row>
                                {this.state.panier.map(item => {
                                    return <ElementsPanier img={item.img} id={item.id} name={item.product} price={item.price} handleClick={this.handleClickDelete} />
                                })}
                            </Row>
                            <hr />
                            <h3>Montant total : {this.state.total}€</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Panier;