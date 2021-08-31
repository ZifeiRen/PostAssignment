import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <div className="content">
                        {post.title}
                        <div className="description">{post.body}</div>
                        <div className="right floated content">
                            <Link to={`/posts/edit/${post.id}`} className="ui button primary">
                                Edit
                            </Link>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h2>Posts</h2>
                <div className="ui celled list">{this.renderList()}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: Object.values(state.posts) }
}

export default connect(
    mapStateToProps, 
    { fetchPosts }
)(PostList)