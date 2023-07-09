import React from "react";

class Recherche extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            recherche: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const valeur = e.target.value.toLowerCase();
        this.props.onFilter(valeur);
    }

    render() {
        return(
            <>
                <h2>
                    Recherche
                </h2>
                <label htmlFor="filtre">Titre</label>
                <input type="text" name="filter" id="filtre" placeholder="Recherchez le poste" onChange={this.handleChange} />
            </>
        )
    }
}

export default Recherche;