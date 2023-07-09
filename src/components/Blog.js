import React from "react";

import Poste from "./Poste";

class Blog extends React.Component {
    render() {
        let nombrePosts = this.props.nombre;
        let nombre;
        if (nombrePosts === 100) {
            nombre = "";
        } else if (nombrePosts === 0) {
            nombre = <p className="nombre-postes">Aucun résultat</p>;
        } else {
            nombre = <p className="nombre-postes">{this.props.nombre} articles trouvés</p>;
        }

        return(
            <>
                {nombre}
                {this.props.nombre !== 0 ? <h2>Liste des articles</h2> : ""}
                {this.props.posts.map(post => <Poste key={post.id} {...post} />)}
            </>
        )
    }
}

export default Blog;