import { AboutSection } from "../../components/AboutSection";
import { OsShell } from "../../components/os/OsShell";

export const AboutPage = () => {
  return (
    <OsShell>
      <div className="relative">
        <AboutSection />
      </div>
    </OsShell>
  );
};

