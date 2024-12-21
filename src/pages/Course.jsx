import React, { useState, useEffect } from "react";
import coursesData from "../data/courses.json";

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setCourses(coursesData);
  }, []);

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(query)
  );

  return (
    <div className="courses-page">
      {/* Header Section */}
      <header className="relative bg-gradient-to-r from-green-500 via-purple-600 to-red-500 py-16 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="font-bold text-4xl md:text-5xl">
            Explore Our Courses
          </h1>
        </div>
      </header>

      {/* Filter/Category View */}
      <section className="bg-gray-100 py-8">
        <div className="mx-auto px-6 md:px-12 container">
          <h2 className="mb-6 font-bold text-2xl text-purple-700">
            Filter by Category
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              "Creative Arts",
              "Sports",
              "Academics",
              "Physical Classes",
              "Online Classes",
            ].map((category, idx) => (
              <button
                key={idx}
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="px-6 py-8">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search courses..."
          className="border-gray-300 p-3 border rounded w-full"
        />
      </section>

      {/* Course List Section */}
      <section className="pt-16 pb-8">
        <div className="mx-auto px-6 md:px-12 container">
          <h2 className="mb-12 font-bold text-3xl text-center text-green-500">
            Our Courses
          </h2>
          <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <div className="p-6">
                  <h4 className="font-semibold text-purple-700 text-xl">
                    {course.title}
                  </h4>
                  <p className="mt-2 text-gray-500">{course.description}</p>
                  <p className="mt-4 text-gray-500 text-sm">
                    Duration: {course.duration}
                  </p>
                  <p className="mt-2 text-gray-600 text-sm">
                    Age: {course.age}
                  </p>
                  <p className="mt-2 text-gray-500 text-sm">
                    Levels: {course.levels.join(", ")}
                  </p>
                  <button className="bg-purple-700 hover:bg-purple-800 mt-4 px-4 py-2 rounded-lg text-white">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;
