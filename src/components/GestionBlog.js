import React from "react";

import banniere from '../banniere.png';

import Recherche from "./Recherche";
import Blog from "./Blog";

class GestionBlog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            posts_filtre: []
        };

        this.filterTitle = this.filterTitle.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(datas => {this.setState({
            posts: datas,
            posts_filtre: datas
        });})
        .catch(erreur => console.error(erreur))
        .finally(() => console.log("l'API a chargé"));
    }

    filterTitle(title) {
        this.setState({
            posts_filtre: this.state.posts.filter(post => post.title.toLowerCase().includes(title))
        })
    }

    render() {
        return(
            <>
                <img alt="banniere" src={banniere} />
                <Recherche onFilter={this.filterTitle} />
                <Blog posts={this.state.posts_filtre} nombre={this.state.posts_filtre.length} />
            </>
        )
    }
}

export default GestionBlog;