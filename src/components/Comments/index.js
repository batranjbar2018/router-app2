import React from 'react';
import { Link } from 'react-router-dom';

class Comments extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           comments: []
        }
    }
async componentDidMount(){
    await fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => this.setState({
        comments
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
        <h1>COMMENT  PAGE</h1>
        <div>
            <ul>
                {
                 this.state.comments.map(comment => (
                     <li>
                       <Link to ={{
                           pathname:`/comments/${comment.id}`,
                           state:comment,
                       }}>{comment.name} </Link>

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
function Albums(props){
const [comments,setComment]=React.useState([]);
// React.useEffect(()=>{},comments)
const fetchComment =async () => {
   return  await fetch('https://jsonplaceholder.typicode.com/comments')
                   .then(response => response.json())
                   .then(json => setComment(json))
          
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
        <h1>ALBUM PAGE</h1>
        <div>
            <ul>
                {
                 albums.map(comment => (
                     <li>
                       <Link to ={{
                           pathname:`/comments/${comment.id}`,
                           state:comment,
                       }}>{comment.title} </Link>

                     </li>
                 ))   
                }
                
            </ul>
        </div>
        </div>
    )
} */
export default Comments;