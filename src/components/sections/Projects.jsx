import { RevealOnScroll } from "../RevealOnScroll";
import warkop from "../../../public/images/warkop.png";
import agroin from "../../../public/images/agroin.png";
import mentalku from "../../../public/images/mentalku.png";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* AGRO.IN */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <img src={agroin} alt="Agro.in" className="rounded-md mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Agro.in – Smart Farming App
              </h3>
              <p className="text-gray-400 mb-4">
                Agro.in is an application designed to support farmers with
                features such as real-time food price tracking, soil
                compatibility checking, and a farmer discussion forum. Built to
                enhance agricultural efficiency and knowledge sharing among
                farmers.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Tailwind", "API Integration", "Figma"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://agro-in.my.id/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* WARUNG KOPI */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <img src={warkop} alt="Warung Kopi" className="rounded-md mb-4" />
              <h3 className="text-xl font-bold mb-2">Warung Kopi Mbah Redjo</h3>
              <p className="text-gray-400 mb-4">
                Warung Kopi Mbah Redjo is an ordering system application
                designed to help manage the operations of Mbah Redjo Coffee
                Shop. Built to streamline the ordering process and improve
                customer service.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Reactjs", "tailwindcss", "Api Integration", "Laravel"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://warungkopimbahredjo.com/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* MEDIA SOSIAL DUSUN DUKUH */}
            <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
              <img
                src={mentalku}
                alt="Mentalku"
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">Mentalku App</h3>
              <p className="text-gray-400 mb-4">
                A simple web app that lets users take a quick mental health test
                and get instant results. Built during the MSIB program to raise
                awareness of mental well-being.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React Native", "Firebase", "Figma", "Tailwind"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://mentalku.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
