import React from 'react';

// 0:
// avatar_url: "https://avatars2.githubusercontent.com/u/13208265?v=4"
// events_url: "https://api.github.com/users/lindseybrown4/events{/privacy}"
// followers_url: "https://api.github.com/users/lindseybrown4/followers"
// following_url: "https://api.github.com/users/lindseybrown4/following{/other_user}"
// gists_url: "https://api.github.com/users/lindseybrown4/gists{/gist_id}"
// gravatar_id: ""
// html_url: "https://github.com/lindseybrown4"
// id: 13208265
// login: "lindseybrown4"
// node_id: "MDQ6VXNlcjEzMjA4MjY1"
// organizations_url: "https://api.github.com/users/lindseybrown4/orgs"
// received_events_url: "https://api.github.com/users/lindseybrown4/received_events"
// repos_url: "https://api.github.com/users/lindseybrown4/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/lindseybrown4/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/lindseybrown4/subscriptions"
// type: "User"
// url: "https://api.github.com/users/lindseybrown4"

class GitHubCard extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <h4>{this.props.login}</h4>
                <img src={this.props.avatar_url}></img>
                <p>ID: {this.props.id}</p>
                <p>Repos URL: {this.props.repos_url}</p>
            </div>
        )
    }
}

export default GitHubCard;