import React from "react";

function withLoading(Component) {
  return function withLoading({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <div className="text-center" style={{ fontSize: "30px" }}>
        Please wait a little, fetching data may take some time
        <br />
        <div className="spinner-border text-secondary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  };
}

export default withLoading;
