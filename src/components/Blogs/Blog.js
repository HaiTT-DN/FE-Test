/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Blog = (props) => {
  const { blog, viewBlogDetails } = props;
  return (
    <li key={blog.id} className="media blog">
      <img src={blog.image} className="mr-3 thumbnail-image" alt="..." />
      <div className="media-body">
        <h5 className="mt-0 mb-1">
          <a href="#" onClick={() => viewBlogDetails(blog.id)}>
            {blog.title}
          </a>
        </h5>
        {blog.content}
      </div>
    </li>
  );
};

export default Blog;
