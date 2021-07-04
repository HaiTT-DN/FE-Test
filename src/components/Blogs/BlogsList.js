import React from "react";
import Blog from "./Blog";

const BlogsList = (props) => {
  const { blogs, viewBlogDetails } = props;
  if (!blogs || blogs.length === 0) {
    return <p className="text-center">Nothing to display, sorry</p>;
  }
  return (
    <div className="blog-list">
      <ul className="list-unstyled">
        {blogs.map((blog, index) => {
          return (
            <Blog key={index} blog={blog} viewBlogDetails={viewBlogDetails} />
          );
        })}
      </ul>
    </div>
  );
};

export default BlogsList;
