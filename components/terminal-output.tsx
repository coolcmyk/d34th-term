import type React from "react"

type Command = {
  input: string
  output: React.ReactNode
}

type TerminalOutputProps = {
  commands: Command[]
}

export function TerminalOutput({ commands }: TerminalOutputProps) {
  return (
    <div className="space-y-1">
      {commands.map((command, index) => (
        <div key={index}>
          {command.input && (
            <div className="flex">
              <span className="text-green-400">visitor@d34th:~$ </span>
              <span className="text-green-300">{command.input}</span>
            </div>
          )}
          <div className="ml-0">{command.output}</div>
        </div>
      ))}
    </div>
  )
}
