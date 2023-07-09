import React from "react";

import Commentaire from "./Commentaire";

class Poste extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: this.props.userId,
            username: "",
            postId: this.props.id,
            commentaires: [],
            commentairesAffichage: false
        };

        
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/' + this.state.userId)
        .then(response => response.json())
        .then(datas => {this.setState({
            username: datas.username
        });})
        .catch(erreur => console.error(erreur));

        fetch('https://jsonplaceholder.typicode.com/posts/' + this.state.postId + '/comments')
        .then(response => response.json())
        .then(datas => {this.setState({
            commentaires: datas
        });})
        .catch(erreur => console.error(erreur));
    }

    handleClick() {
        if (this.state.commentairesAffichage === false) {
            this.setState({
                commentairesAffichage: true
            });
        } else if (this.state.commentairesAffichage === true) {
            this.setState({
                commentairesAffichage: false
            });
        }
        
    }

    render() {
        return(
            <div className="post">
                <h4>
                    {this.props.title}
                </h4>
                <p>
                    {this.props.body}
                </p>
                <div className="infos">
                    <p>
                        Ecrit par {this.state.username}
                    </p>
                    <p className="button" onClick={this.handleClick} >
                        Il y a {this.state.commentaires.length} commentaire
                    </p>
                    {this.state.commentairesAffichage ? this.state.commentaires.map(commentaire => <Commentaire key={commentaire.id} {...commentaire} />) : ""}
                </div>
                
            </div>
        )
    }
}

export default Poste;