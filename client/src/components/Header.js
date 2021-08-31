import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {      
        return (
            <div className="ui secondary pointing menu">
                <Link to="/" className="item">
                    All Posts
                </Link>
                <div className="right menu">
                    <Link to="/posts/search" className="item">
                        Search Posts
                    </Link>
                </div>
                <div className="right floated content">
                    <Link to="/posts/new" className="ui button primary">
                        New Post
                    </Link>
                </div>
            </div>
        )
    }
}

export default Header;