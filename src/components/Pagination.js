/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Pagination = (props) => {
  const pageLinks = [];
  const { numberOfPages, currentPage, nextPage } = props;
  let isPrevDisabled = currentPage > 1 ? "" : "disabled";
  let isNextDisabled = currentPage < numberOfPages ? "" : "disabled";

  for (let i = 1; i <= numberOfPages; i++) {
    let activePage = currentPage === i ? "active" : "";

    pageLinks.push(
      <li className={`page-item ${activePage}`} key={i}>
        <a className="page-link" href="#" onClick={() => nextPage(i)}>
          {i}
        </a>
      </li>
    );
  }

  if (numberOfPages <= 1) return "";

  return (
    <div className="d-flex justify-content-center container">
      <nav>
        <ul className="pagination">
          <li className={`page-item ${isPrevDisabled}`}>
            <a
              className="page-link"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
              onClick={() => nextPage(currentPage - 1)}
            >
              Previous
            </a>
          </li>
          {pageLinks}
          <li className={`page-item ${isNextDisabled}`}>
            <a
              className="page-link"
              href="#"
              onClick={() => nextPage(currentPage + 1)}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
