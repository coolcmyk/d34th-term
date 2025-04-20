/**
 * @typedef {Object} Command
 * @property {string} input
 * @property {React.ReactNode} output
 */

/**
 * @typedef {Object} TerminalOutputProps
 * @property {Command[]} commands
 */

/**
 * Component to display terminal output history
 * @param {TerminalOutputProps} props
 */
export function TerminalOutput({ commands }) {
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
