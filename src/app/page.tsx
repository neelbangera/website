import HobbyItem from "@/components/HobbyItem";
import { IoMdBook } from "react-icons/io";
import { CiFootball } from "react-icons/ci";
import { MdCode } from "react-icons/md";
import { PiPersonSimpleRun } from "react-icons/pi";
import { TbTorii } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";




export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          Hello <span className="animate-bounce text-4xl">👋</span>
        </h1>
      </div>
      <section className = "py-20 px-4">
        <div className = "max-w-5xl mx-auto">
          <div className="bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 border border--yellow-500">
            <div className = "grid md:grid-cols-2 gap-8">
              <div>
                <h2 className = "text-2xl font-bold text-left mb-8 text-gray-200">
                  About Me
                </h2>
                <div className= "flex items-center space-x-6">
                  <img
                    src="/seal.png"
                    alt="University of Michigan Seal"
                    className="w-24 h-24 rounded-full"
                  />   
                  <p className="text-lg text-white pr-5">
                    I am a computer science student at the University of Michigan Engineering. I am passionate about improving myself and my skills.
                  </p>
                </div>
              </div> 


              <div>
                <h2 className = "text-2xl font-bold text-left mb-8 text-gray-200">
                  Contact
                </h2>
                <div className = "space-y-4">
                  <a target = "_blank" href = "https://github.com/neelbangera" className = "flex items-center space-x-2 p-3 rounded-lg bg-gray-700/50 border border-transparent hover:border-yellow-400 hover:bg-gray-700 transition-colors">
                    <FaGithub />
                    <span className = "text-white"> Github</span>
                  </a>
                  <a target = "_blank" href = "https://www.linkedin.com/in/neel-bangera-51b5a427a/" className = "flex items-center space-x-2 p-3 rounded-lg bg-gray-700/50 border border-transparent hover:border-yellow-400 hover:bg-gray-700 transition-colors">
                    <CiLinkedin />
                    <span className = "text-white"> LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
        
      </section>
      <section className = "py-20 px-4 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-left mb-12 text-slate-200">
            Hobbies
          </h2>
          <div className = "bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12 border border-slate-500">
            <div className = "grid md:grid-cols-2 gap-6">
              <HobbyItem 
                icon={PiPersonSimpleRun}
                name="Running" 
                details="1M 4:44 • 2M 10:07 • 5K 16:56" 
              />

              <HobbyItem 
                icon={IoMdBook}
                name="Reading" 
                details={<>
                  Designing Data Intensive Applications •<br/>
                  Code: The Hidden Language of Computers
                  </>
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
