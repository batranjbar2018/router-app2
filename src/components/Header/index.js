import React from 'react';
import  { NavLink ,withRouter} from 'react-router-dom';
import {  StyledMenu  } from './styles';
function Header (props){
    const [search,setSearch] = React.useState('');
    const handleSearchSubmit= e =>{
        e.preventDefault();
        console.log(search);
     //  props.history.push(`/search?${search}`);
        props.history.push({
            pathname: './search',
            serach:`?${search}`,
            state: {detail: 'Hello World'}
        });

    }
    React.useEffect(()=>{
        console.log("COMPONENT DID MOUNT OR UPDATE")
    })
    return(
        <StyledMenu>
       
        <ul>
            <li>
                <NavLink to="/" exact>HOME</NavLink>
            </li>
            <li>
                <NavLink to="/Blog">Blog</NavLink>
            </li>
            <li>
                <NavLink to="/Albums">Albums</NavLink>
            </li>
            <li>
                <NavLink to="/Comments">Comments</NavLink>
            </li>
            <li>
                <NavLink to="About/">About</NavLink>
            </li>
        </ul>
        <form>
        <input value={search} onChange={e =>setSearch(e.target.value)}   placeholder="Search" aria-label="Search" aria-describedby="basic-addon1">

               </input>
               <span>   </span>
               <button  class="btn btn-primary" onClick={handleSearchSubmit}>Submit</button>
        </form>
        </StyledMenu>

    )
}
export default withRouter(Header);