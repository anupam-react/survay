import React from "react";

const JobCard = () => {
  const jobsArr = [
    {
      name: "Adakshya",
      percentage: "70%",
    },
    {
      name: "Upa-Adakshya",
      percentage: "80%",
    },
    {
      name: "Maha-Mantri",
      percentage: "60%",
    },
    {
      name: "Kosha-Adakshya",
      percentage: "65%",
    },
    {
      name: "IT-Pramukh",
      percentage: "77%",
    },
    {
      name: "Social Media-Pramukh",
      percentage: "80%",
    },
    {
      name: "Karyalaya-Mantri",
      percentage: "75%",
    },
    {
      name: "Karyalaya-Prabhari",
      percentage: "90%",
    },
  ];
  return (
    <div className="border border-gray-300 p-4 rounded-2xl">
      <p className="font-bold text-xl pb-4" style={{ color: "#292929" }}>
        Top Jobs
      </p>
          <div className="flex flex-col gap-2">
              {jobsArr?.map((data, i) => (
                  <div key={i}> 
        <div className="flex justify-between pb-2">
                          <p>{data?.name}</p>
                          <p>{data?.percentage}</p>
        </div>
        <div className="w-64 bg-gray-200 rounded-full h-2 dark:bg-gray-700">
          <div
            className="h-2 rounded-full"
            style={{
              width: `${data?.percentage}`,
              background:
                "linear-gradient(136.3deg, #CB7EFF 2.56%, #F57742 117.9%)",
            }}
          ></div>
                      </div>
                      </div>
              ))}
      </div>
    </div>
  );
};

export default JobCard;
