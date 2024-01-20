import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const NewsList = () => {
  const [newsList, setNewsList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the list of news when the component mounts
    fetchNews();
  }, []);

  const state = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!state?.userData?.isAdmin) {
      navigate("/auth/AdminLogin");
    }
  }, [state]);

  const fetchNews = async () => {
    try {
      const response = await axios.get("http://localhost:5000/news");
      setNewsList(response.data);
    } catch (error) {
      console.error("Error fetching news:", error.message);
      setError("Error fetching news. Please try again later.");
    }
  };

  const handleDeleteNews = async (newsId) => {
    if (window.confirm("Are you sure you want to delete this news?")) {
      try {
        await axios.delete(`http://localhost:5000/news/${newsId}`);
        // Refresh the news list after deletion
        fetchNews();
      } catch (error) {
        console.error("Error deleting news:", error.message);
        setError("Error deleting news. Please try again later.");
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mt-16 text-3xl font-semibold mb-4">News List</h1>

      {newsList.loading && <p>Loading...</p>}
      {newsList.error && <p>Error: {newsList.error}</p>}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {newsList.map((news) => (
              <tr key={news._id}>
                <td className="py-2 px-4 border-b">{news.title}</td>
                <td className="py-2 px-4 border-b">{news.description}</td>
                <td className="py-2 px-4 border-b">
                  <div className="flex items-center">
                    <Link
                      to={`/admin/newsedit/${news._id}`}
                      className="bg-blue-500 text-white py-1 px-2 rounded mr-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDeleteNews(news._id)}
                      className="bg-red-500 text-white py-1 px-2 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewsList;
