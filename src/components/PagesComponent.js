import { ArrowRight, Users, Paintbrush, Code } from "lucide-react"
import myImage from '../assets/photo1.png';
import {Link} from "react-router-dom"
import myImage1 from "../assets/photo3.png"

export default function PagesComponent() {
  return (
    <>
    <div className="container mx-auto px-4 py-12 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Animatical-UI</h2>
          <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">
            Modern UI components,{" "}
            <span className="text-gray-800">crafted with React and Tailwind CSS.</span>
          </h1>

          <div className="flex items-center gap-4 my-6">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#61DAFB]" fill="currentColor">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
              </svg>
              <span className="font-semibold">React</span>
            </div>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 54 33" className="w-8 h-8 text-[#06B6D4]" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" />
              </svg>
              <span className="font-semibold">Tailwind CSS</span>
            </div>
          </div>

          <p className="text-xl text-gray-600 max-w-2xl">
            Visually-stunning, easy to customize UI components built with React and styled with Tailwind CSS.
            The perfect starting point for your next project and the ultimate resource for
            creating beautiful, responsive user interfaces.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/components">
            <button className="h-12 px-6 bg-blue-600 rounded-lg text-white" variant="default">
              Explore components
            </button>
            </Link>
          </div>
        </div>

        <div className="relative">
          <img
            src={myImage}
            alt="Website templates preview"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-12 mt-24">
        <div className="p-6 space-y-4">
          <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
            <Code className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold">Built with modern technologies</h3>
          <p className="text-gray-600">
            Each template is a well-structured Next.js project, giving you a codebase that's productive and
            enjoyable to work in.
          </p>
        </div>

        <div className="p-6 space-y-4">
          <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
            <Paintbrush className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold">Easy to customize</h3>
          <p className="text-gray-600">
            Everything is styled with utility classes, just open the markup in your editor and change whatever
            you want.
          </p>
        </div>

        <div className="p-6 space-y-4">
          <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
            <Users className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold">Built by experts</h3>
          <p className="text-gray-600">
            All of the code follows Tailwind CSS best practices, because it's written by the same team who created
            and maintain the framework.
          </p>
        </div>
      </div>
    </div>
    <div className="px-4 py-12 md:py-24 lg:py-32 max-w-7xl mx-auto">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-start">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Landing Page</h1>
          <p className="text-xl text-muted-foreground">Application UI Kit</p>
          <p className="text-gray-500 dark:text-gray-400 max-w-[600px]">
          Modern Landing Page UI components to kickstart your design system.
          </p>
          <div className="flex items-center gap-2">
          </div>
        </div>
        <div className="grid gap-4 lg:gap-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative group overflow-hidden rounded-lg border bg-background p-2">
            <Link
                  to="/pages/landing-page"
                  className="block overflow-hidden rounded-2xl border bg-white shadow-sm transition-transform hover:scale-105"
                >
                  <img
                    src={myImage1}
                    alt='LandingPage'
                    className="w-full object-cover"
                  />
                </Link>
            </div>
            <div className="relative group overflow-hidden rounded-lg border bg-background p-2">
            <Link
                  to="/pages/landing-page"
                  className="block overflow-hidden rounded-2xl border bg-white shadow-sm transition-transform hover:scale-105"
                >
                  <img
                    src={myImage1}
                    alt='LandingPage'
                    className="w-full object-cover"
                  />
                </Link>
            </div>
            <div className="relative group overflow-hidden rounded-lg border bg-background p-2">
               <Link
                  to="/pages/landing-page"
                  className="block overflow-hidden rounded-2xl border bg-white shadow-sm transition-transform hover:scale-105"
                >
                  <img
                    src={myImage1}
                    alt='LandingPage'
                    className="w-full object-cover"
                  />
                </Link>
                </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}