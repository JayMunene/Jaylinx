Role & Objective:
Act as a Principal Luxury UI/UX Designer, Design Systems Architect, and Elite Cybersecurity Systems Architect. Generate an ultra-luxury, high-precision desktop landing page (1440px canvas) in Figma and a comprehensive full-stack security architecture for an elite B2B tech engineering atelier specializing in custom mobile & web platform creation, high-concurrency B2B SaaS architecture, and algorithmic automation/cost-reduction audits.

Design Philosophy & Visual Language:
Hyper-luxury, darkroom automotive atelier aesthetic (inspired by Mansory and Bugatti bespoke customization divisions) fused with mission-critical defense/banking-grade cyber architecture. Emphasize pitch-black foundations, architectural razor-sharp 2px geometry, luminous metallic champagne gold accents, low-key studio rim lighting, terminal-grade monospace data readouts, and cryptographic trust visualizers. Strictly exclude generic corporate SaaS clichés (no pastel gradients, no rounded pill cards, no playful 3D illustrations, no bright multi-color badges).

---

1. DESIGN TOKENS & SYSTEM VARIABLES

Color System:
- Canvas & Surfaces:
  * Canvas Base: #050505
  * Surface Card Default: #0C0C0E
  * Surface Card Elevated / Focus: #121215
  * Scrim Gradient: Linear-gradient(180deg, rgba(5,5,5,0.15) 0%, rgba(5,5,5,0.6) 45%, rgba(5,5,5,0.98) 100%)
- Metallic Champagne Gold Spectrum:
  * Primary Accent: #D4AF37
  * Bright Luminous Highlight: #F3E5AB
  * Muted Bronze/Gold: #9B8026
  * Ambient Gold Glow: rgba(212, 175, 55, 0.12)
- Security & System Status Accents:
  * Hardware Validated / Active Ledger: #22C55E (Emerald Green micro-pulse, 6px)
  * Cipher Neutral: #A3A3A3
- Borders & Strokes:
  * Hairline Inactive: 1px solid rgba(212, 175, 55, 0.16)
  * Hairline Hover / Active: 1px solid rgba(212, 175, 55, 0.65)
  * Subtle Neutral Divider: 1px solid rgba(255, 255, 255, 0.08)
- Typography Palette:
  * Pure White: #FFFFFF
  * Technical Slate: #8E8E93
  * Deep Muted Slate: #5E5E62

Typography Hierarchy (Inter / Neue Haas Grotesk + JetBrains Mono for telemetry):
- Display/Hero: 68px, Bold (700), Line-Height: 106%, Tracking: -0.02em, Text Transform: Uppercase
- Section Titles: 32px, SemiBold (600), Line-Height: 115%, Tracking: -0.01em, Text Transform: Uppercase
- Card Headlines: 22px, SemiBold (600), Line-Height: 120%, Tracking: -0.01em
- Metric Figures: 36px, Bold (700), Tabular Numerals (font-variant-numeric: tabular-nums)
- Telemetry & Security Cipher: 11px, Monospace (JetBrains Mono), Tracking: +0.06em
- Eyebrows & Status Labels: 10px-11px, Medium/SemiBold, Line-Height: 100%, Tracking: +0.18em to +0.22em, Text Transform: Uppercase
- Body Copy: 15px, Regular (400), Line-Height: 160%, Tracking: 0%

Layout Grid & Rules:
- Canvas Width: 1440px
- Layout Grid: 12 Columns, 80px margins, 24px gutters, max-width wrapper: 1280px
- Corner Radii: Strict 2px across cards, buttons, inputs, and badges (maintains an aggressive, precision-milled silhouette)

---

2. DETAILED SECTION SPECIFICATIONS

