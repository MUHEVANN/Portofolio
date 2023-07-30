import Info from "@/components/Info";
import Profile from "@/components/Profile";
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen" id="home">
        <Info />
      </div>
      <Profile />
      <Skills />
      <Project />
    </main>
  );
}
