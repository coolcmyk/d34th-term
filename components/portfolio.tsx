"use client"

import { useState } from "react"

type PortfolioProps = {
  onClose: () => void
}

export function Portfolio({ onClose }: PortfolioProps) {
  const [activeSection, setActiveSection] = useState("about")

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-4 border-b border-green-700 pb-2">
        <h1 className="text-xl text-cyan-300 font-bold">Kyomoto's Portfolio</h1>
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
                <p>Greetings, I am Kyomoto.</p>
                <p>
                  I am a developer with a passion for creating unique digital experiences that blend functionality with
                  creative design.
                </p>
                <p>
                  My background includes web development, UI/UX design, and cybersecurity, allowing me to create secure
                  and engaging applications.
                </p>
                <p>
                  I specialize in creating immersive digital experiences that push the boundaries of conventional web
                  design while maintaining usability and performance.
                </p>
              </div>
            </div>
          )}

          {activeSection === "projects" && (
            <div>
              <h2 className="text-lg text-cyan-300 font-bold mb-2">Projects</h2>
              <div className="space-y-4">
                <div className="border border-green-700 p-3 rounded">
                  <h3 className="text-green-400 font-bold">Secure Authentication System</h3>
                  <p className="text-green-300">
                    A zero-knowledge proof authentication system that ensures user privacy while maintaining high
                    security standards.
                  </p>
                  <p className="text-green-400 mt-1">Technologies: React, Node.js, Cryptography</p>
                </div>
                <div className="border border-green-700 p-3 rounded">
                  <h3 className="text-green-400 font-bold">E-commerce Platform</h3>
                  <p className="text-green-300">
                    A fully-featured e-commerce solution with real-time inventory management and analytics dashboard.
                  </p>
                  <p className="text-green-400 mt-1">Technologies: Next.js, PostgreSQL, Redis</p>
                </div>
                <div className="border border-green-700 p-3 rounded">
                  <h3 className="text-green-400 font-bold">Data Visualization Dashboard</h3>
                  <p className="text-green-300">
                    Interactive data visualization tool that transforms complex datasets into intuitive visual
                    representations.
                  </p>
                  <p className="text-green-400 mt-1">Technologies: D3.js, Vue, Python</p>
                </div>
                <div className="border border-green-700 p-3 rounded">
                  <h3 className="text-green-400 font-bold">Mobile Fitness Tracker</h3>
                  <p className="text-green-300">
                    Cross-platform mobile application for tracking fitness activities with social features and
                    personalized recommendations.
                  </p>
                  <p className="text-green-400 mt-1">Technologies: React Native, Firebase, TensorFlow</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === "skills" && (
            <div>
              <h2 className="text-lg text-cyan-300 font-bold mb-2">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-green-700 p-3 rounded">
                  <h3 className="text-green-400 font-bold">Frontend</h3>
                  <ul className="list-disc pl-5 text-green-300">
                    <li>React & Next.js</li>
                    <li>Vue.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Three.js & WebGL</li>
                  </ul>
                </div>
                <div className="border border-green-700 p-3 rounded">
                  <h3 className="text-green-400 font-bold">Backend</h3>
                  <ul className="list-disc pl-5 text-green-300">
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>Go</li>
                    <li>GraphQL</li>
                    <li>RESTful APIs</li>
                  </ul>
                </div>
                <div className="border border-green-700 p-3 rounded">
                  <h3 className="text-green-400 font-bold">Database</h3>
                  <ul className="list-disc pl-5 text-green-300">
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>Redis</li>
                    <li>Firebase</li>
                    <li>SQL & NoSQL</li>
                  </ul>
                </div>
                <div className="border border-green-700 p-3 rounded">
                  <h3 className="text-green-400 font-bold">DevOps & Tools</h3>
                  <ul className="list-disc pl-5 text-green-300">
                    <li>Docker & Kubernetes</li>
                    <li>AWS & Vercel</li>
                    <li>CI/CD Pipelines</li>
                    <li>Git & GitHub</li>
                    <li>Linux Systems</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeSection === "contact" && (
            <div>
              <h2 className="text-lg text-cyan-300 font-bold mb-2">Contact</h2>
              <div className="space-y-3 text-green-300">
                <p>
                  <span className="text-green-400 font-bold">Email:</span> kyomoto@example.com
                </p>
                <p>
                  <span className="text-green-400 font-bold">GitHub:</span> github.com/kyomoto
                </p>
                <p>
                  <span className="text-green-400 font-bold">LinkedIn:</span> linkedin.com/in/kyomoto
                </p>
                <p>
                  <span className="text-green-400 font-bold">Twitter:</span> @kyomoto_dev
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
