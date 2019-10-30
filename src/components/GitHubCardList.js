import React from 'react';
import GitHubCard from './GitHubCard';

class GitHubCardList extends React.Component {
    constructor() {
        super();
    }
    

    render() {
        return (
            <div className="card-list-div">
                {this.props.followersList.map(follower => (
                    <GitHubCard login={follower.login} avatar_url={follower.avatar_url} id={follower.id} repos_url={follower.url} />
                ))}
            </div>
            
        )
    }
}

export default GitHubCardList;