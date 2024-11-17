import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
        <div className="flex justify-center mt-10">
            <button
                className="flex justify-between px-1 py-1  bg-custom-gray rounded hover:bg-black border"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                <p>Previous</p>


            </button>
            <span className="px-4 py-1 mx-1">{`Page ${currentPage} of ${totalPages}`}</span>
            <button
                className="flex justify-between px-4 py-1 bg-custom-gray rounded hover:bg-black border"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <p>Next</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    );
}

export default Pagination;
