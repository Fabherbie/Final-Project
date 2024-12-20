import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img3 from "../assets/images/Basketball.jpg";
import img5 from "../assets/images/Football.jpg";
import img7 from "../assets/images/Music (2).jpg";
import img8 from "../assets/images/Music.jpg";
import img9 from "../assets/images/Robotics.jpg";
import img11 from "../assets/images/Swimming.jpg";
import img14 from "../assets/images/pretty-girl-learning-more-about-chemistry-class.jpg";
import img15 from "../assets/images/smiling-little-girl-with-books-ready.jpg";
import video from "../assets/videos/Ballet-Video.mp4";
import image1 from "../assets/images/african-american-woman-black-long-sleeve-tee-portrait (1).jpg";
import image2 from "../assets/images/front-view-man-listening-music.jpg";
import image3 from "../assets/images/man-with-happy-expression.jpg";
import image4 from "../assets/images/portrait-african-american-woman.jpg";
import image5 from "../assets/images/portrait-upset-american-black-person.jpg";
import image6 from "../assets/images/smiley-african-woman-with-golden-earrings.jpg";
import image7 from "../assets/images/worldface-american-man-white-background.jpg";
import image8 from "../assets/images/young-beautiful-african-girl-smiling-dark-wall.jpg";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="relative bg-gray-900 h-screen text-white hero">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="absolute inset-0 w-full h-full"
        >
          <SwiperSlide>
            <div
              className="bg-cover bg-center w-full h-full"
              style={{ backgroundImage: `url(${img3})` }}
            ></div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="bg-cover bg-center w-full h-full"
              style={{ backgroundImage: `url(${img5})` }}
            ></div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="bg-cover bg-center w-full h-full"
              style={{ backgroundImage: `url(${img8})` }}
            ></div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="bg-cover bg-center w-full h-full"
              style={{ backgroundImage: `url(${img9})` }}
            ></div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="bg-cover bg-center w-full h-full"
              style={{ backgroundImage: `url(${img11})` }}
            ></div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="bg-cover bg-center w-full h-full"
              style={{ backgroundImage: `url(${img14})` }}
            ></div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="bg-cover bg-center w-full h-full"
              style={{ backgroundImage: `url(${img15})` }}
            ></div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                controls={false}
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="z-10 absolute inset-0 flex flex-col justify-center items-center bg-black/50 text-center">
          <h1 className="font-bold text-4xl md:text-5xl">
            Unlock Your Child's Potential with Creativity, <br /> <br /> Sports,
            and Academics!
          </h1>
          <div className="flex space-x-4 mt-6">
            <button className="bg-purple-700 hover:bg-purple-800 shadow-md px-6 py-3 rounded-lg font-semibold text-lg">
              Explore Our Courses
            </button>
            <button className="bg-green-500 hover:bg-green-700 shadow-md px-6 py-3 rounded-lg font-semibold text-lg">
              Enroll Now!
            </button>
          </div>
        </div>
      </section>

      {/* Featured Section: Courses Offered */}
      <section className="bg-gray-100 py-16 text-center featured-courses">
        <h2 className="mb-8 font-bold text-3xl text-green-500">
          A World of Opportunities for Your Child
        </h2>
        <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3 px-6 md:px-12">
          {[
            {
              title: "Creative Arts",
              image: img7,
              desc: "Ballet, Acting, Voice Coaching, Music.",
            },
            {
              title: "Sports",
              image: img5,
              desc: "Football, Basketball, Swimming.",
            },
            {
              title: "Academics",
              image: img9,
              desc: "Robotics, Math Decathlon, Spelling Bee.",
            },
          ].map((course, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-lg overflow-hidden card"
            >
              <img
                src={course.image}
                alt={course.title}
                className="bg-gray-100 w-full h-48 object-contain"
              />

              <div className="p-6">
                <h3 className="font-semibold text-2xl text-purple-700">
                  {course.title}
                </h3>
                <p className="mt-4 text-gray-600">{course.desc}</p>
                <button className="bg-purple-700 hover:bg-purple-800 mt-4 px-4 py-2 rounded-lg text-white">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 text-center why-choose-us">
        <h2 className="mb-8 font-bold text-3xl text-green-500">
          Why Choose Us?
        </h2>
        <div className="gap-8 grid sm:grid-cols-2 md:grid-cols-4 px-6 md:px-12">
          {[
            {
              title: "Comprehensive Offerings",
              icon: "🎨",
              desc: "Programs that combine creativity, athletics, and academics.",
            },
            {
              title: "Flexible Options",
              icon: "📅",
              desc: "Choose physical or online classes that fit your schedule.",
            },
            {
              title: "Expert Instructors",
              icon: "👩‍🏫",
              desc: "Certified professionals who inspire and motivate.",
            },
            {
              title: "Skill Levels for Every Child",
              icon: "📈",
              desc: "Beginner to competitive-level training.",
            },
          ].map((reason, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center reason"
            >
              <div className="mb-4 text-5xl">{reason.icon}</div>
              <h3 className="font-semibold text-xl">{reason.title}</h3>
              <p className="mt-2 text-gray-600">{reason.desc}</p>
            </div>
          ))}
        </div>
        <button className="bg-green-500 hover:bg-green-700 mt-8 px-6 py-3 rounded-lg text-white">
          Discover Why Families Trust Us
        </button>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16 text-center testimonials">
        <h2 className="mb-8 font-bold text-3xl text-green-500">
          Hear from Our Happy Families!
        </h2>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          className="testimonial-swiper"
        >
          {[
            {
              quote:
                "The robotics classes have been a game-changer for my daughter.",
              name: "Martha L.",
              rating: 5,
            },
            {
              quote:
                "My son has grown so much in confidence since joining football.",
              name: "David O.",
              rating: 4,
            },
            {
              quote:
                "I never thought my son would be so excited about STEM! The robotics program is incredible—he’s now building robots and understanding programming concepts at just 10 years old!",
              name: "Sarah T.",
              rating: 5,
            },
            {
              quote:
                "Coach James is so patient and inspiring. My son used to be shy and hesitant about sports, but now he’s leading his team and making new friends!",
              name: "Michael R.",
              rating: 5,
            },
            {
              quote:
                "The ballet classes have been transformative for my daughter. Not only has her posture improved, but she’s also more confident and disciplined.",
              name: "Temitope A.",
              rating: 5,
            },
            {
              quote:
                "The music program is top-notch! My son learned to play the guitar in just a few months, and he’s already performing at school events.",
              name: "Abisoye A.",
              rating: 5,
            },
            {
              quote:
                "The Math Decathlon coaching has done wonders for my daughter’s confidence in math. She went from struggling in class to excelling and even competing at the district level!",
              name: "Afolarin A.",
              rating: 5,
            },
            {
              quote:
                "I’m amazed at the vocabulary my son has learned through the spelling bee classes. He’s become so articulate and even won his school competition!",
              name: "Olawande A.",
              rating: 5,
            },
            {
              quote:
                "The voice coaching classes have given my daughter the confidence to sing in front of a crowd. She loves every session and is always excited to learn something new!",
              name: "Kafilat A.",
              rating: 5,
            },
            {
              quote:
                "The online classes have been a lifesaver for our busy schedule. My kids are learning so much from the comfort of home, and the instructors are engaging and professional.",
              name: "Erioluwa B.",
              rating: 5,
            },
            {
              quote:
                "This studio is like a second home for my kids. They’ve grown so much here—not just in skills, but in confidence and friendships. I couldn’t ask for a better place for them!",
              name: "Oluwaseun O.",
              rating: 5,
            },
          ].map((testimonial, idx) => (
            <SwiperSlide key={idx} className="p-6">
              <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg">
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                <p className="mt-4 font-semibold text-lg">{testimonial.name}</p>
                <div className="flex mt-2 text-yellow-500">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.971a1 1 0 00.95.69h4.172c.969 0 1.372 1.24.588 1.81l-3.383 2.46a1 1 0 00-.364 1.118l1.287 3.971c.3.921-.755 1.688-1.538 1.118l-3.383-2.46a1 1 0 00-1.175 0l-3.383 2.46c-.783.57-1.838-.197-1.538-1.118l1.287-3.971a1 1 0 00-.364-1.118L2.24 9.398c-.783-.57-.38-1.81.588-1.81h4.172a1 1 0 00.95-.69l1.286-3.971z" />
                      </svg>
                    ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Meet the Team */}
      <section className="bg-white py-16 text-center meet-the-team">
        <h2 className="mb-8 font-bold text-3xl text-green-500">
          Meet the Team
        </h2>
        <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3 px-6 md:px-12">
          {[
            {
              name: "Olamide Abayomi",
              role: "Robotics and STEM Instructor ",
              image: image1,
            },
            {
              name: "John Smith",
              role: "Music Teacher",
              image: image3,
            },
            {
              name: "Emeka Okafor",
              role: "Football Coach",
              image: image2,
            },
            {
              name: "Omolola Remi",
              role: "Ballet Instructor",
              image: image4,
            },
            {
              name: "Jedidiah Adufe",
              role: "Basketball Trainer",
              image: image5,
            },
            {
              name: "Adebola Johnson",
              role: "Voice Coach",
              image: image6,
            },
            {
              name: "Anthony Emmanuel",
              role: "Math Decathlon Coach",
              image: image7,
            },
            {
              name: "Amidat Adenekan",
              role: "Spelling Bee Mentor",
              image: image8,
            },
          ].map((member, idx) => (
            <div key={idx} className="team-member text-center">
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto rounded-full w-32 h-32"
              />
              <h3 className="mt-4 font-semibold text-xl">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
        <button className="bg-purple-700 hover:bg-purple-800 mt-8 px-6 py-3 rounded-lg text-white">
          Get to Know Us
        </button>
      </section>

      {/* Subscription Plans */}
      <section className="bg-gray-100 py-16 text-center subscription-plans">
        <h2 className="mb-8 font-bold text-3xl text-green-500">
          Flexible Plans for Every Schedule and Goal
        </h2>
        <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-4 px-6 md:px-12">
          {[
            {
              plan: "Bronze",
              desc: "Group classes, foundational lessons",
              price: "#20,000/month",
              bgColor: "bg-yellow-900",
              textColor: "text-yellow-100",
            },
            {
              plan: "Silver",
              desc: "Group + small group classes, skill refinement",
              price: "#30,000/month",
              bgColor: "bg-gray-400",
              textColor: "text-gray-900",
            },
            {
              plan: "Gold",
              desc: "Advanced training, competition prep",
              price: "#40,000/month",
              bgColor: "bg-yellow-500",
              textColor: "text-grey-100",
            },
            {
              plan: "Platinum",
              desc: "One-on-one coaching, custom schedules",
              price: "#50,000/month",
              bgColor: "bg-purple-700",
              textColor: "text-white",
            },
          ].map((tier, idx) => (
            <div
              key={idx}
              className={`${tier.bgColor} ${tier.textColor} shadow-lg p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer`}
            >
              <h3 className="font-bold text-xl">{tier.plan}</h3>
              <p className="mt-2">{tier.desc}</p>
              <p className="mt-4 font-semibold text-lg">{tier.price}</p>
            </div>
          ))}
        </div>
        <button className="bg-green-500 hover:bg-green-700 mt-8 px-6 py-3 rounded-lg text-white">
          Find the Perfect Plan for Your Child
        </button>
      </section>
    </div>
  );
};

export default Home;
