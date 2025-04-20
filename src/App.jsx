import { Terminal } from "./components/terminal"
import { CrtEffect } from "./components/crt-effect"

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-4 vintage-background">
      <CrtEffect>
        <Terminal machineName="d34th" initialDirectory="~" portfolioDirectory="kyo" />
      </CrtEffect>
    </main>
  )
}

export default App
