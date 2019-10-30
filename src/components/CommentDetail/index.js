import React from 'react';

function CommentDetail(props){
    console.log(props)
   const {
       match:{
           params: {
                id 
            }
        },
        location:{
            state :{
               body,email,name,userId
            }
        }
    }=props;
    return (
        <>
        <h1>`    {name}  with ID {id }` </h1>
        <p>`EMAIL IS =  {email}`</p>
        <p>`BODY IS = {body}`</p>

        </>
    )
}
export default CommentDetail;