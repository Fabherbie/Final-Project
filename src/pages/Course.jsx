import React, { useState, useEffect } from "react";

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("null");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCourses(data);
        setFilteredCourses(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = courses.filter((course) =>
      course.title.toLowerCase().includes(query)
    );
    setFilteredCourses(filtered);
  };

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
      <section className="bg-gray-100 py-8 categories">
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
                onClick={() => handleCategoryFilter(category)}
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
      <section className="py-16 course-list">
        <div className="mx-auto px-6 md:px-12 container">
          <h2 className="mb-12 font-bold text-3xl text-center text-green-500">
            Our Courses
          </h2>

          {/* Creative Arts */}

          <div className="mb-12">
            <h3 className="mb-6 font-semibold text-2xl text-green-500">
              Creative Arts
            </h3>
            <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Ballet",
                  desc: "Learn grace, posture, and coordination through classical ballet techniques.",
                  duration: "60 minutes per session",
                  age: "4–16 years",
                  levels: ["Bronze", "Silver", "Gold", "Premium"],
                  cta: "Learn More",
                },
                {
                  title: "Music",
                  desc: "From piano to guitar, our music classes nurture creativity and technical skill.",
                  duration: "45 minutes per session",
                  age: "4–16 years",
                  levels: ["Bronze", "Silver", "Gold", "Premium"],
                  cta: "Learn More",
                },
                {
                  title: "Voice Coaching",
                  desc: "Help your child develop their vocal potential and stage presence.",
                  levels: ["Bronze", "Silver", "Gold", "Premium"],
                  cta: "Learn More",
                },
              ].map((course, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-lg rounded-lg overflow-hidden card"
                >
                  <div className="p-6">
                    <h4 className="font-semibold text-purple-700 text-xl">
                      {course.title}
                    </h4>
                    <p className="mt-2 text-gray-500">{course.desc}</p>
                    {course.duration && (
                      <p className="mt-4 text-gray-500 text-sm">
                        Duration: {course.duration}
                      </p>
                    )}
                    <p className="mt-2 text-gray-600 text-sm">
                      Age: {course.age}
                    </p>
                    <p className="mt-2 text-gray-500 text-sm">
                      Levels: {course.levels.join(", ")}
                    </p>
                    <button className="bg-purple-700 hover:bg-purple-800 mt-4 px-4 py-2 rounded-lg text-white">
                      {course.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sports */}
          <div className="mb-12">
            <h3 className="mb-6 font-semibold text-2xl text-green-500">
              Sports
            </h3>
            <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Football",
                  desc: "Learn teamwork, strategy, and discipline through structured football training.",
                  levels: [
                    "Bronze (skills)",
                    "Silver (teamwork)",
                    "Gold (competitive)",
                  ],
                  cta: "Join the Team",
                },
                {
                  title: "Swimming",
                  desc: "Build water confidence and advanced swimming techniques.",
                  levels: ["Bronze", "Silver", "Gold"],
                  cta: "Learn More",
                },
              ].map((course, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-lg rounded-lg overflow-hidden card"
                >
                  <div className="p-6">
                    <h4 className="font-semibold text-purple-700 text-xl">
                      {course.title}
                    </h4>
                    <p className="mt-2 text-gray-600">{course.desc}</p>
                    <p className="mt-4 text-gray-500 text-sm">
                      Levels: {course.levels.join(", ")}
                    </p>
                    <button className="bg-purple-700 hover:bg-purple-800 mt-4 px-4 py-2 rounded-lg text-white">
                      {course.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academics */}
          <div>
            <h3 className="mb-6 font-semibold text-2xl text-green-500">
              Academics
            </h3>
            <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Robotics",
                  desc: "Kids will learn to code, build, and innovate in our exciting robotics classes.",
                  levels: [
                    "Bronze (basics)",
                    "Silver (advanced coding)",
                    "Gold (competition prep)",
                  ],
                  cta: "Explore Robotics",
                },
                {
                  title: "Math Decathlon",
                  desc: "Prepare your child for math challenges with fun and engaging problem-solving techniques.",
                  levels: ["Bronze", "Silver", "Gold"],
                  cta: "Build Math Skills",
                },
                {
                  title: "Spelling Bee",
                  desc: "Build vocabulary, confidence, and stage presence to ace spelling bees.",
                  levels: [
                    "Bronze (foundations)",
                    "Silver (regional prep)",
                    "Gold (national prep)",
                  ],
                  cta: "Enroll Now",
                },
              ].map((course, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-lg rounded-lg overflow-hidden card"
                >
                  <div className="p-6">
                    <h4 className="font-semibold text-purple-700 text-xl">
                      {course.title}
                    </h4>
                    <p className="mt-2 text-gray-600">{course.desc}</p>
                    <p className="mt-4 text-gray-500 text-sm">
                      Levels: {course.levels.join(", ")}
                    </p>
                    <button className="bg-purple-700 hover:bg-purple-800 mt-4 px-4 py-2 rounded-lg text-white">
                      {course.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-gray-100 py-16 faqs">
        <div className="mx-auto px-6 md:px-12 container">
          <h2 className="mb-8 font-bold text-3xl text-center text-green-500">
            Frequently Asked Questions
          </h2>
          <div className="gap-8 grid md:grid-cols-2">
            {[
              {
                question: "How do I choose the right course for my child?",
                answer:
                  "You can filter by categories or consult with our advisors for personalized recommendations based on your child's interests and age.",
              },
              {
                question: "Are classes divided by age groups?",
                answer:
                  "Yes, our classes are designed to be age-appropriate, ensuring the right level of learning and engagement.",
              },
              {
                question:
                  "Can my child switch between physical and online classes?",
                answer:
                  "Yes, we offer flexible options, allowing students to switch between in-person and online classes based on their preferences.",
              },
              // Additional FAQs
              {
                question: "What is the duration of each course?",
                answer:
                  "Each course has a different duration, typically ranging from 45 minutes to 1 hour per session.",
              },
              {
                question: "Do you offer sibling discounts?",
                answer:
                  "Yes, we offer a sibling discount for families enrolling more than one child in our programs.",
              },
              {
                question: "Can I attend a trial class before committing?",
                answer:
                  "Yes, we offer trial classes for most of our courses so that you can get a feel for the program before committing.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white shadow-md p-6 rounded-lg">
                <h4 className="font-semibold text-lg text-purple-700">
                  {faq.question}
                </h4>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-500 py-16 text-center text-white cta">
        <h2 className="mb-6 font-bold text-3xl">
          Sign Up for a Free Class Today!
        </h2>
        <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold text-lg">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Course;
