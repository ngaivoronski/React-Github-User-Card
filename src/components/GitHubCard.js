import React from 'react';

class GitHubCard extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="card-div">
                <h4 className="card-username">{this.props.login}</h4>
                <img src={this.props.avatar_url} className="card-img"></img>
                <p className="card-id"><strong>ID:</strong> {this.props.id}</p>
                <p className="card-url"><strong>Repos:</strong> {this.props.repos_url}</p>
            </div>
        )
    }
}

export default GitHubCard;