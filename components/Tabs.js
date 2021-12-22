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
    axios
      .get(
        `https://backend.saketkhare2000.repl.co/api/news?category=${currentTab}&country=in`
      )
      // .get(
      //   `https://newsapi.org/v2/top-headlines?category=${currentTab}&country=in&apiKey=50431c5b15f84f16babb377b1eca617c`
      // )
      .then((res) => {
        setNews(res.data);
      });
  }, [currentTab]);

  return (
    <div className="lg:max-w-5xl mx-auto ">
      <h2 className="font-sans text-5xl font-bold py-7 px-5 text-white">
        Home
      </h2>

      <div className="w-full p-5 py-4">
        <Tab.Group>
          <Tab.List className="flex space-x-4 rounded overflow-x-auto scrollbar-none">
            {Object.keys(categories).map((category, id) => (
              <Tab
                key={id}
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
                <div onClick={() => setCurrentTab(category)}>{category}</div>
              </Tab>
            ))}
          </Tab.List>

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
        </Tab.Group>
      </div>
    </div>
  );
}