A. Sticky Frosted Header with Security Handshake (Height: 76px, Space-Between):
- Container: Pinned/Fixed top, Fill rgba(5, 5, 5, 0.78), 24px Background Blur, 1px bottom border rgba(212, 175, 55, 0.14)
- Left: Monogram brandmark "KRONOS // ARCHITECTURE" (Pure White text, Champagne Gold slashes, 12px, tracking: 0.22em, Bold) paired with a micro-status pill: [ TLS 1.3 // ZERO-TRUST ACTIVE ] (Monospace, 9px, emerald green dot indicator).
- Center: Navigation stack (gap: 36px, Auto Layout Horizontal) with links: "CAPABILITIES", "B2B SAAS", "AUTOMATION AUDIT", "SYSTEM TWEAKS", "SECURITY ATELIER"
  * Style: 11px, Uppercase, Slate Gray (#8E8E93), tracking: 0.16em.
  * Active/Hover Indicator: Color transitions to Gold (#F3E5AB) with a 1px solid gold bottom bar.
- Right: Ghost CTA Button "REQUEST AUDIT"
  * Style: 1px border rgba(212, 175, 55, 0.25), transparent fill, 11px gold uppercase text, 2px radius, padding: 8px 18px.

B. Hero Showcase Section (Height: 760px, Viewport Centered):
- Background: Pitch Black (#050505) with a centered radial gold light emitter (400px ellipse, rgba(212, 175, 55, 0.10), 120px layer blur) anchored top-center.
- Layout: Centered vertical auto layout, max-width: 900px, gap: 24px.
- Eyebrow: "HAUTE SOFTWARE ARCHITECTURE // BANK-GRADE VERIFIED" in Champagne Gold (#D4AF37).
- Headline: "SYSTEMS ENGINEERED WITHOUT COMPROMISE" (Display/Hero style, Pure White).
- Subtitle: "We architect high-yield B2B SaaS platforms, develop ultra-responsive native applications, and conduct algorithmic audits to automate workflows and reclaim operational capital—guaranteed by sovereign cryptographic security." (Technical Slate, max-width 700px).
- CTA Action Row (Auto Layout Horizontal, gap: 16px):
  * Primary Button: Solid Champagne Gold Fill (#D4AF37), Black text (#050505), 11px SemiBold, 2px radius, padding: 14px 28px.
  * Secondary Button: Transparent fill, 1px border rgba(212, 175, 55, 0.2), Pure White text, padding: 14px 28px.

C. Telemetry & Security Benchmark Strip (Instrument Cluster Bar):
- Full-width band placed directly below the hero. Fill: #08080A, with 1px top and bottom borders in rgba(212, 175, 55, 0.15).
- Structure: 4 equal columns divided by 1px vertical hairline gold borders. Padding: 32px 0.
  * Col 1: Label: "MAX EDGE LATENCY" (10px Gold Uppercase) -> Metric: "38 MS" (36px Bold White)
  * Col 2: Label: "AVERAGE OPEX RECOVERY" (10px Gold Uppercase) -> Metric: "42.8%" (36px Bold White)
  * Col 3: Label: "SECURITY RESILIENCE" (10px Gold Uppercase) -> Metric: "100% AIR-GAPPED AUDIT" (28px Bold White)
  * Col 4: Label: "STANDARDS COMPLIANCE" (10px Gold Uppercase) -> Metric: "SOC2 / ISO27001" (36px Bold White)

D. Dynamic Selector Bar ("Configure Your Solution"):
- Minimalist integrated configuration bar embedded above the catalog grid.
- Layout: 3 cascading selector inputs styled with zero-radius and single 1px bottom borders in rgba(255, 255, 255, 0.15):
  * Selector 1: "CORE NEED" (Options: Flagship Mobile/Web App, Multi-Tenant SaaS, Cost-Reduction Audit)
  * Selector 2: "ARCHITECTURE & SECURITY SPEC" (Options: Native Swift/Kotlin + Secure Enclave, Next.js / Zero-Trust Node Cloud, Distributed Rust Microservices)
  * Selector 3: "TARGET TIMELINE" (Options: Rapid Execution, Q3 Retooling, Ongoing Retainer)
- Action: Integrated 1px gold hairline button "CALCULATE ARCHITECTURE & ROI" with focus gold bottom highlight.

E. Services Atelier Showcase (3-Column Grid with Fractional Carousel Controls):
- Section Header (Auto Layout Horizontal, Space-Between):
  * Left: Section Title "ENGINEERED CAPABILITIES" with eyebrow "CONVERSION PROGRAMS"
  * Right: Fractional pagination counter "01 / 06" in tabular monospace, paired with two square 36px x 36px hairline ghost arrow buttons (← / →).
- Grid: 3 Showcase Cards (Dimensions: 380px width x 510px height, 2px corner radius, Clip Content enabled, 1px stroke rgba(212, 175, 55, 0.16)).
- Card Internal Layer Stack:
  1. Base Image Layer: 100% width/height, object-fit cover, desaturated high-contrast dark studio rim lighting.
  2. Dual Image Crossfade Layer: Secondary detailed architectural wireframe that sits hidden at opacity: 0 for hover transition.
  3. Scrim Overlay: Gradient from transparent at top to rgba(5,5,5,0.96) at bottom.
  4. Multi-Badge Floating Taxonomy (Top-Left, 16px inset, Auto Layout Horizontal, gap: 6px):
     - Pill badges: Fill rgba(5,5,5,0.7), 1px stroke rgba(212, 175, 55, 0.25), 2px radius, padding 4px 8px. Text: 9px Bold Gold (#D4AF37), uppercase, tracking +0.22em.
  5. Security Guarantee Micro-Badge (Top-Right, 16px inset):
     - Monospace micro-badge: [ AES-256-GCM // HARDWARE ENCLAVE ] (9px, Muted Slate).
  6. Content Container (Auto Layout Vertical, 28px padding bottom/sides, pinned to bottom):
     - Eyebrow: 10px Gold, tracking +0.18em.
     - Title: 22px SemiBold White.
     - Description: 13px Technical Slate, 2-line clamp.
     - Action Row: "COMMISSION SYSTEM" (11px uppercase) paired with gold vector arrow (→).
- The 3 Cards:
  * Card 1: Badges: [ NATIVE CORE ] [ SECURE ENCLAVE ] | Eyebrow: "PRECISION ENGINEERING" | Title: "Mobile & Web Platforms" | Media: Matte titanium smartphone chassis in dramatic darkroom side rim lighting.
  * Card 2: Badges: [ MULTI-TENANT ] [ ZERO-TRUST mTLS ] | Eyebrow: "HIGH-CONCURRENCY" | Title: "Enterprise B2B SaaS" | Media: Low-key server chassis with luminous gold fiber-optic data traces.
  * Card 3: Badges: [ OPEX RECOVERY ] [ AUDIT VERIFIED ] | Eyebrow: "EFFICIENCY MAXIMIZATION" | Title: "Automation & Cost Audit" | Media: High-precision wireframe diagnostic telemetry screen calculating reclaimed capital metrics.

F. Dedicated Security & Cryptographic Governance Module ("The Bastion"):
- 2-Column Split Component (Width: 1280px, Background: #0A0A0C, 1px border rgba(212,175,55,0.2), padding: 48px):
  * Left Column: Headline "DEFENSE-IN-DEPTH BY SPECIFICATION", eyebrow "GOVERNANCE & INTEGRITY". Monospace breakdown of security layers (Client Hardening, Edge Shield, Microsegmentation, Data Immutability).
  * Right Column: Interactive Cryptographic Proof Visualizer:
    - Display of live simulated SHA-256 state ledger of the client's current session.
    - Verified Certificate Seal: "ISO 27001 / SOC 2 TYPE II / FIPS 140-3 COMPLIANT".
    - Toggle: "CLIENT-SIDE PGP ENCRYPTION FOR INTAKE DATA" with a gold toggle switch.

G. Atelier Mega-Footer with Typographic Watermark & Public Security Ledger:
- Background: Pitch Black (#050505), 1px top border rgba(212, 175, 55, 0.16), relative positioning.
- Background Watermark: Giant text "KRONOS ARCHITECTURE" (180px font size, fill: rgba(212, 175, 55, 0.03), tracking: -0.04em, full bleed, user-select none, non-interactive).
- Content Layer:
  * Column 1: Monogram brandmark, address, corporate registration, official seal "VERIFY AUDIT INTEGRITY", and live public key fingerprint (e.g., `PGP: 4A8F B12D 9E33...`).
  * Column 2: Architecture (Mobile Engines, Web Platforms, Cloud SaaS, System Tuning).
  * Column 3: Security & Governance (Vulnerability Disclosure / `security.txt`, Zero-Trust Whitepaper, SOC2 Compliance Portal, Bug Bounty).
  * Column 4: Secure Inquiries (Direct partner desk via encrypted Signal protocol or PGP form).
  * Bottom Sub-bar: Copyright "© 2026 KRONOS ARCHITECTURE", Imprint, Privacy, Strict Monospace Font.

---

3. FULL-STACK SECURITY ARCHITECTURE SPECIFICATION (FRONTEND & BACKEND)

A. Frontend Hardening & Client Protection:
- Zero-Inline Strict Content Security Policy (CSP):
  `default-src 'none'; script-src 'self' 'nonce-{RANDOM}'; style-src 'self' 'nonce-{RANDOM}'; img-src 'self' data: https://images.unsplash.com; font-src 'self'; connect-src 'self' https://api.kronos-tech.io; frame-ancestors 'none'; base-uri 'none'; form-action 'self'; upgrade-insecure-requests; block-all-mixed-content;`
- Enterprise HTTP Security Headers:
  * Strict-Transport-Security: `max-age=63072000; includeSubDomains; preload`
  * X-Frame-Options: `DENY` (Anti-Clickjacking)
  * X-Content-Type-Options: `nosniff`
  * Referrer-Policy: `strict-origin-when-cross-origin`
  * Permissions-Policy: `camera=(), microphone=(), geolocation=(), payment=(), usb=()`
- Client-Side XSS Mitigation: Mandatory DOMPurify / sanitization on all user input surfaces; zero use of `dangerouslySetInnerHTML` or `eval()`.
- Subresource Integrity (SRI): Cryptographic SHA-384 hashes on all third-party fonts, scripts, and stylesheets.
- Anti-Bot & Intake Security: Invisible Cloudflare Turnstile / reCAPTCHA Enterprise verification on all inquiry and audit calculators; zero plaintext transmission of confidential client infrastructure logs.

B. Backend, API, & Cloud Infrastructure Security:
- Identity & Access Management (IAM):
  * OAuth 2.1 and OpenID Connect (OIDC) with PKCE (Proof Key for Code Exchange) on all client dashboards.
  * Strict Role-Based and Attribute-Based Access Control (RBAC/ABAC).
  * Mandatory WebAuthn / FIDO2 hardware security keys (YubiKey) for administrative and partner access; zero SMS-based 2FA.
- Network & API Gateway Defense:
  * Zero-Trust Architecture: Microsegmentation across all service meshes with mutual TLS (mTLS) enforced between internal microservices.
  * Cloudflare Enterprise / AWS WAF with aggressive rate limiting (Token Bucket algorithm: 60 req/min per IP on public endpoints; 5 req/min on audit forms).
  * Automated DDoS shielding and automated geo-blocking on non-operational ingress vectors.
- Data Protection & Cryptography:
  * In-Transit: Enforced TLS 1.3 with PFS (Perfect Forward Secrecy) using modern cipher suites (`TLS_AES_256_GCM_SHA384`, `TLS_CHACHA20_POLY1305_SHA256`).
  * At-Rest: Envelope encryption using AWS KMS / HashiCorp Vault with dedicated customer-managed keys (AES-256-GCM).
  * Storage: Field-level encryption on all sensitive client audit data and database columns (Personally Identifiable Information & stack telemetry).
- Input Validation & Injection Immunity:
  * Strict compile-time and runtime schema parsing (Zod / JSON Schema) on all API inputs.
  * 100% Parameterized queries via ORM/Query Builders (Prisma/Kysely/SQLAlchemy); complete immunity to SQL, NoSQL, and Command Injection.
- Observability & Immutable Audit Trails:
  * Tamper-proof, cryptographically signed write-once-read-many (WORM) audit logging for all administrative queries and code execution.
  * Real-time automated anomaly detection (SIEM) alerting on suspicious authentication bursts or payload signatures.

---

4. FIGMA COMPONENT STATES & INTERACTIVE WIRING (SMART ANIMATE)

- Showcase Card Component Variants:
  * Variant [State=Default]: Base image scale 100%, stroke: rgba(212, 175, 55, 0.16), subtext: Slate Gray (#8E8E93), arrow X: 0px, drop shadow: none.
  * Variant [State=Hover]: Base image scale 106%, stroke: #D4AF37, subtext: Pure White (#FFFFFF), arrow shifts X: +6px, drop shadow: 0 16px 40px rgba(0,0,0,0.85) and 0 0 24px rgba(212, 175, 55, 0.15).
  * Transition Wiring: While Hovering -> Change To: State=Hover -> Smart Animate: 400ms cubic-bezier(0.16, 1, 0.3, 1).

- Ghost Buttons & CTAs:
  * State=Default: 1px border rgba(212,175,55,0.25), text: Gold, background: transparent.
  * State=Hover: Background fills solid Gold (#D4AF37), text inverts to Obsidian Black (#050505), border-color: #D4AF37, glow aura: 0 0 20px rgba(212,175,55,0.3).

- Cryptographic Proof Widget Toggle:
  * Interactive switch in Figma linking between State=StandardIntake and State=PGPEncryptedIntake with micro-status change from Slate to Emerald Green.