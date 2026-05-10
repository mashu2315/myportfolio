import { ContactSection } from "../../components/ContactSection";
import { OsShell } from "../../components/os/OsShell";

export const ContactPage = () => {
  return (
    <OsShell>
      <div className="relative">
        <ContactSection />
      </div>
    </OsShell>
  );
};

