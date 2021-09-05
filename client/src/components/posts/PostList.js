import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderAdmin (post) {
        if(post.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/posts/edit/${post.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <button className="ui button negative">
                        Delete
                    </button>
                </div>    
            )
        }
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    {this.renderAdmin(post)}
                    <div className="content">
                        {post.title}
                        <div className="description">{post.body}</div>
                    </div>
                </div>
            )
        })
    }

    renderCreate() {
        if (this.props.isSignedIn) {
          return (
            <div style={{ textAlign: 'right' }}>
              <Link to="/posts/new" className="ui button primary">
                Create Post
              </Link>
            </div>
          );
        }
      }

    render() {
        return (
            <div>
                <h2>Posts</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        posts: Object.values(state.posts),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.is 
    }
}

export default connect(
    mapStateToProps, 
    { fetchPosts }
)(PostList)