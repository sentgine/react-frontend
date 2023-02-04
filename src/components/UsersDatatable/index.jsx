import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";

export default function index() {
    const [users, setUsers] = useState([]);
    const [links, setLinks] = useState([]);
    const [meta, setMeta] = useState([]);

    /**
     * Set the paginated data
     *
     * @param object response
     */
    const setPaginatedData = (response) => {
        setUsers(response.data.data);
        setLinks(response.data.links);
        setMeta(response.data.meta);
    };

    /**
     * Axios config
     */
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
    };

    /**
     * Fetch all users
     */
    const fetchUsers = async (link) => {
        if (link !== null) {
            const response = await axios.get(link, config);
            setPaginatedData(response);
        }
    };

    const previousPage = async () => {
        await fetchUsers(links.prev);
    };

    const nextPage = async () => {
        await fetchUsers(links.next);
    };

    const firstPage = async () => {
        await fetchUsers(links.first);
    };

    const lastPage = async () => {
        await fetchUsers(links.last);
    };

    useEffect(() => {
        fetchUsers(`${import.meta.env.VITE_API_URL}api/v1/users`);
    }, []);

    return (
        <div className="">
            <table className="table-auto w-full border">
                <thead>
                    <tr className="text-left font-medium">
                        <th className="px-4 py-2 border border-gray-400">
                            Name
                        </th>
                        <th className="px-4 py-2 border border-gray-400">
                            Email
                        </th>
                        <th className="px-4 py-2 border border-gray-400">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) => (
                        <tr key={key} className="text-left">
                            <td className="px-4 py-2 border border-gray-400">
                                {user.first_name} {user.last_name}
                            </td>
                            <td className="px-4 py-2 border border-gray-400">
                                {user.email}
                            </td>
                            <td className="px-4 py-2 border border-gray-400">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full mr-2">
                                    Edit
                                </button>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-full mr-2">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Pagination
                meta={meta}
                firstPage={firstPage}
                previousPage={previousPage}
                nextPage={nextPage}
                lastPage={lastPage}
            />
        </div>
    );
}
