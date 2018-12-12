import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
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
    }

    componentDidMount() {
      const height = window.innerHeight - 100;
      this.setState({
        height,
        elements: products,
      });
    }

    handleClickAdd(e) {
      let priceNumber = this.state.elements.filter((item, index) => {
        if (e.target.id-1 === index) {
          return item.price;
        }
      });
      this.setState({
        panier: [...this.state.panier, products[e.target.id-1]],
        total: this.state.total + priceNumber[0].price,
      });
    }

    handleClickDelete(e) {
      let priceElement = 0;
      const newPanier = this.state.panier.filter((item, index) => {
        if (e.target.id-1 !== index) {
          priceElement = item.price;
          return item;
        }
      });
      console.log(priceElement);
      console.log(this.state.total)
      this.setState({
        panier: newPanier,
        total: this.state.price - priceElement,
      });
    }

    render() {
        return(
            <div>
              <div className="maintenancePanier" style={{ minHeight: this.state.height }}>
                <h1 className="titleMaintenance"><i class="fas fa-wrench"></i> En maintenance</h1>
              </div>
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