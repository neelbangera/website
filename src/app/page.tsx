import HobbyItem from "@/components/HobbyItem";
import ProjectCard from "@/components/ProjectCard";

import { IoMdBook } from "react-icons/io";
import { CiFootball } from "react-icons/ci";
import { PiPersonSimpleRun } from "react-icons/pi";
import { TbTorii } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { ExternalLink } from "lucide-react";
import { MdGamepad } from "react-icons/md";
import { MdCode, MdWeb } from "react-icons/md";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="max-4xl mx-auto px-4 py-30 text-center">
        <div className="text-yellow-400 text-lg mb-4 font-mono">
          Hello, world!
        </div>
        <h1 className="text-5xl font-bold text-white mb-6">I&apos;m Neel Bangera</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          This is my website
        </p>
        <a
          href="#about"
          className="inline-flex intems-center text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer"
        >
          <span>Scroll to explore</span>
          <ChevronDown className="ml-2 w-5 h-5 animate-bounce" />
        </a>
      </div>
      <section className="py-20 px-4" id="about">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border--yellow-500">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-left mb-8 text-gray-200">
                  About Me
                </h2>
                <div className="flex items-center space-x-6">
                  <img
                    src="/seal.png"
                    alt="University of Michigan Seal"
                    className="w-24 h-24 rounded-full"
                  />
                  <p className="text-lg text-white pr-5">
                    I am a computer science student at the University of
                    Michigan. I am passionate about improving myself and my
                    skills.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-left mb-8 text-gray-200">
                  Contact
                </h2>
                <div className="space-y-4">
                  <a
                    target="_blank"
                    href="https://github.com/neelbangera"
                    className="flex items-center space-x-2 p-3 rounded-lg bg-gray-700/50 border border-transparent hover:border-yellow-400 hover:bg-gray-700 transition-colors"
                  >
                    <FaGithub />
                    <span className="text-white"> Github</span>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/neel-bangera-51b5a427a/"
                    className="flex items-center space-x-2 p-3 rounded-lg bg-gray-700/50 border border-transparent hover:border-yellow-400 hover:bg-gray-700 transition-colors"
                  >
                    <CiLinkedin />
                    <span className="text-white"> LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-900" id="projects">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-left mb-12 text-gray-200">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg grid-cols-3 gap-6">
            <ProjectCard
              title="Portfolio Website"
              description="A personal  website featuring a dark theme"
              technologies={[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "React",
                "Vercel",
              ]}
              githubUrl="https://github.com/neelbangera/website"
              icon={MdWeb}
            />
            <ProjectCard
              title="Connect Four"
              description="A online version of the game Connect Four with working single and two player."
              technologies={["Javascript", "CSS", "HTML", "GitHub"]}
              icon={MdGamepad}
            />
          </div>
        </div>
      </section>
      <section className="px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
            <div className="bg-gray-900 px-4 py-3 flex items-center space-x-2 border-b border-gray-700">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="text-green-400 mb-2">
                neel@Neels-MacBook-Air ~{" "}
                <span className="text-blue-400">ls</span>{" "}
                <span className="text-white">upcoming_projects</span>
              </div>
              <div className="text-gray-300 mb-4">
                <div className="flex items-center-space-x-2">
                  <span className="text-yellow-400">📁</span>
                  <span>daily-productivity-log</span>
                </div>
              </div>
              <div className="text-green-400 mb-2">
                neel@Neels-MacBook-Air ~
                <span className="text-white mb-4"> Stay tuned for more!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-left mb-12 text-slate-200">
            Hobbies
          </h2>
          <div className="bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12 border border-slate-500">
            <div className="grid md:grid-cols-2 gap-6">
              <HobbyItem
                icon={PiPersonSimpleRun}
                name="Running"
                details="1M 4:44 • 2M 10:07 • 5K 16:56"
              />

              <HobbyItem
                icon={IoMdBook}
                name="Reading"
                details={
                  "Designing Data Intensive Applications • Code: The Hidden Language of Computers"
                }
              />
              <HobbyItem
                icon={CiFootball}
                name="Football"
                details="Detroit Lions • Michigan Wolverines • Go Blue!"
              />

              <HobbyItem
                icon={TbTorii}
                name="Manga"
                details="Dragon Ball • Bleach • Naruto"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
