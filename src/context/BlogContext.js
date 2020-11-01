import React, { useState, useReducer } from "react";

const BlogContext = React.createContext();

const blogReducer = (blogPosts, action) => {
  switch(action.type){
    case "add_blogpost":
      return [...blogPosts, {title: `Blog Post #${blogPosts.length + 1}`}]
    default:
      return blogPosts
  }
}

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({type: "add_blogpost"})
  }

  return (
    <BlogContext.Provider value={{ blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
