import React from "react";
import BannerCard from "./BannerCard";
import useBanner from "../../hooks/useBanner";
import { Link } from "react-router-dom";

const Banner = () => {
  const {allBanners} = useBanner()
  return (
    <div>
      <div className="flex justify-between">
        <p className="text-2xl font-semibold">Banner</p>
        <Link to="/new-banner">
        <button
          className="flex gap-2 text-white px-4 py-2 rounded-lg"
          style={{ backgroundColor: "#CB7EFF" }}
        >
          <img src="./Add (1).svg" alt="" />
          <p>New poster</p>
        </button>
       </Link>
      </div>
      <div className="flex flex-wrap shadow p-4 mt-4 gap-4">
        {allBanners?.map((data, i) => (
          <BannerCard data={data} />
        ))}

      </div>
    </div>
  );
};

export default Banner;
