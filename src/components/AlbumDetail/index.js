import React from 'react';

function AlbumDetail(props){
    console.log(props)
   const {
       match:{
           params: {
                id 
            }
        },
        location:{
            state :{
               body,title,userId
            }
        }
    }=props;
    return (
        <>
        <h1> {title}</h1>
        <p>{body}</p>
        </>
    )
}
export default AlbumDetail;