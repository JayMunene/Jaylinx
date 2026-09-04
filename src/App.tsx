import { useState } from "react";
import Landing from "./components/Landing";
import AdminDashboard from "./components/AdminDashboard";
import IntakeModal from "./components/IntakeModal";
import AboutPage from "./components/AboutPage";
import ProcessPage from "./components/ProcessPage";
import PortfolioPage from "./components/PortfolioPage";
import ContactPage from "./components/ContactPage";
import DonatePage from "./components/DonatePage";

const ADMIN_PASS = "kemmy1234";

type View = "site" | "admin" | "about" | "process" | "portfolio" | "contact" | "donate";

export default function App() {
  const [view, setView] = useState<View>("site");
  const [intakeOpen, setIntakeOpen] = useState(false);
  const [presetNeed, setPresetNeed] = useState<string | undefined>();
  const [adminGateOpen, setAdminGateOpen] = useState(false);
  const [adminPass, setAdminPass] = useState("");
  const [adminError, setAdminError] = useState(false);

  function openIntake(need?: string) {
    setPresetNeed(need);
    setIntakeOpen(true);
  }

  function navigate(page: View) {
    setView(page);
    window.scrollTo(0, 0);
  }

  function tryOpenAdmin() {
    setAdminPass("");
    setAdminError(false);
    setAdminGateOpen(true);
  }

  function submitAdminPass(e: React.FormEvent) {
    e.preventDefault();
    if (adminPass === ADMIN_PASS) {
      setAdminGateOpen(false);
      navigate("admin");
    } else {
      setAdminError(true);
      setAdminPass("");
    }
  }

  return (
    <div className="size-full overflow-x-hidden">
      {view === "site" && (
        <Landing
          onRequest={openIntake}
          onAdmin={tryOpenAdmin}
          onNavigate={navigate}
        />
      )}
      {view === "admin" && <AdminDashboard onBack={() => navigate("site")} />}
      {view === "about" && (
        <AboutPage onBack={() => navigate("site")} onRequest={openIntake} onNavigate={navigate} />
      )}
      {view === "process" && (
        <ProcessPage onBack={() => navigate("site")} onRequest={openIntake} onNavigate={navigate} />
      )}
      {view === "portfolio" && (
        <PortfolioPage onBack={() => navigate("site")} onRequest={openIntake} onNavigate={navigate} />
      )}
      {view === "contact" && (
        <ContactPage onBack={() => navigate("site")} onRequest={openIntake} onNavigate={navigate} />
      )}
      {view === "donate" && (
        <DonatePage onBack={() => navigate("site")} onRequest={() => openIntake()} onNavigate={navigate} />
      )}

      <IntakeModal
        open={intakeOpen}
        onClose={() => setIntakeOpen(false)}
        presetNeed={presetNeed}
      />

      {/* Admin password gate */}
      {adminGateOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70"
          style={{ backdropFilter: "blur(6px)" }}
          onClick={() => setAdminGateOpen(false)}
        >
          <form
            onSubmit={submitAdminPass}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm border border-white/10 bg-canvas p-8"
          >
            <div
              className="mb-1 font-mono text-[9px] uppercase text-gold/60"
              style={{ letterSpacing: "0.24em" }}
            >
              Admin Access
            </div>
            <h2 className="mb-6 text-[20px] font-bold text-white">
              Enter password
            </h2>

            <input
              autoFocus
              type="password"
              value={adminPass}
              onChange={(e) => { setAdminPass(e.target.value); setAdminError(false); }}
              placeholder="Password"
              className="w-full border-b border-white/12 bg-transparent pb-2.5 font-mono text-[13px] text-white outline-none transition-colors focus:border-gold placeholder:text-white/20"
            />

            {adminError && (
              <p className="mt-3 font-mono text-[10px] text-red-400" style={{ letterSpacing: "0.1em" }}>
                Incorrect password. Try again.
              </p>
            )}

            <div className="mt-8 flex items-center gap-4">
              <button
                type="submit"
                className="bg-gold px-6 py-2.5 font-mono text-[10px] uppercase text-canvas transition-colors hover:bg-gold-bright"
                style={{ letterSpacing: "0.14em" }}
              >
                Enter →
              </button>
              <button
                type="button"
                onClick={() => setAdminGateOpen(false)}
                className="font-mono text-[10px] uppercase text-white/28 transition-colors hover:text-white/60"
                style={{ letterSpacing: "0.14em" }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
