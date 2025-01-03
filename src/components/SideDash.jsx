import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCloudSun } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { LiaSearchLocationSolid } from "react-icons/lia";
import { FaHeart } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";

const SideDash = () => {
    return (
        <div className="bg-blue-400 p-8">
            <h2 className="text-white font-bold text-2xl underline mb-8 flex items-center gap-2">
                <FaCloudSun className="text-yellow-200" /> Weather App
            </h2>
            <ul className="text-white space-y-4">
                <li className="flex items-center group">
                    <Link to="/" className="link_to">
                        <FaHome className="w-6 h-6 mr-2 text-blue-600" />
                        Main
                        <FaArrowRightLong className="link_icons" />
                    </Link>
                </li>
                <li className="flex items-center group">
                    <Link to="/" className="link_to">
                        <LiaSearchLocationSolid className="w-6 h-6 mr-2 text-blue-600" />
                        Search
                        <FaArrowRightLong className="link_icons" />
                    </Link>
                </li>
                <li className="flex items-center group">
                    <Link to="/favs" className="link_to">
                        <FaHeart className="w-6 h-6 mr-2 text-blue-600" />
                        My Favorites
                        <FaArrowRightLong className="link_icons" />
                    </Link>
                </li>
                <li className="flex items-center group">
                    <Link to="/" className="link_to">
                        <FaQuestion className="w-6 h-6 mr-2 text-blue-600" />
                        FAQ's
                        <FaArrowRightLong className="link_icons" />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SideDash;
