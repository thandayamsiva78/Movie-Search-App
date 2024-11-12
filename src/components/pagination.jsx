import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
        <div className="flex justify-center mt-10">
            <button
                className="px-3 py-1 mx-1 bg-custom-gray rounded hover:bg-black"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            <span className="px-4 py-1 mx-1">{`Page ${currentPage} of ${totalPages}`}</span>
            <button
                className="px-4 py-1 mx-1 bg-custom-gray rounded hover:bg-black"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;
