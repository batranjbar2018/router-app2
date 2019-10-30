import React from 'react';

class Home extends React.Component {
constructor(props) {
    super(props);
    this.state ={

    }
} 
componentDidMount(){
    console.log("component mounted")
}
componentDidUpdate(){
    console.log('test')
}
componentWillUnmount(){
    console.log ("component destroyed")
}
render() {
    return(
        <div>
            <h1>HOME PAGE</h1>
        </div>
    )
}
}
   
export default Home;