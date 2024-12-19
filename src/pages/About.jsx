import React from "react";
import { FaStar, FaUsers, FaHeart, FaGraduationCap } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { AiOutlineBranches } from "react-icons/ai";
import { FaTrophy } from "react-icons/fa";
import { GiPlantSeed } from "react-icons/gi";

import image1 from "../assets/images/african-american-woman-black-long-sleeve-tee-portrait (1).jpg";
import image2 from "../assets/images/front-view-man-listening-music.jpg";
import image3 from "../assets/images/man-with-happy-expression.jpg";
import image4 from "../assets/images/portrait-african-american-woman.jpg";
import image5 from "../assets/images/portrait-upset-american-black-person.jpg";
import image6 from "../assets/images/smiley-african-woman-with-golden-earrings.jpg";
import image7 from "../assets/images/worldface-american-man-white-background.jpg";
import image8 from "../assets/images/young-beautiful-african-girl-smiling-dark-wall.jpg";
import image9 from "../assets/images/Ballet 2.jpg";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center py-16 text-white"
        style={{
          backgroundImage: `url(${image9})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="font-bold text-4xl md:text-5xl">
            Empowering Young Minds Through <br /> <br /> Creativity, Sports, and
            Academics!
          </h1>
        </div>
      </header>

      {/* Mission Statement */}
      <section className="bg-gray-100 py-16 mission">
        <div className="mx-auto px-6 md:px-12 container">
          <h2 className="mb-6 font-bold text-3xl text-center text-green-500">
            Our Mission
          </h2>
          <p className="text-center text-gray-600 text-lg leading-relaxed">
            At Starling Academy, our mission is to empower children aged 4–16 by
            nurturing their unique talents and fostering their confidence
            through an engaging mix of creative, athletic, and academic
            programs. From sports to performing arts, from STEM to competitive
            academics, we provide a platform for every child to explore their
            passions and achieve their potential.
          </p>
          <p className="mt-6 text-center text-gray-600 text-lg leading-relaxed">
            We believe that every child deserves the opportunity to shine, and
            we’re here to help them find their path with the right guidance,
            resources, and support.
          </p>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="bg-white py-16 unique">
        <div className="mx-auto px-6 md:px-12 container">
          <h2 className="mb-12 font-bold text-3xl text-center text-green-500">
            What Makes Us Unique?
          </h2>
          <div className="gap-12 grid md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <FaGraduationCap className="text-3xl text-blue-600" />,
                title: "Comprehensive Programs for Every Child",
                details:
                  "Creative Arts, Athletics, and Academics including Ballet, Football, Robotics, and more.",
              },
              {
                icon: <FaUsers className="text-3xl text-green-600" />,
                title: "Flexible Learning Options",
                details:
                  "Choose between physical or online classes tailored to your family’s needs.",
              },
              {
                icon: <FaStar className="text-3xl text-yellow-500" />,
                title: "Tailored Skill Levels",
                details:
                  "Programs for all skill levels, including beginner, intermediate, advanced, and personalized coaching.",
              },
              {
                icon: <FaUserGraduate size={40} className="text-blue-600" />,
                title: "Expert Instructors Who Care",
                details:
                  "Certified professionals with experience in skill-building, fostering creativity, and boosting confidence.",
              },
              {
                icon: <AiOutlineBranches size={40} className="text-blue-600" />,
                title: "A Holistic Approach",
                details:
                  "Combining academic, artistic, and athletic programs for well-rounded development.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-100 shadow-lg p-6 rounded-lg">
                <div className="top-4 left-4 absolute">
                  <div className="bg-white shadow-md p-3 rounded-full">
                    {item.icon}
                  </div>
                </div>
                <h3 className="mb-4 font-semibold text-purple-700 text-xl">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="bg-gray-100 py-16 team">
        <div className="mx-auto px-6 md:px-12 container">
          <h2 className="mb-12 font-bold text-3xl text-center text-green-500">
            Meet the Team
          </h2>
          <div className="gap-12 grid sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Omolola Remi",
                role: "Ballet Instructor",
                image: image4,
                quote:
                  "Dancing isn’t just about movements—it’s about expressing who you are.",
                bio: "Professional dancer with over a decade of experience in classical and contemporary ballet.",
              },
              {
                name: "Emeka Okafor",
                role: "Football Coach",
                image: image2,
                quote:
                  "Teamwork, discipline, and passion are the skills every child needs to succeed.",
                bio: "8+ years of coaching experience, training young athletes and leading teams to championships.",
              },
              {
                name: "John Smith",
                role: "Music Teacher",
                image: image3,
                quote:
                  "Music is the language of the soul. My goal is to help children connect with that language.",
                bio: "Accomplished pianist and composer with 12 years of teaching experience.",
              },
              {
                name: "Adebola Johnson",
                role: "Voice Coach",
                image: image6,
                quote:
                  "Every voice is special. My mission is to help children discover theirs.",
                bio: "Professional vocal coach with students who have performed in national competitions.",
              },
              {
                name: "Jedidiah Adufe",
                role: "Basketball Trainer",
                image: image5,
                quote:
                  "Basketball isn’t just a sport; it’s a way to teach resilience, focus, and teamwork.",
                bio: "5+ years of experience training kids in fundamental and advanced basketball techniques.",
              },
              {
                name: "Olamide Abayomi",
                role: "Robotics and STEM Instructor",
                image: image1,
                quote:
                  "Building robots is building the future. I’m here to guide kids on their exciting journey.",
                bio: "Robotics engineer with 7 years of teaching experience in programming and robotics.",
              },
              {
                name: "Anthony Emmanuel",
                role: "Math Decathlon Coach",
                image: image7,
                quote:
                  "Math isn’t just numbers—it’s a game of logic and creativity.",
                bio: "Certified math educator who has trained students for state and national-level competitions.",
              },
              {
                name: "Amidat Adenekan",
                role: "Spelling Bee Mentor",
                image: image8,
                quote:
                  "Words are powerful tools. My goal is to help kids master them with confidence.",
                bio: "Spelling bee coach with 6 years of experience, focusing on vocabulary and stage presence.",
              },
            ].map((member, idx) => (
              <div key={idx} className="bg-white shadow-lg p-6 rounded-lg">
                <h3 className="font-bold text-purple-700 text-xl">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm italic">{member.role}</p>
                <p className="mt-4 text-gray-600">"{member.quote}"</p>
                <p className="mt-4 text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white py-16 values">
        <div className="mx-auto px-6 md:px-12 container">
          <h2 className="mb-6 font-bold text-3xl text-center text-green-500">
            Our Values
          </h2>
          <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-4 text-center">
            {[
              {
                icon: <FaHeart className="text-3xl text-red-500" />,
                title: "Passion",
                details: "Fostering a love for learning and self-expression.",
              },
              {
                icon: <GiPlantSeed size={40} className="text-green-600" />,
                title: "Growth",
                details:
                  "Helping kids develop mentally, emotionally, and physically.",
              },
              {
                icon: <FaUsers className="text-3xl text-green-600" />,
                title: "Inclusivity",
                details: "Ensuring every child feels welcome and valued.",
              },
              {
                icon: <FaTrophy size={40} className="text-blue-600" />,
                title: "Excellence",
                details:
                  "Offering quality programs that deliver lasting results.",
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-gray-100 shadow-lg p-6 rounded-lg">
                <h3 className="font-semibold text-purple-700 text-xl">
                  {value.title}
                </h3>
                <p className="mt-4 text-gray-600">{value.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="bg-blue-500 py-16 text-center text-white cta">
        <h2 className="mb-6 font-bold text-3xl">
          Join Us in Inspiring the Next Generation!
        </h2>
        <p className="mb-6 text-lg">
          Whether your child dreams of performing on stage, excelling in sports,
          or competing in STEM or academic challenges, <br /> Starling Academy
          is the perfect place to start.
        </p>
        <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold text-lg">
          Enroll Today
        </button>
      </section>
    </div>
  );
};

export default About;
