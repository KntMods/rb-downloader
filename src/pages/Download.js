import React, { useState, useEffect, Component } from 'react';
import { Slide, Zoom, Flip, Bounce, ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import axios from 'axios'
import dats from './data.json'
toast.configure()

const notify = () =>{ 
        toast('Rank Booster Mobile Legend, Telah Update', {
        position: "bottom-right",
        autoClose: 50000000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        disableAutoClose: false,
        draggable: false,
        progress: '',
        type: 'info',
       transition:  Zoom,
        theme: 'dark'
});
    }
   
const Download = () => {
	
	const { rb, listRb } = useState( [] )
	
	
//notify()
const [data, getData] = useState([])
const posts = dats.posts;
   /* const URL = 'data.json';

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())

            .then((response) => {
                console.log(response);
                getData(response.posts);
            })

    }
*/
    return (
        <>

     {posts.map((item) => (
    <div className="cntner">
    <div className="card">
    <div className="image">
    <img href = "#" src={`${item.imag}`}/>
    </div>
    <div className="content">
    <h3>{item.name}</h3> <br/>
    <p>{item.desk}</p>
    </div>
    </div>    
    </div>
    
                ))}

        </>
    );
}
export default Download;

