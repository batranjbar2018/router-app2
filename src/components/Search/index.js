import React , {useEffect}from 'react';

/*class Search extends React.Component{
    componentDidMount(){
        console.log("COMPONENT MOUNTED")
    }
    componentDidUpdate(){
        console.log("COMPONENT UPDATED")
    }
    
    render(){
        console.log(this.componentWillUpdateprops);
        const {location: { search }}=this.props;
        const searchQuery = search.slice(1);
        return(
            <>
        <h1>Search PAGE</h1>
        <p>Search query : {searchQuery}</p>
        </>
        )
    }

}*/
function Search (props){
   useEffect(() => {
      console.log(props)
      document.title=props.location.pathname.slice(1);
   })
    console.log(props);
    const {location: { search }}=props;
    const searchQuery = search.slice(1);

    return(
        <>
        <h1>Search PAGE</h1>
        <p>Search query : {searchQuery}</p>
        </>
    )

}

export default Search;
