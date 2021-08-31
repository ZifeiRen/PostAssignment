import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import posts from '../../apis/posts'

const PostSearch = () => {
    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);
   
    useEffect(() => {
        const timeId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timeId);
        };
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await posts.get('/posts', {
                params: {
                    title_like: debouncedTerm,
                },
            });

            setResults(data);
        };
        if(debouncedTerm){
            search();
        }
    }, [debouncedTerm]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.id} className="item">
                 <div className="content">
                        {result.title}
                        <div className="description">{result.body}</div>
                        <div className="right floated content">
                            <Link to={`/posts/edit/${result.id}`} className="ui button primary">
                                Edit
                            </Link>
                        </div>
                    </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui search">
                <div className="ui icon input">
                    <input 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input" 
                    />
                    <i className="search icon" />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    )
    
}

export default PostSearch;
