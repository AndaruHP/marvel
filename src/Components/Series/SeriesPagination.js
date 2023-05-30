import React from "react";
import ReactPaginate from "react-paginate";
import "../Pagination.css";

function SeriesPagination(props) {
  const { pageCount, handlePageClick } = props;

  function renderPage(props) {
    const { page, children, disabled, onPageChange } = props;
    const handleClick = (event) => {
      event.preventDefault();
      onPageChange({ selected: page });
    };
    return (
      <button
        className={`page-link ${disabled ? "disabled" : ""}`}
        onClick={handleClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }

  return (
    <ReactPaginate
      previousLabel={"previous"}
      nextLabel={"next"}
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      activeClassName={"active"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      disableInitialCallback={true}
      renderPage={renderPage}
    />
  );
}

export default SeriesPagination;
