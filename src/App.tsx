import Sidebar from "./components/layout/Sidebar";
import Hero from "./sections/Hero";
import Profile from "./sections/Profile";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Stats from "./sections/Stats";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#050606] text-white">
      <Sidebar />

      <main className="px-4 py-4 xl:ml-[260px] xl:p-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-16">
          <Hero />
          <Stats />
          <Profile />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
