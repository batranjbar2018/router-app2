import React from 'react';
import { Link } from 'react-router-dom';

class Albums extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            albums: []
        }
    }
async componentDidMount(){
    await fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(albums => this.setState({
        albums
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
        <h1>ALBUM PAGE</h1>
        <div>
            <ul>
                {
                 this.state.albums.map(album => (
                     <li>
                       <Link to ={{
                           pathname:`/blog/${album.id}`,
                           state:album,
                       }}>{album.title} </Link>

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
const [albums,setAlbum]=React.useState([]);
// React.useEffect(()=>{},albums)
const fetchAlbum =async () => {
   return  await fetch('https://jsonplaceholder.typicode.com/albums')
                   .then(response => response.json())
                   .then(json => setAlbum(json))
          
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
                 albums.map(album => (
                     <li>
                       <Link to ={{
                           pathname:`/albums/${album.id}`,
                           state:album,
                       }}>{album.title} </Link>

                     </li>
                 ))   
                }
                
            </ul>
        </div>
        </div>
    )
} */
export default Albums;