import styled from 'styled-components';
const StyledMenu= styled.nav `
background: whitesmoke;
padding: 1rem;
display: flex;
justify-content: space-between;
align-items: center;
& ul {
       & li {
        display: inline;
        padding: 1rem 2rem;

        & a.active{
         transform: scale(0.9);
         font-weight: bold;
    }
}

}

`;


export {
      StyledMenu,
    }