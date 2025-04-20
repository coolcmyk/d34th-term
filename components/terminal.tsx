"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { TerminalInput } from "./terminal-input"
import { TerminalOutput } from "./terminal-output"
import { Portfolio } from "./portfolio"

type Command = {
  input: string
  output: React.ReactNode
}

type TerminalProps = {
  machineName: string
  initialDirectory: string
  portfolioDirectory: string
}

export function Terminal({ machineName, initialDirectory, portfolioDirectory }: TerminalProps) {
  const [currentDirectory, setCurrentDirectory] = useState(initialDirectory)
  const [commands, setCommands] = useState<Command[]>([])
  const [showPortfolio, setShowPortfolio] = useState(false)
  const terminalRef = useRef<HTMLDivElement>(null)

  const availableCommands = ["help", "ls", "cd", "clear", "whoami", "date", "echo", "cat", "exit"]

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

  const handleCommand = (input: string) => {
    const trimmedInput = input.trim()
    const args = trimmedInput.split(" ")
    const command = args[0].toLowerCase()

    let output: React.ReactNode = `Command not found: ${command}. Type 'help' for available commands.`

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
              <p>projects.txt</p>
              <p>skills.txt</p>
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

      case "clear":
        setCommands([])
        return

      case "whoami":
        output = <p className="text-green-300">visitor@{machineName}</p>
        break

      case "date":
        output = <p className="text-green-300">{new Date().toString()}</p>
        break

      case "echo":
        output = <p className="text-green-300">{args.slice(1).join(" ")}</p>
        break

      case "cat":
        if (currentDirectory === `~/${portfolioDirectory}`) {
          if (args[1] === "about.txt") {
            output = (
              <div className="py-1 text-green-300">
                <p className="text-cyan-300 font-bold">About Me</p>
                <p>I am a developer with a passion for creating unique digital experiences.</p>
                <p>My background includes web development, design, and cybersecurity.</p>
              </div>
            )
          } else if (args[1] === "projects.txt") {
            output = (
              <div className="py-1 text-green-300">
                <p className="text-cyan-300 font-bold">Projects</p>
                <p>• Secure Authentication System</p>
                <p>• E-commerce Platform</p>
                <p>• Data Visualization Dashboard</p>
                <p>• Mobile App for Fitness Tracking</p>
              </div>
            )
          } else if (args[1] === "skills.txt") {
            output = (
              <div className="py-1 text-green-300">
                <p className="text-cyan-300 font-bold">Skills</p>
                <p>• Frontend: React, Next.js, Vue</p>
                <p>• Backend: Node.js, Python, Go</p>
                <p>• Database: PostgreSQL, MongoDB</p>
                <p>• DevOps: Docker, AWS, CI/CD</p>
              </div>
            )
          } else if (args[1] === "contact.txt") {
            output = (
              <div className="py-1 text-green-300">
                <p className="text-cyan-300 font-bold">Contact</p>
                <p>Email: kyomoto@example.com</p>
                <p>GitHub: github.com/kyomoto</p>
                <p>LinkedIn: linkedin.com/in/kyomoto</p>
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
    return `visitor@${machineName}:${currentDirectory}$ `
  }

  return (
    <div className="w-full max-w-4xl h-[80vh] bg-black border border-green-500 rounded-md overflow-hidden flex flex-col">
      <div className="bg-green-900 px-4 py-1 text-green-100 font-mono flex justify-between items-center">
        <div>{machineName} - Terminal</div>
        <div className="flex gap-2">
          <button className="w-3 h-3 bg-yellow-400 rounded-full"></button>
          <button className="w-3 h-3 bg-red-500 rounded-full"></button>
        </div>
      </div>

      <div ref={terminalRef} className="flex-1 p-4 font-mono text-green-400 overflow-y-auto">
        {showPortfolio ? <Portfolio onClose={() => setShowPortfolio(false)} /> : <TerminalOutput commands={commands} />}
      </div>

      {!showPortfolio && (
        <div className="p-2 border-t border-green-800">
          <TerminalInput prompt={getPrompt()} onSubmit={handleCommand} />
        </div>
      )}
    </div>
  )
}
