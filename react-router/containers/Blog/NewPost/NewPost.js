import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted : false
    };

    componentDidMount(){
        console.log(this.props);
    }
    addPostHandler = () => {
        const data = {
            title : this.state.title,
            body : this.state.content,
            author : this.state.author
        };

        axios.post('/posts',data).then(response =>{
            console.log(response);
            // this.setState({submitted : true}); //using redirect condiotnally
            //this.props.history.push('/posts'); this doesnt replace the page but work as a redirect
            this.props.history.replace('/posts'); //this replace the page and work as a redirect
        });
        
    }

    render () {

    let redirect = null;
    if(this.state.submitted){
        redirect = <Redirect to = "/post" />; //In redirect outside the switch we dont use 'from'
    }

        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick = {this.addPostHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;