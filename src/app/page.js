"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const cardVariants = {
    hover: { y: -10, transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] } },
  };

  const containerVariants = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans">
      {/* Minimal Navigation */}
      <motion.nav className="fixed top-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold"
          >
            Keval Sompura
          </motion.div>
          <div className="flex space-x-8 text-sm font-medium">
            {["About", "Experience", "Projects", "Skills", "Contact"].map(
              (item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  {item}
                </motion.a>
              )
            )}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="w-32 h-32 mb-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center shadow-lg"
        >
          <span className="text-4xl font-bold text-gray-800 dark:text-gray-200">
            KS
          </span>
        </motion.div>
        <motion.h1
          className="text-7xl font-bold mb-4 leading-none"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        >
          Hi, I&apos;m Keval Sompura
        </motion.h1>
        <motion.p
          className="text-2xl text-gray-600 dark:text-gray-400 mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Software Engineer | FinTech Specialist
        </motion.p>
        <motion.p
          className="text-xl italic text-gray-500 dark:text-gray-400 mb-6 max-w-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {"Turning coffee into code, one microservice at a time ☕"}
        </motion.p>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Graduate student at Stevens Institute of Technology pursuing M.S. in
          Computer Science. Passionate about backend engineering, microservices
          architecture, and building scalable FinTech solutions.
        </motion.p>
        <motion.div
          className="flex justify-center gap-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <a
            href="#experience"
            className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition"
          >
            View Experience
          </a>
          <a
            href="https://1drv.ms/b/c/3a622e73a08a1366/EWEAChdr2dJOgHiJ_N_0FUwB5yxfSbXDbAfMOKHmuuZkGA?e=Xi0MTE"
            className="border border-gray-300 px-6 py-3 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="border border-gray-300 px-6 py-3 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-900 transition"
          >
            Get In Touch
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16"
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p
                variants={sectionVariants}
                className="text-lg text-gray-600 dark:text-gray-300 mb-6"
              >
                I&apos;m a Software Engineer with 2+ years of experience in
                software development, currently pursuing my M.S. in Computer
                Science at Stevens Institute of Technology with a GPA of 3.78/4.
                I specialize in backend development, microservices architecture,
                and building scalable financial technology solutions.
              </motion.p>
              <motion.p
                variants={sectionVariants}
                className="text-lg text-gray-600 dark:text-gray-300 mb-6"
              >
                Previously, I worked as a Senior Software Engineer at Lentra,
                where I designed and implemented middlewares using Java and
                Spring Boot, reducing API response times by 25% and achieving
                100% test success rate. I&apos;m passionate about system design,
                cloud infrastructure, and creating robust, high-performance
                applications.
              </motion.p>
              <motion.p
                variants={sectionVariants}
                className="text-lg text-gray-600 dark:text-gray-300"
              >
                When I&apos;m not coding, you&apos;ll find me exploring hiking
                trails, discovering new places to eat, or diving into the latest
                tech podcasts.
              </motion.p>
            </motion.div>
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  2 years of software development experience
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  Senior Software Engineer at Lentra (FinTech)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  M.S. Computer Science at Stevens Institute
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                  Based in New York City
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16"
          >
            Work Experience
          </motion.h2>
          <div className="relative">
            <div className="absolute left-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>
            {/* Lentra */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12 text-left md:text-right pr-4 md:pr-0"
            >
              <div className="inline-block bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-2">
                  Senior Software Engineer
                </h3>
                <p className="text-gray-500 mb-4">
                  Lentra • May 2022 - November 2023
                </p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Designed middlewares with Java/Spring Boot, reducing
                    response times by 25%
                  </li>
                  <li>
                    Integrated analyzers with Python, cutting loan processing by
                    2 days
                  </li>
                  <li>
                    Revitalized unit test case infrastructure using JUnit,
                    addressing legacy errors and introducing 40+ new test cases,
                    elevating success rate from 65% to 100% and code coverage
                    from 46% to 85%
                  </li>
                  <li>
                    Created JavaScript-based solution for daily loan application
                    status reports with automated FTP uploads via CRON job,
                    saving 4 hours of manual effort weekly
                  </li>
                  <li>
                    Earned &apos;The Spot Award&apos; for exceptional
                    contributions to client success in Q2 2023
                  </li>
                </ul>
              </div>
            </motion.div>
            {/* Blitz Jobs */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12 text-right md:text-left pl-4 md:pl-0"
            >
              <div className="inline-block bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-2">
                  Android Development Intern
                </h3>
                <p className="text-gray-500 mb-4">
                  Blitz Jobs • May 2021 - June 2021
                </p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Led design and development of user-friendly Android app to
                    digitize rooftop solar process, increasing sales partner
                    engagement by 30%
                  </li>
                  <li>
                    Contributed to 10% increase in sales through improved
                    efficiency and strengthened client interactions
                  </li>
                  <li>
                    Introduced analytics features to provide actionable insights
                    into partner performance and customer preferences
                  </li>
                </ul>
              </div>
            </motion.div>
            {/* Krux Works */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12 text-left md:text-right pr-4 md:pr-0"
            >
              <div className="inline-block bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-2">
                  Web Development Intern
                </h3>
                <p className="text-gray-500 mb-4">
                  Krux Works • September 2020 - October 2020
                </p>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                  <li>
                    Engineered comprehensive web platform with dashboards to
                    improve user access and streamline information management
                  </li>
                  <li>
                    Revitalized community interaction by introducing WordPress
                    forum, attracting 500 users in first week with 75 new posts
                    daily
                  </li>
                  <li>
                    Improved mobile usability by over 30% through responsive
                    design solutions, enhancing user experience across devices
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16"
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* StudentBridge Project */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  StudentBridge
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  StudentBridge - Academic Resource Platform
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  A comprehensive web application connecting students with
                  resources, mentors, and opportunities to enhance their
                  academic journey. Features user authentication, resource
                  sharing, and discussion forums.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs">
                    React
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs">
                    Node.js
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs">
                    MongoDB
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs">
                    Docker
                  </span>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/keval-som/StudentBridge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Voice Commerce Project */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  Voice Commerce
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Voice-Enabled E-commerce Platform
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  A voice-enabled e-commerce platform for street vendors using
                  speech recognition. Allows vendors to add products by speaking
                  in their local language with multilingual support.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs">
                    Python
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs">
                    Flask
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs">
                    Google Cloud APIs
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs">
                    OAuth2
                  </span>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/keval-som/voice-commerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Ride-Share Project */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  Ride-Share
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Ride-Sharing Application
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  A ride-sharing platform built with modern web technologies.
                  Features user authentication, ride booking, and real-time
                  location tracking.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs">
                    JavaScript
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs">
                    Handlebars
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs">
                    CSS
                  </span>
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/keval-som/Ride-Share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16"
          >
            Skills & Technologies
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Programming Languages */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Languages
              </h3>
              <div className="space-y-2">
                <div className="text-slate-600 dark:text-slate-300">Java</div>
                <div className="text-slate-600 dark:text-slate-300">Python</div>
                <div className="text-slate-600 dark:text-slate-300">
                  JavaScript
                </div>
                <div className="text-slate-600 dark:text-slate-300">C/C++</div>
              </div>
            </motion.div>

            {/* Frameworks */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Frameworks
              </h3>
              <div className="space-y-2">
                <div className="text-slate-600 dark:text-slate-300">
                  Spring Boot
                </div>
                <div className="text-slate-600 dark:text-slate-300">
                  React.js
                </div>
                <div className="text-slate-600 dark:text-slate-300">
                  Node.js
                </div>
                <div className="text-slate-600 dark:text-slate-300">Flask</div>
              </div>
            </motion.div>

            {/* Database & Cloud */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🗄️</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Database & Cloud
              </h3>
              <div className="space-y-2">
                <div className="text-slate-600 dark:text-slate-300">
                  MongoDB
                </div>
                <div className="text-slate-600 dark:text-slate-300">SQL</div>
                <div className="text-slate-600 dark:text-slate-300">AWS</div>
                <div className="text-slate-600 dark:text-slate-300">
                  Google Cloud
                </div>
              </div>
            </motion.div>

            {/* Tools & DevOps */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Tools & DevOps
              </h3>
              <div className="space-y-2">
                <div className="text-slate-600 dark:text-slate-300">
                  Git & Bitbucket
                </div>
                <div className="text-slate-600 dark:text-slate-300">Docker</div>
                <div className="text-slate-600 dark:text-slate-300">Maven</div>
                <div className="text-slate-600 dark:text-slate-300">Jira</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-5xl font-bold text-slate-900 dark:text-white mb-8"
          >
            Let&apos;s Work Together
          </motion.h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and exciting
            projects. Whether you have a question or just want to say hi, feel
            free to reach out!
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-xl">📧</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Email
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                <a
                  href="mailto:sompurakeval@gmail.com"
                  className="hover:underline"
                >
                  sompurakeval@gmail.com
                </a>
              </p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-xl">💼</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                LinkedIn
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                <a
                  href="https://www.linkedin.com/in/kevalsom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/kevalsom
                </a>
              </p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-xl">🐙</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                GitHub
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                <a
                  href="https://github.com/keval-som"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  github.com/keval-som
                </a>
              </p>
            </motion.div>
          </div>
          <motion.a
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
            href="mailto:sompurakeval@gmail.com"
            className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors inline-block"
          >
            Send Me a Message
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 dark:text-gray-400 text-sm">
        © 2025 Keval Sompura
      </footer>
    </div>
  );
}
