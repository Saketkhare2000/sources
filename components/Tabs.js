import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import News from "./News";
const axios = require("axios");
//get request to get the data from the api
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [news, setNews] = useState([]);
  //current tab
  const [currentTab, setCurrentTab] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=${currentTab}&country=in&apiKey=be1303bdbbf94db1b5a45fb523497a11
        `
      )
      .then((res) => {
        setNews(res.data.articles);
      });
  }, [currentTab]);
  const [categories] = useState({
    Entertainment: "Entertainment",
    Business: "Business",
    Health: "Health",
    Science: "Science",
    Sports: "Sports",
    Technology: "Technology",
  });
  //   const categories = [
  //     {
  //       name: "Entertainment",
  //       value: "Entertainment",
  //     },
  //     {
  //       name: "Business",
  //       value: "Business",
  //     },
  //     {
  //       name: "Health",
  //       value: "Health",
  //     },
  //     {
  //       name: "Science",
  //       value: "Science",
  //     },
  //     {
  //       name: "Sports",
  //       value: "Sports",
  //     },
  //     {
  //       name: "Technology",
  //       value: "Technology",
  //     },
  //   ];

  return (
    <div className=" lg:max-w-5xl mx-auto ">
      <h2 className="font-sans text-5xl font-bold py-7 px-5 text-white">
        Home
      </h2>
      <div className="w-full p-5 py-4">
        <Tab.Group>
          <Tab.List className="flex space-x-4 rounded overflow-x-auto">
            {Object.keys(categories).map((category, id) => (
              <Tab
                key={id}
                onChange={() => setCurrentTab(categories[id])}
                // onChange={() => setCurrentTab(category)}
                className={({ selected }) =>
                  classNames(
                    "w-full py-2 px-3 text-sm leading-5 font-medium rounded",
                    "focus:outline-none ",
                    selected
                      ? "bg-white shadow"
                      : "text-white bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {category}
                {console.log(currentTab)}
              </Tab>
            ))}
          </Tab.List>
          <img
            src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
            alt=""
            className="object-cover w-full h-64 rounded-xl mt-6 cursor-pointer"
          />
          <Tab.Panels className="mt-2">
            {Object.keys(news).map((category) => (
              <Tab.Panel key={category}>
                <div className="flex flex-col ">
                  {news.map((post) => (
                    <News post={post} />
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
