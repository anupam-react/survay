import React, { useState } from "react";
// import useUsers from "../../hooks/useUsers";
import "./index.css";
import { useNavigate } from "react-router-dom";

const MemberList = ({ userList }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  console.log(userList)
  const navigate = useNavigate()



 // Logic to calculate the index of the last item on the current page
  const lastIndex = currentPage * itemsPerPage;
  // Logic to calculate the index of the first item on the current page
  const firstIndex = lastIndex - itemsPerPage;
  // Slice the data array to get the items for the current page
//   const currentItems = userList?.slice(firstIndex, lastIndex);

  // Function to handle next page
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to handle previous page
  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
      <div className="border border-gray-300 p-4 rounded-2xl">
          <p className="pb-3 font-semibold">Member list</p>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-md text-gray-400 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3">
              Image
            </th>
            <th scope="col" className="px-4 py-3">
              ID
            </th>
            <th scope="col" className="px-4 py-3">
             Name
            </th>
            <th scope="col" className="px-4 py-3">
            Job
            </th>
            <th scope="col" className="px-4 py-3">
             President
            </th>
            <th scope="col" className="px-4 py-3">
            Party
            </th>
            <th scope="col" className="px-4 py-3">
            District
            </th>
            <th scope="col" className="px-4 py-3">
           Social media links
            </th>
            <th scope="col" className="px-4 py-3">
          Action
            </th>
          </tr>
        </thead>
        <tbody>
          {/* {!!currentItems?.length &&
            currentItems?.map((data, index) => ( */}
              <tr
                
                // onClick={()=>navigate(`/users/${data?._id}`)}
                className="bg-white border-b cursor-pointer dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 ">
                  <img
                    src=""
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                {/* <td className="px-4 py-4">{data?.panNumber}</td> */}
                <td className="px-4 py-4">lones</td>
                <td className="px-4 py-4">lones</td>
                <td className="px-4 py-4">lones</td>
                <td className="px-4 py-4">lones</td>
                <td className="px-4 py-4">lones</td>
                <td className="px-4 py-4">lones</td>
                      <td className="px-4 py-4">lones</td>
                        <td className="px-6 py-4 ">
                  <img
                    src="./delete (1).svg"
                    alt=""
                    className="w-6 h-6"
                  />
                </td>
              </tr>
        {/* ))} */}
        </tbody>
      </table>
      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing
          <span className="font-semibold text-gray-900 dark:text-white px-1">
          1
          </span>
            of
          <span className="font-semibold text-gray-900 dark:text-white pl-1">
                      {/* {Math.ceil(userList?.length/itemsPerPage)} */}
                      10
          </span>
        </span>
        {/* {!!userList?.length && ( */}
             <div className="pagination">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="pagination__selected"
                >
                  <img src="./Icon.svg" alt="" />
                </button>
                <button
                  onClick={nextPage}
                  disabled={lastIndex >= userList?.length}
                  className="pagination__selected" 
                >
                  <img src="fi-rr-caret-left.svg" alt="" />
                </button>
              </div>
        {/* )} */}
      </nav>
    </div>
  );
};

export default MemberList;
