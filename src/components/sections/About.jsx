import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Nextjs",
    "Javascript",
    "TailwindCSS",
    "figma",
    "github",
  ];

  const backendSkills = ["Node.js", "laravel"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I am a recent graduate with a Bachelor’s degree in Informatics
              Engineering from Ngudi Waluyo University, passionate about web
              development and UI/UX design. During my academic journey, I joined
              the MSIB Batch 5 program at Dicoding and MSIB Batch 6 at Infinite
              Learning, where I strengthened my skills in frontend and backend
              development, as well as user experience design. I'm eager to keep
              learning and contribute to building meaningful digital solutions.
              Here are the skills I’ve acquired and continue to develop:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> Bachelor of Informatics Engineering –</strong>
                  Universitas Ngudi Waluyo (2021–2025)
                </li>
                <li>
                  MSIB Cycle 5 di Dicoding (belajar backend, frontend, UI/UX){" "}
                </li>
                <li>
                  MSIB Cycle 6 di Infinite Learning (belajar web development &
                  UI/UX){" "}
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Mentor - Dicoding (January 2025 - April 2025){" "}
                  </h4>
                  <p>
                    As a mentor at Dicoding, I guided students through both
                    front-end and back-end development tracks. I provided
                    valuable feedback, answered technical questions, and
                    facilitated the learning process to help students excel in
                    mastering web development technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
