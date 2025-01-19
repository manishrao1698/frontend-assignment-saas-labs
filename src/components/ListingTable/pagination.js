import React from "react"

const Pagination = (props) => {

    return (
        <div className="pagination">
            <button
                onClick={props.handlePrevPage}
                disabled={props.currentPage === 1}
                className="pagination-btn"
            >
                Previous
            </button>
            <span>Page {props.currentPage}</span>
            <button
                onClick={props.handleNextPage}
                disabled={props.currentPage === props.totalPages}
                className="pagination-btn"
            >
                Next
            </button>
        </div>
    )
}
export default Pagination;