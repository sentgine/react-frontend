import React from "react";

export default function Pagination({
    meta,
    fetchUsers,
    firstPage,
    previousPage,
    nextPage,
    lastPage,
}) {
    return (
        <div className="flex justify-between items-center mt-4">
            <div>
                <span className="text-gray-700">
                    {meta.from} - {meta.to} of {meta.total} items (page{" "}
                    {meta.current_page} of {meta.last_page})
                </span>
            </div>
            <div>
                <button
                    onClick={firstPage}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4"
                >
                    First
                </button>
                <button
                    onClick={previousPage}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 "
                >
                    Previous
                </button>

                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 ">
                    1
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 ">
                    2
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 ">
                    3
                </button>

                <button
                    onClick={nextPage}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 "
                >
                    Next
                </button>
                <button
                    onClick={lastPage}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4"
                >
                    Last
                </button>
            </div>
        </div>
    );
}
