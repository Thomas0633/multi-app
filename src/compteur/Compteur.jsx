import React, { Component } from 'react';
import Header from '../Header';
import BouttonCompt from './BouttonCompt';
import './Compteur.css';

class Compteur extends Component {
    constructor() {
        super()
        this.state = {
            nb: 0
        }
    }

    increment() {
        this.setState({
            nb: this.state.nb + 1
        });
    };

    increment5() {
        this.setState({
            nb: this.state.nb + 5
        });
    };

    decrement() {
        this.setState({
            nb: this.state.nb - 1
        })
    };

    decrement5() {
        this.setState({
            nb: this.state.nb - 5
        })
    };

    reset() {
        this.setState({
            nb: 0
        })
    };

    render() {
        return(
            <div>
                <Header img={<i class="far fa-hand-pointer"></i>} txt="Compteur" />
                <div className="mb-5 mt-3 d-flex align-items-center justify-content-center">
                    <div className="border border-secondary containerCompt">
                        <div className="d-flex align-items-center justify-content-center w-100">
                            <div className="d-flex align-items-center justify-content-center containerResult">
                                <h2 className="result">{ this.state.nb }</h2>
                            </div>
                        </div>
                        <div>
                            <BouttonCompt color="info" fonction={() => this.increment5()} contenu={<div><i class="fas fa-plus"></i><span className="font-weight-bold boutonCompteur2"> 5</span></div>} />
                            <BouttonCompt color="success" fonction={() => this.increment()} contenu={<i class="fas fa-plus"></i>} />
                            <BouttonCompt color="warning" fonction={() => this.reset()} contenu={<i class="fas fa-sync-alt"></i>} />
                            <BouttonCompt color="danger" fonction={() => this.decrement()} contenu={<i class="fas fa-minus"></i>} />
                            <BouttonCompt color="info" fonction={() => this.decrement5()} contenu={<div><i class="fas fa-minus"></i><span className="font-weight-bold boutonCompteur2"> 5</span></div>} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Compteur;