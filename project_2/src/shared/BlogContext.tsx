import { createContext, useState, useContext } from "react";
import type { Blog } from "../types";

interface BlogContextType {
  blogs: Blog[]; // Array of states
  // We promise that the addBlog function will accept a Blog object
  addBlog: (blog: Blog) => void; // Fucntion for adding a new states
  updateBlog: (blog: Blog) => void; // Fucntion for updating existed states
  deleteBlog: (id: number) => void; //Function for deleting status by ID
}

//Create object Context
const BlogContext = createContext<BlogContextType | undefined>(undefined);
//Creating object Context. Begining value 'undefined' with type BlogContextType | undefined.

//Conponent Provider(State access wrapper)
export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  //blogs: This is a state variable that stores the current array of all blog posts.
  //Type (<Blog[]>): Thanks to TypeScript, we explicitly specify that blogs is an array ([]) of objects of type Blog.
  const [blogs, setBlogs] = useState<Blog[]>([]);

  //Logic adding posts: creating a new array, adding a new post at the end
  const addBlog = (blog: Blog) => {
    setBlogs([...blogs, blog]); // Here we use the 'blog' argument
  };

  //Logic updating posts: iterates through the array and replaces the old version with the new one by id.
  const updateBlog = (updateBlog: Blog) => {
    setBlogs(
      blogs.map((blog) => (blog.id === updateBlog.id ? updateBlog : blog))
    );
  };

  // Article deletion logic: creates a new array, excluding the article with the specified id.
  const deleteBlog = (id: number) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    // Returns a Context.Provider component that makes 'value' available to all child components.
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
};

// Hook for using Context (simplifies data access)
export const useBlogs = () => {
  const context = useContext(BlogContext); // Gets the context object

  // Error checking: if the hook is called outside of <BlogProvider>, throws an error.
  if (!context) {
    throw new Error("useBlog must be used with BlogProwider");
  }

  return context;
};
