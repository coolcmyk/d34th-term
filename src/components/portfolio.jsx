"use client"

import { useState } from "react"

/**
 * @typedef {Object} PortfolioProps
 * @property {() => void} onClose
 */

/**
 * Portfolio component for displaying the user's portfolio
 * @param {PortfolioProps} props
 */
export function Portfolio({ onClose }) {
  const [activeSection, setActiveSection] = useState("about")

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-4 border-b border-green-700 pb-2">
        <h1 className="text-xl text-cyan-300 font-bold">Ryan Adidaru's Portfolio</h1>
        <button onClick={onClose} className="px-2 py-1 bg-green-900 text-green-100 rounded hover:bg-green-800">
          Back to Terminal
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 h-full">
        <div className="md:w-1/4 space-y-2">
          <button
            onClick={() => setActiveSection("about")}
            className={`w-full text-left px-2 py-1 rounded ${activeSection === "about" ? "bg-green-900 text-green-100" : "text-green-400 hover:bg-green-900/30"}`}
          >
            About Me
          </button>
          <button
            onClick={() => setActiveSection("education")}
            className={`w-full text-left px-2 py-1 rounded ${activeSection === "education" ? "bg-green-900 text-green-100" : "text-green-400 hover:bg-green-900/30"}`}
          >
            Education
          </button>
          <button
            onClick={() => setActiveSection("experience")}
            className={`w-full text-left px-2 py-1 rounded ${activeSection === "experience" ? "bg-green-900 text-green-100" : "text-green-400 hover:bg-green-900/30"}`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveSection("projects")}
            className={`w-full text-left px-2 py-1 rounded ${activeSection === "projects" ? "bg-green-900 text-green-100" : "text-green-400 hover:bg-green-900/30"}`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveSection("skills")}
            className={`w-full text-left px-2 py-1 rounded ${activeSection === "skills" ? "bg-green-900 text-green-100" : "text-green-400 hover:bg-green-900/30"}`}
          >
            Skills
          </button>
          <button
            onClick={() => setActiveSection("certificates")}
            className={`w-full text-left px-2 py-1 rounded ${activeSection === "certificates" ? "bg-green-900 text-green-100" : "text-green-400 hover:bg-green-900/30"}`}
          >
            Certificates
          </button>
          <button
            onClick={() => setActiveSection("contact")}
            className={`w-full text-left px-2 py-1 rounded ${activeSection === "contact" ? "bg-green-900 text-green-100" : "text-green-400 hover:bg-green-900/30"}`}
          >
            Contact
          </button>
        </div>

        <div className="md:w-3/4 bg-black/50 p-4 rounded border border-green-700 overflow-y-auto">
          {activeSection === "about" && (
            <div>
              <h2 className="text-lg text-cyan-300 font-bold mb-2">About Me</h2>
              <div className="space-y-2 text-green-300">
                <p>Hello, I'm Ryan Adidaru.</p>
                <p>
                  I'm a Computer Engineering student at the University of Indonesia with a passion for AI, robotics, and
                  autonomous systems.
                </p>
                <p>
                  My expertise spans across machine learning, computer vision, and software development with proficiency
                  in languages like Rust, Python, C/C++, and more.
                </p>
                <p>
                  I'm currently working as an AI Staff for Autonomous Marine Vehicle at the University of Indonesia,
                  where I develop navigation algorithms and computer vision systems.
                </p>
                <p>
                  I enjoy building projects that solve real-world problems, from autonomous navigation systems to AI
                  assistants and computer vision applications.
                </p>
              </div>
            </div>
          )}

          {activeSection === "education" && (
            <div>
              <h2 className="text-lg text-cyan-300 font-bold mb-2">Education</h2>
              <div className="border border-green-700 p-4 rounded">
                <h3 className="text-green-400 font-bold text-lg">University of Indonesia</h3>
                <p className="text-green-300">Jakarta, Indonesia</p>
                <p className="text-green-300 mt-1">Bachelor of Engineering in Computer Engineering</p>
                <p className="text-green-300">Expected Graduation: 2026</p>
              </div>
            </div>
          )}

          {activeSection === "experience" && (
            <div>
              <h2 className="text-lg text-cyan-300 font-bold mb-2">Professional Experience</h2>
              <div className="space-y-4">
                <div className="border border-green-700 p-4 rounded">
                  <h3 className="text-green-400 font-bold">AI Staff of Autonomous Marine Vehicle</h3>
                  <p className="text-green-300">University of Indonesia, Jakarta</p>
                  <p className="text-green-300 italic">March 2024 - Present</p>
                  <ul className="list-disc pl-5 mt-2 text-green-300">
                    <li>Developed Python and C++ scripts for Autonomous Navigation Algorithm in ROS2</li>
                    <li>Developed ROS2 package integrating robot components into a unified system</li>
                    <li>Developed custom datasets for YoloV8-YoloV11 models and trained with custom datasets</li>
                    <li>Currently developing ASV's robotic simulation platform using Unity3D with C# and ROS2</li>
                    <li>Developed Python script for image processing using OpenCV, improving accuracy to 85%</li>
                    <li>Explored GitHub collaboration in team settings</li>
                  </ul>
                </div>

                <div className="border border-green-700 p-4 rounded">
                  <h3 className="text-green-400 font-bold">Hardware Intern of EXERCISE FTUI</h3>
                  <p className="text-green-300">University of Indonesia, Jakarta</p>
                  <p className="text-green-300 italic">October 2023 - January 2024</p>
                  <ul className="list-disc pl-5 mt-2 text-green-300">
                    <li>Developed IoT platform for mushroom cultivation producing temperature and humidity data</li>
                    <li>
                      Developed software using linear regression to maintain mushrooms automatically, increasing
                      productivity by 75%
                    </li>
                    <li>Enhanced software with AI Assistant models using character.ai API and Google text-to-speech</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeSection === "projects" && (
            <div>
              <h2 className="text-lg text-cyan-300 font-bold mb-2">Projects</h2>
              <div className="space-y-4">
                <div className="border border-green-700 p-4 rounded">
                  <h3 className="text-green-400 font-bold">RoR — RewrittenOnRust</h3>
                  <p className="text-green-300 italic">March 2025 - Present</p>
                  <p className="text-green-300 text-sm">Rust, Machine Learning, Ollama, VectorDB (Qdrant)</p>
                  <ul className="list-disc pl-5 mt-2 text-green-300">
                    <li>Open-source project in Rust applying popular LLMs stack like RAG using Qdrant as VectorDB</li>
                    <li>Using Ollama as backend endpoint for LLM and Embedding models</li>
                  </ul>
                </div>

                <div className="border border-green-700 p-4 rounded">
                  <h3 className="text-green-400 font-bold">asvsim</h3>
                  <p className="text-green-300 italic">December 2024 - Present</p>
                  <p className="text-green-300 text-sm">Python, C++, C#, Unity</p>
                  <ul className="list-disc pl-5 mt-2 text-green-300">
                    <li>Forked and contributed to open-source ASV robotic simulation</li>
                    <li>Developing autonomous system to integrate with ROS2</li>
                  </ul>
                </div>

                <div className="border border-green-700 p-4 rounded">
                  <h3 className="text-green-400 font-bold">yolo.cpp</h3>
                  <p className="text-green-300 italic">July 2024 - December 2024</p>
                  <p className="text-green-300 text-sm">CUDA, C, C++, Neural Networks</p>
                  <ul className="list-disc pl-5 mt-2 text-green-300">
                    <li>Developed vision model from scratch using C++ with omp.h to maximize CPU usage</li>
                    <li>Added CUDA support for GPU optimization</li>
                  </ul>
                </div>

                <div className="border border-green-700 p-4 rounded">
                  <h3 className="text-green-400 font-bold">amadeus</h3>
                  <p className="text-green-300 italic">July 2024 - Present</p>
                  <p className="text-green-300 text-sm">NLP, Groq, Llama 3.1</p>
                  <ul className="list-disc pl-5 mt-2 text-green-300">
                    <li>Personal assistant with langchain that retains memory from previous conversations</li>
                    <li>Combined APIs from Groq for LLMs and Deepgram for text-to-speech</li>
                  </ul>
                </div>

                <div className="border border-green-700 p-4 rounded">
                  <h3 className="text-green-400 font-bold">Mitsuki</h3>
                  <p className="text-green-300 italic">January 2024 - February 2024</p>
                  <p className="text-green-300 text-sm">Python, Streamlit, Llama 2.70b, NLP</p>
                  <ul className="list-disc pl-5 mt-2 text-green-300">
                    <li>Trained Llama 2 with custom datasets for chatbot personality</li>
                    <li>Deployed chatbot with Streamlit and implemented GitHub OAuth</li>
                  </ul>
                </div>

                <div className="border border-green-700 p-4 rounded">
                  <h3 className="text-green-400 font-bold">Other Notable Projects</h3>
                  <ul className="list-disc pl-5 mt-2 text-green-300">
                    <li>
                      <span className="font-bold">Trained YoloV4-Tiny:</span> Custom model using AyamBawang dataset (300
                      labeled images)
                    </li>
                    <li>
                      <span className="font-bold">emotionDetector:</span> ML model recognizing human emotions
                    </li>
                    <li>
                      <span className="font-bold">Digital Mouse With Hand Recognition:</span> ML model for gesture-based
                      mouse control
                    </li>
                    <li>
                      <span className="font-bold">WaifuAI:</span> AI Assistant using CharacterAI API and Google
                      text-to-speech
                    </li>
                    <li>
                      <span className="font-bold">SEA Countries Education Analysis:</span> Data visualization using
                      Kaggle datasets
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeSection === "skills" && (
            <div>
              <h2 className="text-lg text-cyan-300 font-bold mb-2">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-green-700 p-3 rounded">
                  <h3 className="text-green-400 font-bold">Languages</h3>
                  <ul className="list-disc pl-5 text-green-300">
                    <li>Rust</li>
                    <li>Python</li>
                    <li>C/C++</li>
                    <li>JavaScript</li>
                    <li>HTML/CSS</li>
                    <li>SQL</li>
                    <li>CUDA</li>
                  </ul>
                </div>
                <div className="border border-green-700 p-3 rounded">
                  <h3 className="text-green-400 font-bold">Developer Tools</h3>
                  <ul className="list-disc pl-5 text-green-300">
                    <li>Git</li>
                    <li>Jupyter Notebooks</li>
                    <li>Google Colab</li>
                    <li>VS Code</li>
                    <li>Visual Studio</li>
                    <li>Kaggle</li>
                    <li>Ubuntu 22.04</li>
                    <li>neovim/vim</li>
                  </ul>
                </div>
                <div className="border border-green-700 p-3 rounded">
                  <h3 className="text-green-400 font-bold">Libraries & Frameworks</h3>
                  <ul className="list-disc pl-5 text-green-300">
                    <li>pandas</li>
                    <li>NumPy</li>
                    <li>Matplotlib</li>
                    <li>OpenCV</li>
                    <li>ROS/ROS2</li>
                    <li>YOLO Architecture</li>
                  </ul>
                </div>
                <div className="border border-green-700 p-3 rounded">
                  <h3 className="text-green-400 font-bold">Areas of Expertise</h3>
                  <ul className="list-disc pl-5 text-green-300">
                    <li>Machine Learning</li>
                    <li>Computer Vision</li>
                    <li>Robotics</li>
                    <li>Autonomous Systems</li>
                    <li>Natural Language Processing</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeSection === "certificates" && (
            <div>
              <h2 className="text-lg text-cyan-300 font-bold mb-2">Certificates</h2>
              <div className="border border-green-700 p-4 rounded">
                <ul className="list-disc pl-5 text-green-300">
                  <li>IBM Certified Applied AI Professional</li>
                  <li>Google Advanced Data Analytics</li>
                  <li>Google Foundations of Data Science</li>
                  <li>Google Get Started With Python</li>
                  <li>Google Advanced Data Analytics Capstone</li>
                  <li>Google Go Beyond the Numbers: Translate Data into Insights</li>
                  <li>Google Regression Analysis: Simplify Complex Data Relationships</li>
                  <li>Google The Nuts and Bolts of Machine Learning</li>
                  <li>Google The Power of Statistics</li>
                  <li>Sololearn Python Intermediate</li>
                  <li>Udemy Web Developer Bootcamp</li>
                </ul>
              </div>
            </div>
          )}

          {activeSection === "contact" && (
            <div>
              <h2 className="text-lg text-cyan-300 font-bold mb-2">Contact</h2>
              <div className="space-y-3 text-green-300">
                <p>
                  <span className="text-green-400 font-bold">Phone:</span> +62 8956 0502 1916
                </p>
                <p>
                  <span className="text-green-400 font-bold">Email:</span> ryanadi001@gmail.com
                </p>
                <p>
                  <span className="text-green-400 font-bold">LinkedIn:</span> linkedin.com/ryan-adidaru
                </p>
                <p>
                  <span className="text-green-400 font-bold">GitHub:</span> github.com/coolcmyk
                </p>

                <div className="mt-6 p-4 border border-green-700 rounded bg-black/30">
                  <h3 className="text-green-400 font-bold mb-2">Send a Message</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-green-400 mb-1">Name</label>
                      <input
                        type="text"
                        className="w-full bg-black border border-green-700 text-green-300 p-2 rounded focus:border-green-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-green-400 mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full bg-black border border-green-700 text-green-300 p-2 rounded focus:border-green-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-green-400 mb-1">Message</label>
                      <textarea className="w-full bg-black border border-green-700 text-green-300 p-2 rounded focus:border-green-500 focus:outline-none h-24"></textarea>
                    </div>
                    <button className="px-4 py-2 bg-green-700 text-green-100 rounded hover:bg-green-600">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
