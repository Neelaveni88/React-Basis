import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';

const fetchPosts = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
  };

const AxiosAbout = () => {
    const { data, error, isLoading } = useQuery("posts", fetchPosts);

    if (isLoading) return <p>Loading posts...</p>;
    if (error) return <p>Error fetching posts</p>;
  
    return (
      <div>
        <h1>About Page</h1>
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 20).map((post) => ( 
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  

export default AxiosAbout