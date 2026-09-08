// ----------------------------------------------------------
// ABOUT PAGE
// ----------------------------------------------------------

import React from "react";

// General UI icons from lucide-react
import {
  Phone,
  Code2,
  Server,
  Database,
  Cloud,
  GitBranch,
  Users,
  Lightbulb,
  Target,
  GraduationCap,
  ArrowUpRight,
  FlaskConical,
} from "lucide-react";

// Brand/social icons
// GitHub and LinkedIn come from react-icons, NOT lucide-react.
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

// Profile image
import profileImage from "../assets/images/okuo-john.png";


// ----------------------------------------------------------
// ABOUT COMPONENT
// ----------------------------------------------------------

function About() {

  // --------------------------------------------------------
  // SKILLS
  // --------------------------------------------------------

  const skills = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Responsive Design",
        "State Management",
      ],
    },

    {
      title: "Backend Development",
      icon: Server,
      skills: [
        "Node.js",
        "Express",
        "RESTful APIs",
        "JWT Authentication",
        "API Security",
        "Server Architecture",
      ],
    },

    {
      title: "Databases",
      icon: Database,
      skills: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Supabase",
        "Database Design",
      ],
    },

    {
      title: "Tools & Practices",
      icon: GitBranch,
      skills: [
        "Git",
        "GitHub",
        "Command Line",
        "Postman",
        "Environment Variables",
        "Clean Code",
        "Debugging",
      ],
    },

    {
      title: "Deployment",
      icon: Cloud,
      skills: [
        "Vercel",
        "Netlify",
        "Render",
        "Railway",
        "AWS",
        "Docker",
        "CI/CD",
        "Linux",
      ],
    },

    {
      title: "Other Skills",
      icon: Users,
      skills: [
        "Problem Solving",
        "Documentation",
        "UI/UX Understanding",
        "Testing",
        "Communication",
        "Teamwork",
      ],
    },
  ];


  // --------------------------------------------------------
  // RETURN
  // --------------------------------------------------------

  return (
    <div className="min-h-screen bg-white text-gray-900">


      {/* ==================================================
          HERO SECTION
      ================================================== */}

      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50">

        <div className="mx-auto max-w-[1255px] px-4 py-16 md:px-0 md:py-24">

          <div className="grid items-center gap-12 md:grid-cols-2">


            {/* ==================================================
                LEFT SIDE
            ================================================== */}

            <div>

              {/* Small introduction badge */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">

                <Code2 size={18} />

                Full Stack Web Developer

              </div>


              {/* Main heading */}
              <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">

                Hi, I'm{" "}

                <span className="text-purple-700">
                  Okuo Iramofu John
                </span>

              </h1>


              {/* Professional description */}
              <p className="mb-6 max-w-2xl text-lg leading-8 text-gray-600">

                I'm a Materials and Metallurgical Engineer and Full Stack Web
                Developer passionate about solving problems through
                engineering and technology.

              </p>


              {/* Second paragraph */}
              <p className="mb-8 max-w-2xl text-lg leading-8 text-gray-600">

                I enjoy building useful digital solutions and finding
                meaningful ways to use technology to help people, especially
                students working toward their academic goals.

              </p>


              {/* Social buttons */}
              <div className="flex flex-wrap gap-4">


                {/* GitHub button */}
                <a
                  href="https://github.com/okuo-john"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-3 font-semibold text-white transition hover:bg-gray-700"
                >

                  <FaGithub size={20} />

                  GitHub

                  <ArrowUpRight size={17} />

                </a>


                {/* LinkedIn button */}
                <a
                  href="https://www.linkedin.com/in/okuo-iramofu-john-83046641b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-purple-700 px-5 py-3 font-semibold text-white transition hover:bg-purple-800"
                >

                  <FaLinkedinIn size={19} />

                  LinkedIn

                  <ArrowUpRight size={17} />

                </a>

              </div>

            </div>


            {/* ==================================================
                RIGHT SIDE - CIRCULAR PROFILE IMAGE
            ================================================== */}

            <div className="flex justify-center md:justify-end">

              <div className="relative">


                {/* Decorative glow behind image */}
                <div className="absolute -inset-5 rounded-full bg-purple-200/70 blur-2xl">
                </div>


                {/* Outer circular border */}
                <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-8 border-white shadow-2xl sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]">


                  {/* Profile image */}
                  <img
                    src={profileImage}
                    alt="Okuo Iramofu John"
                    className="h-full w-full object-cover"
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* ==================================================
          MY STORY
      ================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-[1255px] px-4 py-16 md:px-0 md:py-20">


          {/* Section heading */}
          <div className="mx-auto mb-12 max-w-3xl text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-purple-700">
              About Me
            </p>

            <h2 className="mb-5 text-3xl font-bold text-gray-900 md:text-4xl">
              My Story
            </h2>

            <p className="text-lg leading-8 text-gray-600">

              My journey combines engineering, technology, problem-solving,
              and a desire to make a positive impact.

            </p>

          </div>


          {/* Story cards */}
          <div className="grid gap-6 md:grid-cols-3">


            {/* ==================================================
                CARD 1 - PROBLEM SOLVER
            ================================================== */}

            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-700">

                <Lightbulb size={25} />

              </div>

              <h3 className="mb-3 text-xl font-bold">
                Problem Solver
              </h3>

              <p className="leading-7 text-gray-600">

                Engineering taught me to look at problems carefully,
                understand their causes, and develop practical solutions.
                I bring that same mindset into software development.

              </p>

            </div>


            {/* ==================================================
                CARD 2 - MATERIALS & METALLURGICAL ENGINEER
            ================================================== */}

            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">

                <FlaskConical size={25} />

              </div>

              <h3 className="mb-3 text-xl font-bold">
                Materials & Metallurgical Engineer
              </h3>

              <p className="leading-7 text-gray-600">

                My background in Materials and Metallurgical Engineering
                strengthened my analytical thinking, attention to detail,
                research ability, and approach to solving complex problems.

              </p>

            </div>


            {/* ==================================================
                CARD 3 - HELPING STUDENTS
            ================================================== */}

            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-700">

                <GraduationCap size={25} />

              </div>

              <h3 className="mb-3 text-xl font-bold">
                Helping Students
              </h3>

              <p className="leading-7 text-gray-600">

                As an engineer, I find it interesting and meaningful to
                help students achieve their goals. This is one of the
                reasons I enjoy building technology that supports learning.

              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ==================================================
          WHY I BUILT JAMBPREP
      ================================================== */}

      <section className="bg-gray-50">

        <div className="mx-auto max-w-[1255px] px-4 py-16 md:px-0 md:py-20">

          <div className="grid items-center gap-12 md:grid-cols-2">


            {/* ==================================================
                LEFT SIDE - STORY
            ================================================== */}

            <div>

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">

                <Lightbulb size={28} />

              </div>


              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-purple-700">
                The Idea
              </p>


              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">

                Why I Built JAMBPrep

              </h2>


              <div className="space-y-5 text-lg leading-8 text-gray-600">


                <p>

                  As an engineer, I have always found problem-solving
                  interesting. I wanted to combine that mindset with my
                  passion for technology to create something that could
                  positively impact students.

                </p>


                <p>

                  Preparing for JAMB can be challenging. Students need
                  opportunities to practice questions, identify areas where
                  they need improvement, and build confidence before the
                  actual examination.

                </p>


                <p>

                  JAMBPrep was created to provide students with a simple
                  and interactive platform where they can practice
                  JAMB-style questions and prepare more effectively.

                </p>


                <p>

                  For me, this project is more than just building a website.
                  It is about using my skills to create something that can
                  help students move closer to achieving their goals.

                </p>

              </div>

            </div>


            {/* ==================================================
                RIGHT SIDE - JAMBPREP CARD
            ================================================== */}

            <div className="rounded-3xl bg-gradient-to-br from-purple-700 to-blue-700 p-8 text-white shadow-xl md:p-12">

              <GraduationCap
                size={55}
                className="mb-7"
              />


              <h3 className="mb-5 text-2xl font-bold md:text-3xl">

                Engineering + Technology + Education

              </h3>


              <p className="mb-6 leading-8 text-purple-100">

                JAMBPrep brings together my interest in engineering,
                software development, problem-solving, and education.

              </p>


              <p className="leading-8 text-purple-100">

                The idea is simple: build technology that is useful and
                gives students another tool to help them prepare, practice,
                and work toward their academic goals.

              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ==================================================
          GOAL OF JAMBPREP
      ================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-[1255px] px-4 py-16 md:px-0 md:py-20">

          <div className="mx-auto max-w-4xl text-center">


            {/* Icon */}
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">

              <Target size={28} />

            </div>


            {/* Small title */}
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-purple-700">
              Our Mission
            </p>


            {/* Main heading */}
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">

              The Goal of JAMBPrep

            </h2>


            {/* Description */}
            <p className="text-lg leading-8 text-gray-600">

              The goal of JAMBPrep is to make JAMB preparation more
              accessible, interactive, and engaging. Students should be able
              to practice questions, understand their performance, identify
              areas for improvement, and build confidence before the actual
              examination.

            </p>

          </div>

        </div>

      </section>



      {/* ==================================================
          TECHNOLOGIES I WORK WITH
      ================================================== */}

      <section className="bg-gray-50">

        <div className="mx-auto max-w-[1255px] px-4 py-16 md:px-0 md:py-20">


          {/* Section heading */}
          <div className="mb-12 text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-purple-700">
              My Toolkit
            </p>

            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">

              Technologies I Work With

            </h2>

            <p className="mx-auto max-w-2xl text-lg text-gray-600">

              Some of the technologies, tools, and practices I use when
              designing and building web applications.

            </p>

          </div>


          {/* Skills grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">


            {skills.map((skillGroup) => {

              // Get the icon component
              const Icon = skillGroup.icon;

              return (

                <div
                  key={skillGroup.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >


                  {/* Icon and title */}
                  <div className="mb-5 flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-700">

                      <Icon size={22} />

                    </div>


                    <h3 className="text-lg font-bold text-gray-900">

                      {skillGroup.title}

                    </h3>

                  </div>


                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">

                    {skillGroup.skills.map((skill) => (

                      <span
                        key={skill}
                        className="rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700"
                      >

                        {skill}

                      </span>

                    ))}

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </section>



      {/* ==================================================
          LET'S CONNECT
      ================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-[900px] px-4 py-16 text-center md:py-20">


          {/* Icon */}
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">

            <Users size={28} />

          </div>


          {/* Small heading */}
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-purple-700">
            Get In Touch
          </p>


          {/* Main heading */}
          <h2 className="mb-5 text-3xl font-bold text-gray-900 md:text-4xl">

            Let's Connect

          </h2>


          {/* Description */}
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-gray-600">

            Interested in my work, have a project idea, or simply want to
            connect? Feel free to reach out.

          </p>


          {/* ==================================================
              PHONE NUMBERS
          ================================================== */}

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">


            {/* Phone number 1 */}
            <a
              href="tel:08025463087"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-800 shadow-sm transition hover:border-purple-300 hover:bg-purple-50"
            >

              <Phone size={19} />

              08025463087

            </a>


            {/* Phone number 2 */}
            <a
              href="tel:09064323473"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-3 font-semibold text-gray-800 shadow-sm transition hover:border-purple-300 hover:bg-purple-50"
            >

              <Phone size={19} />

              09064323473

            </a>

          </div>


          {/* ==================================================
              SOCIAL MEDIA
          ================================================== */}

          <div className="mt-8 flex justify-center gap-4">


            {/* GitHub */}
            <a
              href="https://github.com/okuo-john"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white transition hover:scale-105 hover:bg-gray-700"
            >

              <FaGithub size={23} />

            </a>


            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/okuo-iramofu-john-83046641b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-700 text-white transition hover:scale-105 hover:bg-purple-800"
            >

              <FaLinkedinIn size={21} />

            </a>

          </div>

        </div>

      </section>



      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer className="border-t border-gray-200 bg-gray-50">

        <div className="mx-auto max-w-[1255px] px-4 py-8 text-center md:px-0">

          <p className="text-sm leading-6 text-gray-500">

            Built with passion, curiosity, and a desire to solve
            real-world problems through technology.

          </p>


          <p className="mt-2 text-sm font-medium text-gray-700">

            © {new Date().getFullYear()} Okuo Iramofu John.
            All rights reserved.

          </p>

        </div>

      </footer>

    </div>
  );
}


// ----------------------------------------------------------
// EXPORT
// ----------------------------------------------------------

export default About;