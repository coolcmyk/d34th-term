"use client"

import { useState, useRef, useEffect } from "react"

/**
 * @typedef {Object} TerminalInputProps
 * @property {string} prompt
 * @property {(command: string) => void} onSubmit
 */

/**
 * Terminal input component with a blinking cursor at the current typing position
 * @param {TerminalInputProps} props
 */
export function TerminalInput({ prompt, onSubmit }) {
  const [input, setInput] = useState("")
  const [cursorPosition, setCursorPosition] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(true)
  const inputRef = useRef(null)
  const containerRef = useRef(null)

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

  // Update cursor position when input changes
  useEffect(() => {
    if (inputRef.current) {
      setCursorPosition(inputRef.current.selectionStart || input.length)
    }
  }, [input])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(input)
    setInput("")
    setCursorPosition(0)
  }

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleKeyUp = (e) => {
    // Update cursor position on any key event (including arrows)
    if (inputRef.current) {
      setCursorPosition(inputRef.current.selectionStart || 0)
    }
  }

  const handleMouseUp = () => {
    // Update cursor position on mouse selection
    if (inputRef.current) {
      setCursorPosition(inputRef.current.selectionStart || 0)
    }
  }

  return (
    <div className="flex items-center relative" onClick={handleClick} ref={containerRef}>
      <span className="text-green-400 whitespace-nowrap">{prompt}</span>
      <div className="relative flex-1">
        <form onSubmit={handleSubmit} className="relative">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyUp={handleKeyUp}
            onMouseUp={handleMouseUp}
            onSelect={handleMouseUp}
            className="w-full bg-transparent text-green-400 outline-none caret-transparent"
            autoFocus
          />
        </form>

        {/* Render text before cursor */}
        <div
          className="absolute top-0 left-0 text-green-400 pointer-events-none select-none"
          style={{
            visibility: "hidden",
            position: "absolute",
            whiteSpace: "pre",
          }}
        >
          {input.substring(0, cursorPosition)}
        </div>

        {/* Blinking cursor at the correct position */}
        <div
          className={`absolute top-0 h-5 w-2 bg-green-400 pointer-events-none ${cursorVisible ? "opacity-100" : "opacity-0"}`}
          style={{
            left: `${inputRef.current ? inputRef.current.selectionStart * 0.6 : 0}em`,
            transition: "opacity 0.1s",
          }}
        ></div>
      </div>
    </div>
  )
}
