import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const SeenEntry = () => {
    const[seen,setSeen]=useState([]);
    const isLoggedIn = useSelector((state) => state);
    console.log(isLoggedIn.id);

useEffect(()=>{
     getSeen()

},[])


    const getSeen=async()=>{
        const response=await axios.get(`${isLoggedIn.link}/image/getentry?id=${isLoggedIn.id}`,  {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': isLoggedIn.accessKey
            },
          })
          console.log(response.data)
          setSeen(response.data)

    }


  return (
    <div>
       <table>
                <tr>
                    <th>No</th>
                    <th>Image Id</th>
                    <th>Viewer</th>
                    <th>Date</th>
                   
                    
                </tr>
        
        
           
            {seen.map((item,index)=><tr>
            <td>{index}</td>          
            <td>{item.imageId}</td>
            <td>{item.username}</td>
            <td>{item.time}</td>
            </tr>)}

    </table>
      
    </div>
  )
}

export default SeenEntry
