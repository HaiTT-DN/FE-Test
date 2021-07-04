import React from "react";
import dateFormat from "dateformat";

const BlogDetails = (props) => {
  const { closeBlogDetail, currentBlog } = props;
  return (
    <div className="container">
      <div className="row">
        <div
          className="back-link"
          onClick={closeBlogDetail}
        >
          <i className="fas fa-arrow-left" style={{ marginTop: 5 }}></i>
          <span style={{ marginLeft: 10 }}>Go Back</span>
        </div>
      </div>
      <div className="row">
        <div class="media jumbotron">
          <img src={currentBlog.image} class="mr-3" alt="..." />
          <div class="media-body">
            <h5 class="mt-0">{currentBlog.title}</h5>
            <p>{currentBlog.content}</p>
            <p>{dateFormat(currentBlog.createdAt, "dddd, mmmm dS, yyyy")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
