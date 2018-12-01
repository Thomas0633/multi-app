import React, { Component } from 'react';

class FiltresAppliques extends Component {
    render() {
        return(
            <div className="mt-3">
                <h4>Filtres appliqués : <span class="badge badge-secondary">{this.props.filtrePays}</span><span class="badge badge-secondary">{this.props.filtreContinent}</span><span class="badge badge-secondary">{this.props.filtreDepart}</span><span class="badge badge-secondary">{this.props.filtreRetour}</span></h4>
            </div>
        )
    }
}

export default FiltresAppliques;