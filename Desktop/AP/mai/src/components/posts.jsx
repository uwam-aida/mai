import React,{useState, useEffect}from 'react';
const Posts = () =>{
    const [posts, setPosts] = useState([]);
    const[loading, setLoading] = useState(true)
   const[error, setError]= useState(null)
     useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts",{ 
            method: "GET",//optional
        })
        .then(response => response.json())
        if(!response.ok) {
            throw new Error("network rensponse was not ok");
        }
        return response.json();
        })
        .then((data)=> {
            setPosts(data);
            setLoading(false);
        })
        .catch((error)=>{
            setError(error.message);
            setLoading(false);
        }
    ); 
     },[]
     return res.json();
      
export default Posts;