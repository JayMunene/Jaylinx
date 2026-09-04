type NavPage = "about" | "process" | "portfolio" | "contact";

export default function Footer({
  onRequest,
  onNavigate,
  onAdmin,
}: {
  onRequest: (need?: string) => void;
  onNavigate: (page: NavPage) => void;
  onAdmin?: () => void;
}) {
  const cols = [
    {
      h: "Services",
      items: [
        { label: "Mobile Apps", action: () => onRequest("Mobile App") },
        { label: "Websites", action: () => onRequest("Web Application / Platform") },
        { label: "Web Platforms", action: () => onRequest("Web Application / Platform") },
        { label: "Systems Review", action: () => onRequest("Cost & Systems Review") },
      ],
    },
    {
      h: "Company",
      items: [
        { label: "About Us", action: () => onNavigate("about") },
        { label: "Our Process", action: () => onNavigate("process") },
        { label: "Portfolio", action: () => onNavigate("portfolio") },
        { label: "Contact", action: () => onNavigate("contact") },
      ],
    },
    {
      h: "Get Started",
      items: [
        { label: "Get a Free Quote", action: () => onRequest() },
        { label: "Book a Call", action: () => { window.location.href = "mailto:jaylinxgroup@gmail.com?subject=Book%20a%20Call"; } },
        { label: "Send a Message", action: () => { window.location.href = "mailto:jaylinxgroup@gmail.com?subject=Project%20Enquiry"; } },
        { label: "Partner With Us", action: () => { window.location.href = "mailto:jaylinxgroup@gmail.com?subject=Partnership%20Enquiry"; } },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-canvas">
      <div
        className="pointer-events-none absolute bottom-0 left-0 select-none font-black uppercase leading-none text-white"
        style={{
          fontSize: "clamp(80px, 17vw, 260px)",
          opacity: 0.024,
          letterSpacing: "-0.04em",
          transform: "translateY(28%)",
        }}
        aria-hidden
      >
        JAYLINX
      </div>

      <div className="relative mx-auto grid max-w-[1380px] grid-cols-2 gap-12 px-8 py-16 lg:grid-cols-4 lg:px-14 xl:px-20">
        <div className="col-span-2 lg:col-span-1">
          <div
            className="font-sans text-[11px] font-semibold uppercase text-white"
            style={{ letterSpacing: "0.28em" }}
          >
            JAYLINX <span className="text-gold">·</span> GROUP
          </div>
          <address className="mt-5 font-mono text-[11px] not-italic leading-[1.85] text-white/32">
            Nairobi, Kenya 00100
          </address>
          <div className="mt-4 font-mono text-[10px] text-white/28">
            jaylinxgroup@gmail.com
          </div>
        </div>

        {cols.map((col) => (
          <div key={col.h}>
            <div
              className="font-mono text-[9px] uppercase text-white/28"
              style={{ letterSpacing: "0.24em" }}
            >
              {col.h}
            </div>
            <ul className="mt-5 space-y-3">
              {col.items.map((it) => (
                <li key={it.label}>
                  <button
                    onClick={it.action}
                    className="text-[12px] text-white/38 transition-colors hover:text-white/72"
                  >
                    {it.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="relative border-t border-white/6">
        <div className="mx-auto flex max-w-[1380px] flex-col items-start justify-between gap-2 px-8 py-4 text-[11px] text-white/18 sm:flex-row sm:items-center lg:px-14 xl:px-20">
          <span>© 2026 Jaylinx Group. All rights reserved.</span>
          <span>Privacy Policy · Terms of Service</span>
        </div>
        {onAdmin && (
          <button
            onClick={onAdmin}
            className="absolute bottom-3 right-4 flex h-6 w-6 items-center justify-center rounded-full border border-white/15 font-mono text-[10px] text-white/30 transition-colors hover:border-white/30 hover:text-white/60"
          >
            ?
          </button>
        )}
      </div>
    </footer>
  );
}
