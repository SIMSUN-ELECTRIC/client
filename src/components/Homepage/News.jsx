import React, { useEffect, useState } from "react";
import axios from "axios";
const News = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 7;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://simsun-backend.onrender.com/news"
        );
        const totalNewsCount = response.data.length;

        setTotalPages(Math.floor(totalNewsCount / itemsPerPage) + 1);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://simsun-backend.onrender.com/news?limit=${itemsPerPage}&page=${currentPage}`
        );
        setNews(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-wrap justify-around w-full mt-5 ">
      {news.map((newS, index) => {
        if (index >= 4) return;

        const date = new Date(newS.date);
        const year = date.getFullYear();
        const monthNames = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        const monthIndex = date.getMonth();
        const month = monthNames[monthIndex];
        const day = date.getDate();

        return (
          <div className="flex w-[40%] gap-2 items-center border-2 shadow-lg mb-2">
            <div className="w-1/3 md:w-1/4 flex flex-col justify-center items-center bg-[#161D24] text-white  ">
              <div className="text-3xl">
                {day}
                <hr />
              </div>
              <div className="py-2">
                {month}-{year}
              </div>
            </div>
            <div className=" flex flex-col ">
              <div className="font-semibold text-xl">{newS.title}</div>
              <div>{newS.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default News;
