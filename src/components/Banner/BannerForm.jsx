import React from "react";
import useBanner from "../../hooks/useBanner";


const BannerForm = ({ isEdit}) => {
  const {
    banner,
    setBanner,
    handleChange,
    handleImageChange,
    handleCreateNewBanner,
    handleUpdateBanner,
    handleDeleteBanner
  } = useBanner();
  return (
    <div>
      <div className="flex justify-between items-center pb-2">
        <p className="text-2xl w-full" style={{ color: "#32343E" }}>
          {!isEdit ? "New Banner" : "Edit Banner"}
        </p>
        <div className="flex justify-end w-full mt-4">
           <button
            type="button"
            onClick={() => handleDeleteBanner(banner?._id)}
            style={{backgroundColor:"#77878F"}}
            className=" text-white  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
          Delete
          </button>
          <button
            type="button"
            onClick={
              isEdit
                ? () => handleUpdateBanner(banner?._id)
                : handleCreateNewBanner
            }
            style={{backgroundColor:"#CB7EFF"}}
            className=" text-white  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            <div className="">
              <p>{!isEdit ? "Post" : "Update"}</p>
            </div>
          </button>
        </div>
      </div>
      <div className="Container">
        <div className="flex flex-col gap-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Title
            </label>
            <input
              type="text"
              id="small-input"
              placeholder="Type here..."
              name="title"
              value={banner?.title}
              onChange={handleChange}
              className="block w-full py-2.5 px-4 text-gray-900 border border-gray-300 rounded-lg text-xs"
            />
          </div>
          <div>
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Desciption
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type here..."
              name="description"
              value={banner?.description}
              onChange={handleChange}
            ></textarea>
          </div>
          {typeof banner?.image === "string" ? (
            <div className="relative w-36 h-24">
              <img
                src={banner?.image}
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  border: "1px solid #E0E2E7",
                  borderRadius: "12px",
                  padding: "10px",
                }}
              />
              <img
                src="../Back.svg"
                alt=""
                onClick={() =>
                  setBanner({
                    title: banner?.title,
                    description: banner?.description,
                    image: {},
                    isActive: banner?.isActive,
                  })
                }
                className=" absolute -top-2 right-8 w-8 h-8 cursor-pointer"
              />
            </div>
          ) : (
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Upload Banner Image
              </label>
              <div className="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      {banner?.image?.name}
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    name="image"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerForm;
