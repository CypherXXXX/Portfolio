import { Hero } from "@/components/Hero";
import { ProjectGallery } from "@/components/ProjectGallery";
import { SkillsBento } from "@/components/SkillsBento";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen">
      <Hero />
      <ProjectGallery />
      <SkillsBento />
      <Experience />
      <Footer />
    </main>
  );
}
