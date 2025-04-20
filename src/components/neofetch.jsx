/**
 * @typedef {Object} NeofetchProps
 * @property {string} machineName
 */

/**
 * Neofetch component that displays system information
 * @param {NeofetchProps} props
 */
export function Neofetch({ machineName }) {
    // Get current date for uptime simulation
    const currentDate = new Date()
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
  
    // Browser info
    const userAgent = navigator.userAgent
    const browserInfo = userAgent.includes("Chrome")
      ? "Chrome"
      : userAgent.includes("Firefox")
        ? "Firefox"
        : userAgent.includes("Safari")
          ? "Safari"
          : "Unknown Browser"
  
    return (
      <div className="flex flex-col md:flex-row gap-4 py-2 font-mono text-green-300">
        <pre className="text-blue-400 whitespace-pre">
          {`                   -\`                    
                    .o+\`                   visitor@${machineName}
                   \`ooo/                   ---------------
                  \`+oooo:                  OS: Arch Linux x86_64
                 \`+oooooo:                 Host: Terminal v1.0
                 -+oooooo+:                Kernel: 6.4.0-arch1
               \`/:-:++oooo+:               Uptime: ${hours}h ${minutes}m
              \`/++++/+++++++:              Packages: 1432
             \`/++++++++++++++:             Shell: bash 5.1.16
            \`/+++ooooooooooooo/\`           Resolution: ${window.innerWidth}x${window.innerHeight}
           ./ooosssso++osssssso+\`          DE: Custom Terminal
          .oossssso-\`\`\`\`/ossssss+\`         WM: JavaScript
         -osssssso.      :ssssssso.        WM Theme: Vintage Anime
        :osssssss/        osssso+++.       Terminal: Web Terminal
       /ossssssss/        +ssssooo/-       CPU: JavaScript V8
     \`/ossssso+/:-        -:/+osssso+-     Memory: ${Math.round(performance.memory ? performance.memory.usedJSHeapSize / 1048576 : 128)} MiB / ${Math.round(performance.memory ? performance.memory.jsHeapSizeLimit / 1048576 : 2048)} MiB
    \`+sso+:-\`                 \`.-/+oso:    Browser: ${browserInfo}
   \`++:.                           \`-/+/   
   .\`                                 \`/   `}
        </pre>
        <div className="flex flex-col justify-center">
          <div className="grid grid-cols-8 gap-1">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-sm ${
                  i < 2
                    ? "bg-black"
                    : i < 4
                      ? "bg-red-500"
                      : i < 6
                        ? "bg-green-500"
                        : i < 8
                          ? "bg-yellow-400"
                          : i < 10
                            ? "bg-blue-500"
                            : i < 12
                              ? "bg-purple-500"
                              : i < 14
                                ? "bg-cyan-400"
                                : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
  