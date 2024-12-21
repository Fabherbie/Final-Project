import React from "react";

import {
  FaHeart,
  FaUsers,
  FaStar,
  FaGraduationCap,
  FaUserGraduate,
  FaTrophy,
} from "react-icons/fa";
import { GiPlantSeed } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import image1 from "../assets/images/african-american-woman-black-long-sleeve-tee-portrait (1).jpg";
import image2 from "../assets/images/front-view-man-listening-music.jpg";
import image3 from "../assets/images/man-with-happy-expression.jpg";
import image4 from "../assets/images/portrait-african-american-woman.jpg";
import image5 from "../assets/images/portrait-upset-american-black-person.jpg";
import image6 from "../assets/images/smiley-african-woman-with-golden-earrings.jpg";
import image7 from "../assets/images/worldface-american-man-white-background.jpg";
import image8 from "../assets/images/young-beautiful-african-girl-smiling-dark-wall.jpg";
import image9 from "../assets/images/children-making-robot.jpg";
import features from "../data/features.json";
import teamMember from "../data/teamMember.json";
import values from "../data/values.json";

const iconMapping = {
  FaHeart: <FaHeart className="text-3xl text-red-500" />,
  GiPlantSeed: <GiPlantSeed size={40} className="text-green-600" />,
  FaUsers: <FaUsers className="text-3xl text-orange-400" />,
  FaStar: <FaStar className="text-3xl text-yellow-400" />,
  FaGraduationCap: <FaGraduationCap className="text-3xl text-emerald-500" />,
  FaUserGraduate: <FaUserGraduate className="text-3xl text-pink-500" />,
  FaTrophy: <FaTrophy size={40} className="text-yellow-400" />,
  FaLeaf: <FaLeaf size={40} className="text-green-500" />,
  FaRegCalendarAlt: <FaRegCalendarAlt size={40} className="text-rose-500" />,
};

const imageMapping = {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
};
const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <header className="relative mt-[64px] w-full h-[500px]">
        <div
          className="bg-cover bg-center w-full h-full"
          style={{
            backgroundImage: `url(${image9})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center text-center text-white">
          <h1 className="font-bold text-4xl md:text-5xl">
            Empowering Young Minds Through <br /> Creativity, Sports, and
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

      {/* Features */}
      <section className="bg-white py-16 unique">
        <div className="mx-auto px-6 md:px-12 container">
          <h2 className="mb-12 font-bold text-3xl text-center text-green-500">
            What Makes Us Unique?
          </h2>
          <div className="gap-12 grid md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-gray-100 shadow-lg p-6 rounded-lg">
                <div className="flex justify-center mb-4">
                  <div className="bg-white shadow-md p-3 rounded-full">
                    {iconMapping[feature.icon] ? (
                      React.cloneElement(iconMapping[feature.icon], {
                        size: 40,
                      })
                    ) : (
                      <p>No icon found</p>
                    )}
                  </div>
                </div>
                <h3 className="mb-4 font-semibold text-purple-700 text-xl">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.details}</p>
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
            {teamMember.map((member, idx) => (
              <div key={idx} className="bg-white shadow-lg p-6 rounded-lg">
                <img
                  src={imageMapping[member.image]}
                  alt={member.name}
                  className="rounded-lg w-full h-48 object-contain"
                />
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
            {values.map((value, idx) => (
              <div key={idx} className="bg-gray-100 shadow-lg p-6 rounded-lg">
                <div className="flex justify-center mb-4">
                  {iconMapping[value.icon]}
                </div>
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
