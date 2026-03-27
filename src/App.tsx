import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Terminal, 
  Cpu,
  ChevronDown,
  User,
  Briefcase,
  Wrench,
  Send
} from "lucide-react";
import { useState } from "react";

const PROJECTS = [
  {
    title: "Student Portal System",
    description: "A comprehensive portal for students to access academic resources, developed during my Diploma final year.",
    tech: ["PHP", "MySQL", "HTML/CSS"],
    image: "https://picsum.photos/seed/edu/800/600",
    link: "#"
  },
  {
    title: "Smart Campus App",
    description: "An Android application for campus navigation and real-time event notifications for B.Tech students.",
    tech: ["Java", "Firebase", "Android Studio"],
    image: "https://picsum.photos/seed/campus/800/600",
    link: "#"
  },
  {
    title: "Community Outreach Platform",
    description: "A web platform to coordinate student volunteer activities and social awareness campaigns in Narasaraopeta.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://picsum.photos/seed/community/800/600",
    link: "#"
  }
];

const SKILLS = [
  { name: "Programming", icon: <Terminal className="w-5 h-5" />, items: ["C", "Java", "Python", "Data Structures"] },
  { name: "Web Dev", icon: <Palette className="w-5 h-5" />, items: ["HTML5", "CSS3", "JavaScript", "React"] },
  { name: "Database", icon: <Cpu className="w-5 h-5" />, items: ["MySQL", "MongoDB", "Oracle"] },
  { name: "Leadership", icon: <User className="w-5 h-5" />, items: ["Public Speaking", "Team Management", "Social Activism", "Event Planning"] }
];

const LEADERSHIP_ROLES = [
  {
    role: "Town Secretary",
    organization: "SFI (Student Federation of India)",
    location: "Narasaraopeta",
    period: "2024 - Present",
    description: "Leading student movements, organizing awareness campaigns, and advocating for student rights and educational reforms in the town."
  },
  {
    role: "Class Representative",
    organization: "B.Tech CSE",
    location: "College Campus",
    period: "2023 - 2024",
    description: "Bridging the gap between students and faculty, ensuring smooth communication and addressing academic concerns."
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold tracking-tighter"
            >
              SRAVAN KUMAR.
            </motion.span>
            <div className="hidden md:flex space-x-8">
              {["About", "Leadership", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <button 
              onClick={() => scrollTo('contact')}
              className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-zinc-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-semibold uppercase tracking-wider mb-4">
              3rd Year B.Tech CSE Student & SFI Secretary
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-6">
              I'm <span className="text-red-600">Sravan Kumar</span>, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                Engineering Change.
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-zinc-600 mb-10">
              A dedicated CSE student from Narasaraopeta with a strong foundation in technical 
              engineering and a passion for social leadership and student advocacy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => scrollTo('leadership')}
                className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white rounded-xl font-medium hover:bg-zinc-800 transition-all transform hover:scale-105"
              >
                View Leadership
              </button>
              <div className="flex items-center gap-6 mt-4 sm:mt-0">
                <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Github className="w-6 h-6" /></a>
                <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Linkedin className="w-6 h-6" /></a>
                <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Mail className="w-6 h-6" /></a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 text-zinc-300 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/student/800/800" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block border border-zinc-100">
                <div className="flex items-center gap-4">
                  <div className="bg-red-100 p-3 rounded-xl">
                    <Briefcase className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500">Education</p>
                    <p className="font-bold text-zinc-900">B.Tech 3rd Year</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-red-600 font-semibold mb-4">
                <User className="w-5 h-5" />
                <span>My Journey</span>
              </div>
              <h2 className="text-4xl font-bold text-zinc-900 mb-6">
                From Diploma to B.Tech: A Path of Continuous Learning.
              </h2>
              <p className="text-lg text-zinc-600 mb-6">
                I completed my **Diploma in Computer Science and Engineering**, which provided 
                me with a solid practical foundation. Currently, I am pursuing my **3rd year of B.Tech 
                in CSE**, deepening my theoretical knowledge and exploring advanced technologies.
              </p>
              <p className="text-lg text-zinc-600 mb-8">
                Beyond academics, I am deeply involved in student welfare. Serving as the 
                **SFI Town Secretary for Narasaraopeta**, I strive to create a better 
                educational environment and represent the voices of my fellow students.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-xl border border-zinc-100">
                  <h4 className="font-bold text-zinc-900 mb-1 text-xl">Diploma</h4>
                  <p className="text-sm text-zinc-500">Completed in CSE</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-zinc-100">
                  <h4 className="font-bold text-zinc-900 mb-1 text-xl">B.Tech</h4>
                  <p className="text-sm text-zinc-500">3rd Year CSE</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">Leadership & Social Impact</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              My commitment to student rights and social progress in Narasaraopeta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {LEADERSHIP_ROLES.map((role, index) => (
              <motion.div
                key={role.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 hover:shadow-lg transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-bold rounded-full uppercase tracking-wider">
                      {role.organization}
                    </span>
                    <h3 className="text-2xl font-bold text-zinc-900 mt-3">{role.role}</h3>
                  </div>
                  <span className="text-sm font-medium text-zinc-400">{role.period}</span>
                </div>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  {role.description}
                </p>
                <div className="flex items-center gap-2 text-zinc-500 text-sm">
                  <Briefcase className="w-4 h-4" />
                  <span>{role.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">Technical Projects</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Applying my CSE knowledge to build practical solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-xl transition-all"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a href={project.link} className="bg-white text-zinc-900 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-1 bg-zinc-100 border border-zinc-200 rounded-md text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">{project.title}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Skills & Expertise</h2>
              <p className="text-zinc-400 text-lg mb-8">
                Combining technical proficiency in Computer Science with strong leadership 
                and communication skills.
              </p>
              <div className="flex items-center gap-4 p-4 bg-zinc-800/50 rounded-2xl border border-zinc-700">
                <div className="bg-red-500/20 p-3 rounded-xl">
                  <Code2 className="w-6 h-6 text-red-400" />
                </div>
                <p className="text-sm text-zinc-300 italic">
                  "Education is the most powerful weapon which you can use to change the world."
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {SKILLS.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-zinc-800/30 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4 text-red-400">
                    {skill.icon}
                    <h4 className="font-bold text-white">{skill.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map(item => (
                      <span key={item} className="text-sm text-zinc-400">
                        • {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-zinc-900 rounded-[2rem] overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-600/20 to-transparent pointer-events-none"></div>
            
            <div className="grid md:grid-cols-2 gap-12 p-8 md:p-16 relative z-10">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
                <p className="text-zinc-400 text-lg mb-8">
                  Whether it's about a technical project or student advocacy, 
                  I'm always open to meaningful discussions.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-zinc-800 p-3 rounded-xl">
                      <Mail className="w-5 h-5 text-zinc-400" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Email</p>
                      <p className="text-white">kondapallisk1@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-zinc-800 p-3 rounded-xl">
                      <Send className="w-5 h-5 text-zinc-400" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Phone</p>
                      <p className="text-white">7288817604</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-zinc-800 p-3 rounded-xl">
                      <Briefcase className="w-5 h-5 text-zinc-400" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Location</p>
                      <p className="text-white">Narasaraopeta, Andhra Pradesh</p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="space-y-4 bg-white p-8 rounded-3xl shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 transition-all resize-none" placeholder="Your message..."></textarea>
                </div>
                <button className="w-full py-4 bg-red-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-700 transition-all group">
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-200 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm">
            © 2026 Mr. K Sravan Kumar. Narasaraopeta.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">LinkedIn</a>
            <a href="#" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">GitHub</a>
            <a href="#" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
