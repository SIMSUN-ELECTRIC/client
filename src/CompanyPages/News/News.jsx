const LatestNewsPage = () => {
  const newsData = [
    {
      id: 1,
      title: "News 1",
      description: "Description for News 1",
      date: "2024-01-09",
    },
    {
      id: 2,
      title: "News 2",
      description: "Description for News 2",
      date: "2024-01-04",
    },
    {
      id: 3,
      title: "News 3",
      description: "Description for News 3",
      date: "2024-01-01",
    },
    {
      id: 4,
      title: "News 4",
      description: "Description for News 4",
      date: "2023-12-08",
    },
    {
      id: 5,
      title: "News 5",
      description: "Description for News 5",
      date: "2023-11-18",
    },
    {
      id: 6,
      title: "News 6",
      description: "Description for News 6",
      date: "2023-11-08",
    },
    // Add more news items as needed...
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex flex-col items-center justify-center">
      <h1 className="mt-16 text-4xl font-bold text-white mb-8 ">Latest News</h1>
      <div className="flex flex-wrap justify-center">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="max-w-md w-full rounded overflow-hidden shadow-lg bg-white p-4 m-4 border border-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <h2 className="font-bold text-xl mb-2">{news.title}</h2>
            <p className="text-gray-700 text-base">{news.description}</p>
            <p className="text-gray-500 text-sm mt-2 animate-pulse">
              Date: {news.date}
            </p>
            <div className="h-1 bg-gray-300 mt-3 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNewsPage;
