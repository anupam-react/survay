import React from "react";
import useMemeber from "../../hooks/useMembers";
import MemberTable from "../Dashboard/MemberTable";

const MemberList = () => {
  const { searchTerm, setSearchTerm } = useMemeber();
  const categoryOptions = [
    { lable: "District ", value: "District " },
    { lable: "President", value: "President" },
    { lable: "Job", value: "Job" },
    { lable: "Party", value: "Party" },
  ];
  return (
    <div>
      <div className="flex justify-between mb-4">
        <p className="text-2xl font-semibold" style={{ color: "#32343E" }}>
          Member list
        </p>
        <div className="flex gap-4">
          <div
            className="flex"
            style={{
              backgroundColor: "#F5F7FA",
              width: "240px",
              borderRadius: "40px",
              color: "#32343E",
            }}
          >
            <img src="./Vector (1).svg" alt="" className="ml-3" />
            <input
              type="text"
              className="border-none bg-transparent outline-none focus:ring-0 focus:shadow-none focus:border-none"
              placeholder="Search by ID or name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <select
              id="countries"
              style={{
                backgroundColor: "#F5F7FA",
              }}
              className="border-none px-4 text-gray-900 text-sm rounded-full  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            >
              <option selected disabled>
                Filter
              </option>
              {categoryOptions?.map((data, i) => (
                <option key={i} value={data?.value}>
                  {data?.lable}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <MemberTable />
    </div>
  );
};

export default MemberList;
