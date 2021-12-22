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
  //loader stet
  const [loader, setLoader] = useState(false);
  useEffect(() => {}, [currentTab]);
  const [categories] = useState({
    Entertainment: "Entertainment",
    Business: "Business",
    Health: "Health",
    Science: "Science",
    Sports: "Sports",
    Technology: "Technology",
  });
  useEffect(() => {
    setLoader(true);
    axios
      .get(
        `https://backend.saketkhare2000.repl.co/api/news?category=${currentTab}&country=in`
      )
      // .get(
      //   `https://newsapi.org/v2/top-headlines?category=${currentTab}&country=in&apiKey=50431c5b15f84f16babb377b1eca617c`
      // )
      .then((res) => {
        setNews(res.data);
        setLoader(false);
      });
  }, [currentTab]);

  return (
    <div className="lg:max-w-5xl mx-auto h-full">
      <h2 className="font-sans text-5xl font-bold py-7 px-5 text-white">
        Home
      </h2>

      <div className="w-full p-5 py-4">
        <Tab.Group>
          <Tab.List className="flex space-x-4 rounded overflow-x-auto scrollbar-none sticky top-0 z-10 bg-neutral-900 py-4 shadow-lg">
            {Object.keys(categories).map((category, id) => (
              <Tab
                key={id}
                className={({ selected }) =>
                  classNames(
                    "w-full  text-sm leading-5 font-medium rounded",
                    "focus:outline-none ",
                    selected
                      ? "bg-white shadow"
                      : "text-white bg-neutral-700 hover:text-neutral-100 hover:bg-neutral-800 transition-all ease-in-out duration-100"
                  )
                }
              >
                <div
                  className="py-2 px-3"
                  onClick={() => setCurrentTab(category)}
                >
                  {category}
                </div>
              </Tab>
            ))}
          </Tab.List>
          {loader ? (
            <div className="w-full h-screen flex justify-center items-top mt-10">
              <div className="w-16 h-16 border-b-2 border-gray-100 rounded-full animate-spin"></div>
            </div>
          ) : (
            <Tab.Panels className="mt-2">
              {Object.keys(news).map((category) => (
                <Tab.Panel key={category}>
                  <div className="flex flex-col ">
                    {news.map((post, id) => (
                      <News key={id} post={post} />
                    ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          )}
        </Tab.Group>
      </div>
    </div>
  );
}
