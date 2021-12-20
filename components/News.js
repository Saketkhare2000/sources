import React, { useEffect, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const News = ({ post }) => {
  //news state

  return (
    <div className="py-4 lg:max-w-5xl ">
      <div
        key={post.id}
        className="relative p-2 rounded-md hover:bg-neutral-800 transition-all duration-150 ease-in-out"
      >
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-base font-bold text-gray-100 mr-4 ">
              {post.title}
            </h3>
          </div>
          <img
            src={post.urlToImage}
            alt="catimg"
            className="object-cover w-28 h-full rounded-lg ml-3"
          />
        </div>

        {/* <ul className="flex space-x-1 text-sm font-medium text-neutral-500 ">
          <li>{post.commentCount} comments</li>
          <li>&middot;</li>
          <li>{post.reads} shares</li>
        </ul> */}

        <a
          href={post.url}
          target="_blank"
          className={classNames(
            "absolute inset-0 rounded-md",
            "focus:z-10 focus:outline-none "
          )}
        />
      </div>
      <div className="h-[1.5px] mt-2 bg-neutral-800 rounded"></div>
    </div>
  );
};

export default News;
