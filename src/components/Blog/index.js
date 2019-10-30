import React from 'react';
import { Link } from 'react-router-dom';

class Blog extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }
async componentDidMount(){
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => this.setState({
        posts
    }))
    document.addEventListener('click',this.clickLogger)

}
    componentWillMount(){
        document.removeEventListener('click',this.clickLogger);
    }
  clickLogger() {
    console.log('click')
}
render(){
    return (
        <div>
        <h1>BLOG PAGE</h1>
        <div>
            <ul>
                {
                 this.state.posts.map(post => (
                     <li>
                       <Link to ={{
                           pathname:`/blog/${post.id}`,
                           state:post,
                       }}>{post.title} </Link>

                     </li>
                 ))   
                }
                
            </ul>
        </div>
        </div>
    )
}
}
/*
function Blog(props){
const [posts,setPost]=React.useState([]);
// React.useEffect(()=>{},posts)
const fetchPost =async () => {
   return  await fetch('https://jsonplaceholder.typicode.com/posts')
                   .then(response => response.json())
                   .then(json => setPost(json))
          
}
const  clickLogger =() =>{
    console.log('click')
}
React.useEffect(() => {
    fetchPost()
    document.addEventListener('click',clickLogger)
    return() => {
        document.removeEventListener('click',clickLogger);
    }
    },[])


    return (
        <div>
        <h1>BLOG PAGE</h1>
        <div>
            <ul>
                {
                 posts.map(post => (
                     <li>
                       <Link to ={{
                           pathname:`/blog/${post.id}`,
                           state:post,
                       }}>{post.title} </Link>

                     </li>
                 ))   
                }
                
            </ul>
        </div>
        </div>
    )
} */
export default Blog;