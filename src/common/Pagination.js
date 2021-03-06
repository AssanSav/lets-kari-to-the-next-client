import React from "react";
import PropTypes from "prop-types"
import _ from "lodash"

const Pagination = ({ usersCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(usersCount / pageSize)
  if (pagesCount === 1) return null
  const pages = _.range(1, pagesCount + 1)

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map(page =>
            <li className={page === currentPage ? "page-item active" : "page-item"} key={page}>
              <a className="page-link" onClick={() => onPageChange(page)} >
                {page}
              </a>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

Pagination.propTypes = {
  usersCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
}


export default Pagination;
