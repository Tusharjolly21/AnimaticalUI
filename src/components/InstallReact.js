import { Copy } from "lucide-react"

export default function InstallReact() {
  return (
    <div className="w-full lg:ml-20">
      <div className="space-y-2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">Install React.js with Vite</h1>
        <p className="text-base sm:text-lg text-muted-foreground">Install React.js with Create React App</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Create a new project</h2>
        <div className="relative">
          <div className="bg-zinc-950 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm text-zinc-100 overflow-x-auto">
            <button
              size="icon"
              variant="ghost"
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-zinc-400 hover:text-zinc-100"
            >
              <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>
            <pre>
              <code>
                <span className="text-zinc-500">npm </span>{" "}
                <span className="text-green-400">create vite@latest my-react-app --template</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">On installation, you&apos;ll see the following prompts:</h2>
        <div className="relative">
          <div className="bg-zinc-950 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm text-zinc-100 overflow-x-auto">
            <button
              size="icon"
              variant="ghost"
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-zinc-400 hover:text-zinc-100"
            >
              <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>
            <pre>
              <code>
                <span className="text-zinc-500">Vanilla</span>
                <br/>
                <span className="text-green-400">React</span>
                <br/>
                <span className="text-zinc-500">Vue</span>
                <br/>
                <span className="text-zinc-500">Preact</span>
                <br/>
                <span className="text-zinc-500">Lit</span>
                <br/>
                <span className="text-zinc-500">Svelte</span>
                <br/>
                <span className="text-zinc-500">Solid</span>
                <br/>
                <span className="text-zinc-500">Qwik</span>
                <br/>
                <span className="text-zinc-500">Others</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Then, you&apos;ll see the following prompts:</h2>
        <div className="relative">
          <div className="bg-zinc-950 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm text-zinc-100 overflow-x-auto">
            <button
              size="icon"
              variant="ghost"
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-zinc-400 hover:text-zinc-100"
            >
              <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>
            <pre>
              <code>
                <span className="text-zinc-500">TypeScript</span>
                <br/>
                <span className="text-green-400">JavaScript</span>
                <br/>
                <span className="text-zinc-500">TypeScript + SWC</span>
                <br/>
                <span className="text-zinc-500">JavaScript + SWC</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Start the app</h2>
        <div className="relative">
          <div className="bg-zinc-950 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm text-zinc-100 overflow-x-auto">
            <button
              size="icon"
              variant="ghost"
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-zinc-400 hover:text-zinc-100"
            >
              <Copy className="h-3 w-3 sm:h-4 sm:w-4" />
            </button>
            <pre>
              <code>
                <span className="text-zinc-500">cd</span> my-react-app
                <br />
                <span className="text-zinc-500">npm</span>{" "}
                <span className="text-green-400">start</span>{" "}
              </code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  )
}