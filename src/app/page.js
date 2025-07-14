import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-slate-900 dark:text-white">
              Keval Sompura
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">KS</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-4">
              Hi, I&apos;m{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Keval Sompura
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-4">
              Software Engineer | Ex - Lentra | FinTech Specialist
            </p>
            <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 mb-8 font-medium italic">
              &ldquo;Turning coffee into code, one microservice at a time
              ☕&rdquo;
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              Graduate student at Stevens Institute of Technology pursuing M.S.
              in Computer Science. Passionate about backend engineering,
              microservices architecture, and building scalable FinTech
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#experience"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Experience
              </a>
              <a
                href="https://1drv.ms/b/c/3a622e73a08a1366/EWEAChdr2dJOgHiJ_N_0FUwB5yxfSbXDbAfMOKHmuuZkGA?e=Xi0MTE"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>
              <a
                href="#contact"
                className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                I&apos;m a Software Engineer with 2+ years of experience in
                software development, currently pursuing my M.S. in Computer
                Science at Stevens Institute of Technology with a GPA of 3.78/4.
                I specialize in backend development, microservices architecture,
                and building scalable financial technology solutions.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Previously, I worked as a Senior Software Engineer at Lentra,
                where I designed and implemented middlewares using Java and
                Spring Boot, reducing API response times by 25% and achieving
                100% test success rate. I&apos;m passionate about system design,
                cloud infrastructure, and creating robust, high-performance
                applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium">
                  Java
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-medium">
                  Spring Boot
                </div>
                <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-medium">
                  Microservices
                </div>
                <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full text-sm font-medium">
                  AWS
                </div>
                <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium">
                  React
                </div>
                <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-medium">
                  Node.js
                </div>
                <div className="bg-emerald-100 dark:bg-emerald-900/30 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-full text-sm font-medium">
                  MongoDB
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>2
                  years of software development experience
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Senior Software Engineer at Lentra (FinTech)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  M.S. Computer Science at Stevens Institute
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  Based in New York City
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              When I&apos;m not coding, you&apos;ll find me exploring hiking
              trails, discovering new places to eat, or diving into the latest
              tech podcasts. I believe in continuous learning and love
              connecting with fellow developers who share the same passion for
              innovation and problem-solving.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Work Experience
          </h2>
          <div className="space-y-8">
            {/* Lentra */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Senior Software Engineer
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                    Lentra • Pune, India
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    May 2022 - November 2023
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                    Full-time
                  </span>
                </div>
              </div>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Designed and implemented middlewares using Java, Spring Boot
                  to optimize the orchestration layer of the microservice
                  architecture, reducing API response times by 25% and
                  facilitating seamless migration to AWS
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Integrated bank statement analyzers and implemented credit
                  eligibility calculations using Python to automate data entry,
                  reducing loan processing time by 2 days
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Revitalized unit test case infrastructure using JUnit,
                  addressing legacy errors and introducing 40+ new test cases,
                  elevating success rate from 65% to 100% and code coverage from
                  46% to 85%
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Created JavaScript-based solution for daily loan application
                  status reports with automated FTP uploads via CRON job, saving
                  4 hours of manual effort weekly
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Earned &apos;The Spot Award&apos; for exceptional
                  contributions to client success in Q2 2023
                </li>
              </ul>
            </div>

            {/* Blitz Jobs */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Android Development Intern
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                    Blitz Jobs • Mumbai, India
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    May 2021 - June 2021
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                    Internship
                  </span>
                </div>
              </div>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Led design and development of user-friendly Android app to
                  digitize rooftop solar process, increasing sales partner
                  engagement by 30%
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Contributed to 10% increase in sales through improved
                  efficiency and strengthened client interactions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Introduced analytics features to provide actionable insights
                  into partner performance and customer preferences
                </li>
              </ul>
            </div>

            {/* Krux Works */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Web Development Intern
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                    Krux Works • Mumbai, India
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    September 2020 - October 2020
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                    Internship
                  </span>
                </div>
              </div>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Engineered comprehensive web platform with dashboards to
                  improve user access and streamline information management
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Revitalized community interaction by introducing WordPress
                  forum, attracting 500 users in first week with 75 new posts
                  daily
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Improved mobile usability by over 30% through responsive
                  design solutions, enhancing user experience across devices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* StudentBridge Project */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-slate-200 dark:border-slate-700">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
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
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                    React
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                    Node.js
                  </span>
                  <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-xs">
                    MongoDB
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">
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
            </div>

            {/* Voice Commerce Project */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-slate-200 dark:border-slate-700">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
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
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                    Python
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                    Flask
                  </span>
                  <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">
                    Google Cloud APIs
                  </span>
                  <span className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs">
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
            </div>

            {/* Ride-Share Project */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-slate-200 dark:border-slate-700">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
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
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                    JavaScript
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                    Handlebars
                  </span>
                  <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-xs">
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
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Programming Languages */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
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
            </div>

            {/* Frameworks */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
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
            </div>

            {/* Database & Cloud */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
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
            </div>

            {/* Tools & DevOps */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
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
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-8">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and exciting
            projects. Whether you have a question or just want to say hi, feel
            free to reach out!
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <span className="text-xl">📧</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                Email
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                sompurakeval@gmail.com
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 mx-auto mb-4 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <span className="text-xl">💼</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                LinkedIn
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                linkedin.com/in/kevalsom
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <span className="text-xl">🐙</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                GitHub
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                github.com/keval-som
              </p>
            </div>
          </div>
          <a
            href="mailto:sompurakeval@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Send Me a Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">© 2025 Keval Sompura</p>
        </div>
      </footer>
    </div>
  );
}
