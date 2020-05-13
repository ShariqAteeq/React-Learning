import React, {Component} from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import {Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import {Link} from 'react-router-dom';

class Posts extends Component{
    state = {
        posts : [],
        selectedPostId : null,
        err : false
    };
    
    componentDidMount(){
        console.log(this.props);
        axios.get('/posts').then(response =>{   
            const selectedPosts = response.data.slice(0,4);
            const updatedPosts = selectedPosts.map(post=>{
                return{
                    ...post,
                    author : 'Shariq'
                };
            });
              this.setState({posts : updatedPosts});                                                                     
            //console.log(response);
        }).catch(err =>{        //catch is used to catch error
                this.setState({err: true});
        });
    }

    
    
    selectedPostHandler = (id) =>{
       this.setState({selectedPostId : id});
     //  this.props.history.push('/'+id);
    }
    render(){
        let allPost= <p style = {{textAlign : 'center'}}>Something Went Wrong!!</p>
            if(!this.state.err){
                allPost = this.state.posts.map(post => {
                    return (
                   <Link to = {'/posts/'+post.id}
                          key = {post.id}>
                    <Post title = {post.title} author = {post.author} 
                                 clicked = {() => this.selectedPostHandler(post.id)}   />
                                 </Link>
                                 );
                });
            }
        return(
            <div>
        <section className="Posts">
            {allPost}
        </section>
        <Route path = {this.props.match.url + '/:id'} exact component = {FullPost} />
        {/* it is nested route because it is inside post route */}
        </div>
        );
    }
}

export default Posts;

/*

withRouter :- includes all props of components in which we didnt define
use :- export default withRouter(post);

*/