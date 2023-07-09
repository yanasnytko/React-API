import React from "react";

class Commentaire extends React.Component {
    render() {
        return(
            <>
                <div className="comment">
                    <p>
                        {this.props.body}
                    </p>
                    <p className="author">
                        {this.props.email}
                    </p>
                </div>
            </>
        )
    }
}

export default Commentaire;