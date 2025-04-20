"use client"

import { useState, useEffect, useRef } from "react"
import { TerminalInput } from "./terminal-input"
import { TerminalOutput } from "./terminal-output"
import { Portfolio } from "./portfolio"
import { Neofetch } from "./neofetch"

/**
 * @typedef {Object} Command
 * @property {string} input
 * @property {React.ReactNode} output
 */

/**
 * @typedef {Object} TerminalProps
 * @property {string} machineName
 * @property {string} initialDirectory
 * @property {string} portfolioDirectory
 */

/**
 * Terminal component that simulates a command line interface
 * @param {TerminalProps} props
 */
export function Terminal({ machineName, initialDirectory, portfolioDirectory }) {
  const [currentDirectory, setCurrentDirectory] = useState(initialDirectory)
  const [commands, setCommands] = useState([])
  const [showPortfolio, setShowPortfolio] = useState(false)
  const terminalRef = useRef(null)

  const availableCommands = [
    "help",
    "ls",
    "cd",
    "clear",
    "whoami",
    "date",
    "echo",
    "cat",
    "portfolio",
    "neofetch",
    "htop",
    "exit",
  ]

  useEffect(() => {
    // Initial boot sequence
    const bootSequence = [
      { input: "", output: "Initializing system..." },
      { input: "", output: "Loading kernel modules..." },
      { input: "", output: "Starting services..." },
      { input: "", output: `Welcome to ${machineName} terminal. Type 'help' for available commands.` },
    ]

    setCommands(bootSequence)

    // Auto-scroll to bottom when commands change
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [machineName])

  useEffect(() => {
    // Auto-scroll to bottom when commands change
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commands])

  const handleCommand = (input) => {
    const trimmedInput = input.trim()
    const args = trimmedInput.split(" ")
    const command = args[0].toLowerCase()

    let output = `Command not found: ${command}. Type 'help' for available commands.`

    // Process commands
    switch (command) {
      case "help":
        output = (
          <div className="py-1">
            <p className="text-green-400">Available commands:</p>
            <ul className="pl-4">
              {availableCommands.map((cmd) => (
                <li key={cmd} className="text-green-300">
                  • {cmd}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-green-400">Navigate to '{portfolioDirectory}' to view the portfolio.</p>
          </div>
        )
        break

      case "ls":
        if (currentDirectory === "~") {
          output = (
            <div className="py-1 text-green-300">
              <p>Documents</p>
              <p>Downloads</p>
              <p className="text-cyan-300">{portfolioDirectory}</p>
            </div>
          )
        } else if (currentDirectory === `~/${portfolioDirectory}`) {
          output = (
            <div className="py-1 text-green-300">
              <p>about.txt</p>
              <p>education.txt</p>
              <p>experience.txt</p>
              <p>projects.txt</p>
              <p>skills.txt</p>
              <p>certificates.txt</p>
              <p>contact.txt</p>
            </div>
          )
        } else {
          output = <p className="text-green-300">No files found in this directory.</p>
        }
        break

      case "cd":
        if (!args[1] || args[1] === "~") {
          setCurrentDirectory("~")
          setShowPortfolio(false)
          output = <p className="text-green-300">Changed directory to ~</p>
        } else if (args[1] === portfolioDirectory && currentDirectory === "~") {
          setCurrentDirectory(`~/${portfolioDirectory}`)
          output = <p className="text-green-300">Changed directory to ~/{portfolioDirectory}</p>
        } else if (args[1] === ".." && currentDirectory === `~/${portfolioDirectory}`) {
          setCurrentDirectory("~")
          setShowPortfolio(false)
          output = <p className="text-green-300">Changed directory to ~</p>
        } else {
          output = <p className="text-red-400">Directory not found: {args[1]}</p>
        }
        break

      case "htop":
        output = (
          <div className="py-1 text-green-300">
            <p className="text-cyan-300 font-bold">htop - System Monitor</p>
            <div className="mt-2">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="px-2 py-1">PID</th>
                    <th className="px-2 py-1">USER</th>
                    <th className="px-2 py-1">CPU%</th>
                    <th className="px-2 py-1">MEM%</th>
                    <th className="px-2 py-1">COMMAND</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-2 py-1">1234</td>
                    <td className="px-2 py-1">kyo</td>
                    <td className="px-2 py-1">25.3</td>
                    <td className="px-2 py-1">12.4</td>
                    <td className="px-2 py-1">node</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1">5678</td>
                    <td className="px-2 py-1">netlab</td>
                    <td className="px-2 py-1">15.8</td>
                    <td className="px-2 py-1">8.9</td>
                    <td className="px-2 py-1">fix alibaba</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1">9101</td>
                    <td className="px-2 py-1">root</td>
                    <td className="px-2 py-1">5.2</td>
                    <td className="px-2 py-1">3.1</td>
                    <td className="px-2 py-1">visitor</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1">1123</td>
                    <td className="px-2 py-1">kyo</td>
                    <td className="px-2 py-1">2.1</td>
                    <td className="px-2 py-1">1.5</td>
                    <td className="px-2 py-1">htop</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-4">
                <p>CPU Usage: ████████░░░░░░ 40%</p>
                <p>Memory Usage: ██████░░░░░░░ 60%</p>
                <p>Swap Usage: █░░░░░░░░░░░░░ 10%</p>
                <p>Tasks: 120 total, 2 running</p>
                <p>Load Average: 0.75, 0.60, 0.50</p>
                <p>Uptime: 2 hours, 15 minutes</p>
              </div>
            </div>
          </div>
        )
        break

      case "clear":
        setCommands([])
        return

      case "whoami":
        output = <p className="text-green-300">ryan@{machineName}</p>
        break

      case "date":
        output = <p className="text-green-300">{new Date().toString()}</p>
        break

      case "echo":
        output = <p className="text-green-300">{args.slice(1).join(" ")}</p>
        break

      case "neofetch":
        output = <Neofetch machineName={machineName} />
        break

      case "cat":
        if (currentDirectory === `~/${portfolioDirectory}`) {
          if (args[1] === "about.txt") {
            output = (
              <div className="py-1 text-green-300">
                <p className="text-cyan-300 font-bold">About Me</p>
                <p>I'm Ryan Adidaru, a Computer Engineering student at the University of Indonesia.</p>
                <p>I specialize in AI, robotics, computer vision, and machine learning with experience in various programming languages.</p>
                <p>My passion lies in developing autonomous systems and AI applications that solve real-world problems.</p>
              </div>
            )
          } else if (args[1] === "education.txt") {
            output = (
              <div className="py-1 text-green-300">
                <p className="text-cyan-300 font-bold">Education</p>
                <p className="font-bold">University of Indonesia, Jakarta, Indonesia</p>
                <p>Bachelor of Engineering in Computer Engineering</p>
                <p>Expected Graduation: 2026</p>
              </div>
            )
          } else if (args[1] === "experience.txt") {
            output = (
              <div className="py-1 text-green-300">
                <p className="text-cyan-300 font-bold">Experience</p>
                
                <div className="mt-2">
                  <p className="font-bold">AI Staff of Autonomous Marine Vehicle</p>
                  <p>University of Indonesia, Jakarta, Indonesia</p>
                  <p>March 2024 - Present</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Developed Python and C++ scripts for Autonomous Navigation Algorithm in ROS2</li>
                    <li>Developed ROS2 package integrating robot components into a unified system</li>
                    <li>Developed custom datasets for YoloV8-YoloV11 models and trained with custom datasets</li>
                    <li>Currently developing ASV's robotic simulation platform using Unity3D with C# and ROS2</li>
                    <li>Developed Python script for image processing using OpenCV, improving accuracy to 85%</li>
                    <li>Explored GitHub collaboration in team settings</li>
                  </ul>
                </div>
                
                <div className="mt-4">
                  <p className="font-bold">Hardware Intern of EXERCISE FTUI</p>
                  <p>University of Indonesia, Jakarta, Indonesia</p>
                  <p>October 2023 - January 2024</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Developed IoT platform for mushroom cultivation producing temperature and humidity data</li>
                    <li>Developed software using linear regression to maintain mushrooms automatically</li>
                    <li>Enhanced software with AI Assistant models using character.ai API and Google text-to-speech</li>
                  </ul>
                </div>
              </div>
            )
          } else if (args[1] === "projects.txt") {
            output = (
              <div className="py-1 text-green-300">
                <p className="text-cyan-300 font-bold">Projects</p>
                
                <div className="mt-2">
                  <p className="font-bold">RoR — RewrittenOnRust | Rust, Machine Learning, Ollama, VectorDB (Qdrant)</p>
                  <p>March 2025 - Present</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Open-source project in Rust applying popular LLMs stack like RAG using Qdrant as VectorDB</li>
                    <li>Using Ollama as backend endpoint for LLM and Embedding models</li>
                  </ul>
                </div>
                
                <div className="mt-3">
                  <p className="font-bold">asvsim | Python, C++, C#, Unity</p>
                  <p>December 2024 - Present</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Forked and contributed to open-source ASV robotic simulation</li>
                    <li>Developing autonomous system to integrate with ROS2</li>
                  </ul>
                </div>
                
                <div className="mt-3">
                  <p className="font-bold">yolo.cpp | CUDA, C, C++, Neural Networks</p>
                  <p>July 2024 - December 2024</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Developed vision model from scratch using C++ with omp.h to maximize CPU usage</li>
                    <li>Added CUDA support for GPU optimization</li>
                  </ul>
                </div>
                
                <div className="mt-3">
                  <p className="font-bold">amadeus | NLP, Groq, Llama 3.1</p>
                  <p>July 2024 - Present</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Personal assistant with langchain that retains memory from previous conversations</li>
                    <li>Combined APIs from Groq for LLMs and Deepgram for text-to-speech</li>
                  </ul>
                </div>
                
                <div className="mt-3">
                  <p className="font-bold">Mitsuki | Python, Streamlit, Llama 2.70b, NLP</p>
                  <p>January 2024 - February 2024</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Trained Llama 2 with custom datasets for chatbot personality</li>
                    <li>Deployed chatbot with Streamlit and implemented GitHub OAuth</li>
                  </ul>
                </div>
                
                <div className="mt-3">
                  <p className="font-bold">Other Projects</p>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Trained YoloV4-Tiny with custom AyamBawang dataset (300 labeled images)</li>
                    <li>emotionDetector: ML model recognizing human emotions</li>
                    <li>Digital Mouse With Hand Recognition: ML model for gesture-based mouse control</li>
                    <li>WaifuAI: AI Assistant using CharacterAI API and Google text-to-speech</li>
                    <li>SEA Countries Education Analysis: Data visualization using Kaggle datasets</li>
                  </ul>
                </div>
              </div>
            )
          } else if (args[1] === "skills.txt") {
            output = (
              <div className="py-1 text-green-300">
                <p className="text-cyan-300 font-bold">Technical Skills</p>
                
                <div className="mt-2">
                  <p className="font-bold">Languages:</p>
                  <p>Rust, Python, C/C++, JavaScript, HTML/CSS, SQL, CUDA</p>
                </div>
                
                <div className="mt-3">
                  <p className="font-bold">Developer Tools:</p>
                  <p>Git, Jupyter Notebooks, Google Colab, VS Code, Visual Studio, Kaggle, Ubuntu 22.04, neovim, vim</p>
                </div>
                
                <div className="mt-3">
                  <p className="font-bold">Libraries & Frameworks:</p>
                  <p>pandas, NumPy, Matplotlib, OpenCV, ROS, ROS2, YOLO Architecture</p>
                </div>
                
                <div className="mt-3">
                  <p className="font-bold">Areas of Expertise:</p>
                  <p>Machine Learning, Computer Vision, Robotics, Autonomous Systems, Natural Language Processing</p>
                </div>
              </div>
            )
          } else if (args[1] === "certificates.txt") {
            output = (
              <div className="py-1 text-green-300">
                <p className="text-cyan-300 font-bold">Certificates</p>
                <ul className="list-disc pl-5 mt-1">
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
            )
          } else if (args[1] === "contact.txt") {
            output = (
              <div className="py-1 text-green-300">
                <p className="text-cyan-300 font-bold">Contact</p>
                <p><span className="text-green-400 font-bold">Phone:</span> +62 8956 0502 1916</p>
                <p><span className="text-green-400 font-bold">Email:</span> ryanadi001@gmail.com</p>
                <p><span className="text-green-400 font-bold">LinkedIn:</span> linkedin.com/ryan-adidaru</p>
                <p><span className="text-green-400 font-bold">GitHub:</span> github.com/coolcmyk</p>
              </div>
            )
          } else {
            output = <p className="text-red-400">File not found: {args[1]}</p>
          }
        } else {
          output = <p className="text-red-400">No such file or directory: {args[1]}</p>
        }
        break

      case "portfolio":
        if (currentDirectory === `~/${portfolioDirectory}`) {
          setShowPortfolio(true)
          output = <p className="text-green-300">Loading portfolio view...</p>
        } else {
          output = (
            <p className="text-red-400">Portfolio can only be viewed from the '{portfolioDirectory}' directory.</p>
          )
        }
        break

      case "exit":
        output = <p className="text-green-300">Closing session...</p>
        break

      case "":
        output = ""
        break
    }

    setCommands([...commands, { input: trimmedInput, output }])
  }

  const getPrompt = () => {
    return `ryan@${machineName}:${currentDirectory}$ `
  }

  return (
    <div className="w-full max-w-4xl h-[80vh] bg-black/80 rounded-md overflow-hidden flex flex-col mac-window">
      <div className="bg-gradient-to-b from-gray-200 to-gray-300 px-4 py-1 text-gray-800 font-sans flex justify-between items-center mac-titlebar">
        <div className="flex gap-2 items-center">
          <button className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600"></button>
          <button className="w-3 h-3 bg-yellow-400 rounded-full hover:bg-yellow-500"></button>
          <button className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600"></button>
        </div>
        <div className="text-center flex-1 text-sm font-medium">{machineName} - Terminal</div>
        <div className="w-16"></div> {/* Spacer for balance */}
      </div>

      <div ref={terminalRef} className="flex-1 p-4 font-mono text-green-400 overflow-y-auto terminal-content">
        {showPortfolio ? <Portfolio onClose={() => setShowPortfolio(false)} /> : <TerminalOutput commands={commands} />}
      </div>

      {!showPortfolio && (
        <div className="p-2 border-t border-gray-700/50">
          <TerminalInput prompt={getPrompt()} onSubmit={handleCommand} />
        </div>
      )}
    </div>
  )
}
