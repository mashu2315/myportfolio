import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";
import { SkillsPage } from "./pages/skills";
import { ExperiencePage } from "./pages/experience";
import { EducationPage } from "./pages/education";
import { ContactPage } from "./pages/contact";
import { TerminalPage } from "./pages/terminal";
import { ProjectsPage } from "./pages/projects";
import { NotFound } from "./pages/NotFound";
import { CustomCursor } from "./components/os/CustomCursor";

function App() {
  return (
    <>
      <CustomCursor />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terminal" element={<TerminalPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
