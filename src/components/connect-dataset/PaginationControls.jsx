import React from 'react';

const pageSizeOptions = [5, 10, 25];

const PaginationControls = ({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
  onPageSizeChange,
  pageRangeStart,
  pageRangeEnd,
}) => {
  const showPagination = totalItems > 0;

  const handlePageSizeChange = (event) => {
    onPageSizeChange(Number(event.target.value));
  };

  return (
    <div className="pagination-bar">
      <div className="pagination-bar__summary">
        {showPagination ? (
          <span>
            Showing <strong>{pageRangeStart}</strong>–<strong>{pageRangeEnd}</strong> of{' '}
            <strong>{totalItems}</strong> datasets
          </span>
        ) : (
          <span>No datasets to display</span>
        )}
      </div>

      <div className="pagination-bar__controls">
        <label className="pagination-bar__page-size">
          Rows per page
          <select value={pageSize} onChange={handlePageSizeChange}>
            {pageSizeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <div className="pagination-bar__buttons" aria-label="Pagination navigation">
          <button
            type="button"
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage <= 1}
          >
            Previous
          </button>

          {showPagination
            ? Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  className={`pagination-bar__page${page === currentPage ? ' is-active' : ''}`}
                  aria-current={page === currentPage ? 'page' : undefined}
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </button>
              ))
            : null}

          <button
            type="button"
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={!showPagination || currentPage >= totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginationControls;
