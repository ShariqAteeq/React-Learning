import React, { Component , Suspense } from 'react';
import { Route , NavLink , Switch, Redirect} from 'react-router-dom';
import './Blog.css';
import Posts from '../Blog/Posts/Posts';
//import NewPost from '../Blog/NewPost/NewPost';
import asyncComp  from '../../hoc/asyncComponent';

//this is also for lazy routing
const  asyncPost = asyncComp(cmp=>{
    return import('../Blog/NewPost/NewPost');
}); 

// const Newpos = React.lazy(()=>import('../Blog/NewPost/NewPost')); //this is for lazy routing mean dont fetch unnecessary files

class Blog extends Component {

    state = {
        auth : true
    }

    

    render () {
     
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to= "/posts/"
                                         exact
                                         activeClassName= "my-active"
                                         activeStyle = {{
                                             color:'brown',
                                             textDecoration : 'underLine'
                                         }}
                             >Posts</NavLink></li>
                            <li><NavLink to = {{
                                pathname : '/new-post',
                                hash : '#submit',
                                search : '?quick-submit=true'
                            }}>NewPost</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path = "/" exact render = {()=> <h3>Home</h3>} />
               <Route path = "/" render = {()=> <h3>Home 2</h3>} /> 
               exact basically pora exact path ko check krta he like jese uper hmne new-post ka ak path bnaya
               hua he agr hm exact use nh krenge tw / path override hjaega new-post wale path me kiuk
               newpost path me / he
               */}
               <Switch>
                
                   {/* {this.state.auth ?  <Route path = "/new-post"  
                   render = {() =>(<Suspense fallback = {<div>Loading!!!!</div>}>
                       <Newpos /></Suspense>)} /> : null}  */}
                    {this.state.auth ? <Route path = "/new-post" component = {asyncPost} /> : null}
                     <Route path = "/posts" component = {Posts} />  
                     <Route render = {()=> <h1>Not Found</h1>} />
                     {/* when no route is defined it directly run that route which dont have path */}
                     {/* <Route path = "/" component = {Posts} />   */}
                    {/* same component for different routes */}
                    {/* <Redirect from = "/" to = "/posts" /> */}
               </Switch>
               {/* /:myid :- after : we define our own variable which take dynamic parameters from url 
               
                    <Switch> runs only 1 route at at a time
               */}

            </div>
        );
    }
}

export default Blog;

/*
'then' method take 1 arguement and it runs when a rsult or response appears
absolute path : occurs full path include domain like : abc.com/abc
relative path  : include only certain path of a respective file like /abc.html
<link> tag is basically used as <a> tag but it doesnt include reloading while <a> include reload when clicks
<NavLink> is like <link> but it include extra props for styling css

*/