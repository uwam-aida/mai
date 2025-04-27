import React, { useEffect, useState } from 'react'

export default function PostsAsync() {
    const [posts, setPosts] = useState([]);
    const[loading, setLoading] = useState(true);
    useEffect(()=>{
        async function fetchPosts(){

            try{
               const responses = await fetch("https://jsonplaceholder.typicode.com/posts"
               );
               const data = await responses.json();
               setPosts(data);
            }catch(error){
                console.error("Error", error);
            } finally {
                setLoading(false);
            }

            }
            fetchPosts();
        }, []);
        return (
            <div>
                {loading ? (
                    <p>Loading......</p>
                ) : ( 
                    posts.map((post)=> <p key={post.id}>{post.title}</p>)
                )}
            </div>
        );

    };
