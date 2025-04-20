"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

type TerminalInputProps = {
  prompt: string
  onSubmit: (command: string) => void
}

export function TerminalInput({ prompt, onSubmit }: TerminalInputProps) {
  const [input, setInput] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Focus input when component mounts
    if (inputRef.current) {
      inputRef.current.focus()
    }

    // Blinking cursor effect
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(input)
    setInput("")
  }

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className="flex items-center" onClick={handleClick}>
      <span className="text-green-400 whitespace-nowrap">{prompt}</span>
      <form onSubmit={handleSubmit} className="flex-1">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-transparent text-green-400 outline-none caret-transparent"
          autoFocus
        />
      </form>
      <span className={`w-2 h-5 bg-green-400 ml-0.5 ${cursorVisible ? "opacity-100" : "opacity-0"}`}></span>
    </div>
  )
}
