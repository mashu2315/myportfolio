import { OsShell } from "../../components/os/OsShell";
import { TerminalWidget } from "../../components/TerminalWidget";

export const TerminalPage = () => {
  return (
    <OsShell>
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Terminal <span className="text-primary">Shell</span>
          </h1>
          <div className="mx-auto">
            <TerminalWidget />
          </div>
        </div>
      </section>
    </OsShell>
  );
};

