import { useState } from "react";
import { Link } from "react-router-dom";
const COLORS = {
  primary: "#1A3C5E",
  accent: "#E86B2B",
  accentLight: "#FDF0E8",
  steel: "#4A5568",
  steelLight: "#EDF2F7",
  white: "#FFFFFF",
  offwhite: "#F7F9FC",
  border: "#E2E8F0",
  text: "#1A202C",
  textMuted: "#718096",
  success: "#276749",
  successLight: "#F0FFF4",
};

const styles = {
  // Base
  page: { fontFamily: "'Inter', system-ui, sans-serif", color: COLORS.text, background: COLORS.white, margin: 0, padding: 0 },
  // Nav
  nav: { background: COLORS.primary, padding: "14px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 100 },
  navLogo: { color: COLORS.white, fontWeight: 700, fontSize: 18, letterSpacing: "-0.3px" },
  navCta: { background: COLORS.accent, color: COLORS.white, border: "none", padding: "10px 20px", borderRadius: 6, fontWeight: 600, fontSize: 14, cursor: "pointer" },
  // Hero
  hero: { background: `linear-gradient(135deg, ${COLORS.primary} 0%, #0F2A44 100%)`, padding: "72px 32px 64px", position: "relative", overflow: "hidden" },
  heroInner: { maxWidth: 900, margin: "0 auto" },
  heroEyebrow: { display: "inline-block", background: "rgba(232,107,43,0.2)", color: "#F6AC7A", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 12px", borderRadius: 4, marginBottom: 20 },
  heroH1: { color: COLORS.white, fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, lineHeight: 1.15, margin: "0 0 20px", letterSpacing: "-0.5px" },
  heroSub: { color: "#A0B8D0", fontSize: 18, lineHeight: 1.6, margin: "0 0 36px", maxWidth: 680 },
  heroCtaRow: { display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 },
  ctaPrimary: { background: COLORS.accent, color: COLORS.white, border: "none", padding: "14px 28px", borderRadius: 8, fontWeight: 700, fontSize: 16, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 },
  ctaSecondary: { background: "transparent", color: COLORS.white, border: "2px solid rgba(255,255,255,0.3)", padding: "14px 28px", borderRadius: 8, fontWeight: 600, fontSize: 16, cursor: "pointer" },
  badgeRow: { display: "flex", flexWrap: "wrap", gap: 10 },
  badge: { background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: COLORS.white, fontSize: 13, padding: "6px 14px", borderRadius: 20, display: "flex", alignItems: "center", gap: 6 },
  // Sections
  section: { padding: "64px 32px" },
  sectionAlt: { padding: "64px 32px", background: COLORS.offwhite },
  inner: { maxWidth: 960, margin: "0 auto" },
  sectionEyebrow: { fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: COLORS.accent, marginBottom: 10 },
  sectionH2: { fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: COLORS.primary, margin: "0 0 16px", letterSpacing: "-0.3px" },
  sectionLead: { fontSize: 17, color: COLORS.textMuted, lineHeight: 1.7, maxWidth: 700, margin: "0 0 40px" },
  // Cards
  cardGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: 20 },
  productCard: { background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: 24, transition: "box-shadow 0.2s", cursor: "default" },
  cardTag: { fontSize: 11, fontWeight: 600, background: COLORS.accentLight, color: COLORS.accent, padding: "3px 10px", borderRadius: 12, display: "inline-block", marginBottom: 12 },
  cardTitle: { fontWeight: 700, fontSize: 16, color: COLORS.primary, margin: "0 0 8px" },
  cardSpec: { fontSize: 13, color: COLORS.textMuted, lineHeight: 1.7, margin: "0 0 16px" },
  cardCert: { fontSize: 12, fontWeight: 600, color: COLORS.success, background: COLORS.successLight, padding: "4px 10px", borderRadius: 6, display: "inline-block" },
  // Table
  tableWrap: { overflowX: "auto", borderRadius: 10, border: `1px solid ${COLORS.border}` },
  table: { width: "100%", borderCollapse: "collapse", fontSize: 14 },
  th: { background: COLORS.primary, color: COLORS.white, padding: "12px 16px", textAlign: "left", fontWeight: 600, fontSize: 13 },
  td: { padding: "12px 16px", borderBottom: `1px solid ${COLORS.border}`, color: COLORS.text, verticalAlign: "top" },
  tdAlt: { padding: "12px 16px", borderBottom: `1px solid ${COLORS.border}`, color: COLORS.text, background: COLORS.offwhite, verticalAlign: "top" },
  // Two col
  twoCol: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" },
  // Cert grid
  certGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 },
  certCard: { background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: 10, padding: "18px 20px", display: "flex", gap: 14, alignItems: "flex-start" },
  certIcon: { fontSize: 22, flexShrink: 0, marginTop: 2 },
  certLabel: { fontWeight: 700, fontSize: 14, color: COLORS.primary, margin: "0 0 4px" },
  certDesc: { fontSize: 13, color: COLORS.textMuted, margin: 0, lineHeight: 1.5 },
  // Steps
  stepsRow: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 20 },
  step: { background: COLORS.white, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: 24, position: "relative" },
  stepNum: { width: 36, height: 36, background: COLORS.accent, color: COLORS.white, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 16, marginBottom: 14 },
  stepTitle: { fontWeight: 700, fontSize: 15, color: COLORS.primary, margin: "0 0 6px" },
  stepDesc: { fontSize: 13, color: COLORS.textMuted, margin: 0, lineHeight: 1.6 },
  // FAQ
  faqItem: { borderBottom: `1px solid ${COLORS.border}`, padding: "20px 0" },
  faqQ: { fontWeight: 700, fontSize: 16, color: COLORS.primary, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", margin: 0 },
  faqA: { fontSize: 15, color: COLORS.textMuted, lineHeight: 1.7, marginTop: 12, paddingRight: 24 },
  // ARC
  arcBox: { background: `linear-gradient(135deg, ${COLORS.primary} 0%, #0F2A44 100%)`, borderRadius: 16, padding: "48px 40px", color: COLORS.white },
  arcH: { fontSize: 26, fontWeight: 800, margin: "0 0 14px", letterSpacing: "-0.3px" },
  arcP: { color: "#A0B8D0", fontSize: 16, lineHeight: 1.7, margin: "0 0 28px", maxWidth: 560 },
  arcBenefits: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12, marginBottom: 32 },
  arcBenefit: { background: "rgba(255,255,255,0.08)", borderRadius: 8, padding: "12px 16px", fontSize: 14, color: COLORS.white },
  // CTA block
  ctaBlock: { background: COLORS.accentLight, border: `1px solid #F6C9A8`, borderRadius: 16, padding: "48px 40px", textAlign: "center" },
  ctaBlockH: { fontSize: 28, fontWeight: 800, color: COLORS.primary, margin: "0 0 12px" },
  ctaBlockP: { fontSize: 17, color: COLORS.textMuted, margin: "0 0 32px", lineHeight: 1.6 },
  ctaBlockRow: { display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" },
  // Contact strip
  contactStrip: { background: COLORS.primary, padding: "24px 32px" },
  contactInner: { maxWidth: 960, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" },
  contactItem: { color: COLORS.white, fontSize: 14, display: "flex", alignItems: "center", gap: 8 },
};

const products = [
  {
    tag: "General Manufacturing",
    title: "Steel Toe Safety Shoe",
    specs: "200J steel toe cap · PU/rubber oil-resistant sole · Full grain leather upper",
    cert: "IS 15298 Part 2",
    bestFor: "Automobile plants, metal fabrication, heavy manufacturing",
    moq: "50 pairs",
  },
  {
    tag: "Electronics / Pharma",
    title: "Anti-Static (ESD) Safety Shoe",
    specs: "ESD-rated sole · Steel or composite toe · Leather or synthetic upper",
    cert: "IS 15298 · EN ISO 20345 ESD",
    bestFor: "Electronics assembly, semiconductor units, pharma clean rooms",
    moq: "50 pairs",
  },
  {
    tag: "Chemical / Food Processing",
    title: "Chemical & Oil Resistant Shoe",
    specs: "200J steel toe · Nitrile rubber sole · SRC slip-rated · Chemical-treated upper",
    cert: "IS 15298 · EN ISO 20345 SRC",
    bestFor: "Chemical plants, paint manufacturing, food processing, oil handling",
    moq: "50 pairs",
  },
  {
    tag: "Long-shift / Food / Pharma",
    title: "Lightweight Composite Toe Shoe",
    specs: "Non-metallic composite toe · EVA/PU sole · Mesh or leather upper",
    cert: "IS 15298 · EN ISO 20345",
    bestFor: "Pharmaceutical, food processing, electronics, long-shift factory workers",
    moq: "50 pairs",
  },
];

const factoryTable = [
  { factory: "Automobile / Auto Components", hazard: "Heavy parts, oil spills, press shop", shoe: "Steel toe + oil resistant sole" },
  { factory: "Pharmaceuticals", hazard: "Long shifts, clean room, static", shoe: "Composite toe + ESD + clean room rated" },
  { factory: "Food Processing", hazard: "Wet floors, cold storage, slips", shoe: "Steel toe + slip resistant + waterproof" },
  { factory: "Electronics / Semiconductor", hazard: "Static discharge risk", shoe: "Composite toe + ESD rated" },
  { factory: "Chemical Processing", hazard: "Chemical spills, corrosive liquids", shoe: "Steel toe + nitrile chemical resistant sole" },
  { factory: "Textile / Garments", hazard: "Long standing shifts, light hazard", shoe: "Lightweight composite toe + comfort insole" },
  { factory: "Metal Fabrication / Foundry", hazard: "Molten metal splash, heavy impact", shoe: "Steel toe + heat resistant sole + metatarsal guard" },
  { factory: "Paper / Packaging", hazard: "Moving equipment, slippery surfaces", shoe: "Steel toe + SRC slip resistant sole" },
];

const certs = [
  { icon: "🏅", label: "IS 15298 Part 1 & 2", desc: "India BIS national standard for safety footwear — legally required under Factories Act" },
  { icon: "🌍", label: "EN ISO 20345", desc: "European safety footwear standard — S1/S2/S3 rated, widely accepted by MNC factories" },
  { icon: "⚡", label: "ESD / Anti-Static", desc: "Electrostatic dissipative rating — mandatory for electronics, pharma, and ATEX zones" },
  { icon: "💧", label: "Oil Resistant Sole", desc: "Sole tested for resistance to hydrocarbon oils and fuels — critical for chemical and auto plants" },
  { icon: "🔰", label: "SRC Slip Resistance", desc: "Highest slip resistance rating, tested on ceramic tile and steel — reduces factory floor accidents" },
  { icon: "🦺", label: "200J Toe Cap", desc: "Steel or composite toe withstanding 200 joules of impact — IS 15298 compliant" },
];

const steps = [
  { title: "Share Your Requirement", desc: "Tell us factory type, number of workers, size range, and certifications needed (ESD, oil resistant, etc.)" },
  { title: "Get a Custom Quote", desc: "Receive itemised pricing with GST breakup within 24 hours." },
  { title: "Sample Evaluation", desc: "We dispatch sample pairs to your factory floor for trial before bulk confirmation." },
  { title: "Delivery & Documentation", desc: "Bulk delivery with IS certification docs, GST invoice, and full packing list." },
];

const faqs = [
  {
    q: "What safety shoes are legally required for factory workers in India?",
    a: "Under the Factories Act 1948, employers must provide PPE appropriate to the hazards present. IS 15298-certified steel toe safety shoes are the standard for most manufacturing environments. The specific type — steel toe, anti-static, chemical resistant — depends on your factory's particular hazards.",
  },
  {
    q: "What is the difference between steel toe and composite toe safety shoes?",
    a: "Steel toe caps offer 200J impact protection and are suited for heavy manufacturing and automobile plants. Composite toe caps are non-metallic, lighter, and metal-detector compatible — preferred for food processing, pharmaceutical, and electronics factories where metal-free footwear is required.",
  },
  {
    q: "What are ESD safety shoes and when are they needed?",
    a: "ESD (Electrostatic Dissipative) shoes safely dissipate static electricity from the body to the ground. Required in electronics manufacturing, semiconductor plants, explosive atmosphere (ATEX) zones, and pharmaceutical clean rooms where static discharge can damage components or cause ignition.",
  },
  {
    q: "How often should factory safety shoes be replaced?",
    a: "Quality IS-certified safety shoes should be replaced every 6–12 months under regular factory use. Replacement should be based on visible sole wear, degraded slip resistance, or compromised toe cap integrity — not just time elapsed.",
  },
  {
    q: "Can you supply on an Annual Rate Contract for our factory?",
    a: "Yes. We support Annual Rate Contract arrangements for manufacturing units with 50+ workers — fixed pricing for 12 months, scheduled deliveries, dedicated account support, and GST-compliant invoicing every cycle.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "Our standard MOQ is 50 pairs. For ARC arrangements we can accommodate phased delivery across the year with a committed annual quantity.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <div>
      {faqs.map((f, i) => (
        <div key={i} style={styles.faqItem}>
          <p style={styles.faqQ} onClick={() => setOpen(open === i ? null : i)}>
            {f.q}
            <span style={{ fontSize: 20, color: COLORS.accent, marginLeft: 12, flexShrink: 0 }}>{open === i ? "−" : "+"}</span>
          </p>
          {open === i && <p style={styles.faqA}>{f.a}</p>}
        </div>
      ))}
    </div>
  );
}

export default function SafetyShoesFactoryPage() {
  return (
    <div style={styles.page}>
      {/* NAV */}
      <nav style={styles.nav}>
        <span style={styles.navLogo}>SafetyPPE India</span>
        <button style={styles.navCta} onClick={() => document.getElementById("enquiry").scrollIntoView({ behavior: "smooth" })}>
          Get a Bulk Quote
        </button>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroInner}>
          <span style={styles.heroEyebrow}>Manufacturing & Factory PPE</span>
          <h1 style={styles.heroH1}>
            IS 15298 Certified Safety Shoes<br />for Factory & Manufacturing Workers
          </h1>
          <p style={styles.heroSub}>
            Steel toe, anti-static, oil resistant, and composite toe variants — matched to your specific manufacturing environment. Bulk supply across India with Annual Rate Contract options.
          </p>
          <div style={styles.heroCtaRow}>
            <button style={styles.ctaPrimary} onClick={() => document.getElementById("enquiry").scrollIntoView({ behavior: "smooth" })}>
              Request a Bulk Quote →
            </button>
            <button style={styles.ctaSecondary}>Download Catalogue</button>
          </div>
          <div style={styles.badgeRow}>
            {["✅ IS 15298 / ISI Certified", "✅ Anti-Static (ESD) Options", "✅ Oil & Chemical Resistant", "✅ MOQ from 50 Pairs", "✅ GST Invoice Provided", "✅ Pan-India Delivery"].map((b, i) => (
              <span key={i} style={styles.badge}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section style={styles.section}>
        <div style={styles.inner}>
          <p style={styles.sectionEyebrow}>Why it matters</p>
          <h2 style={styles.sectionH2}>Factory Floor Hazards Are Different — Your Footwear Should Be Too</h2>
          <p style={styles.sectionLead}>
            Construction sites get the attention, but manufacturing plants carry their own set of serious foot hazards: heavy machinery, falling components, oil and chemical spills, static electricity near sensitive equipment, and long shifts on hard concrete floors. Under the Factories Act 1948, employers are legally required to provide appropriate safety footwear to workers exposed to these risks. The wrong shoe creates two problems at once — worker injury risk and compliance failure during factory audits.
          </p>
          <p style={{ fontSize: 16, color: COLORS.text, lineHeight: 1.7, padding: "20px 24px", background: COLORS.steelLight, borderLeft: `4px solid ${COLORS.accent}`, borderRadius: "0 8px 8px 0", margin: 0 }}>
            Our industrial safety shoes are available in steel toe, composite toe, anti-static, oil-resistant, and chemical-resistant variants — each matched to your specific manufacturing environment and IS 15298 certified.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={styles.sectionAlt}>
        <div style={styles.inner}>
          <p style={styles.sectionEyebrow}>Product Range</p>
          <h2 style={styles.sectionH2}>Matched to Your Manufacturing Environment</h2>
          <p style={styles.sectionLead}>Four variants covering the full spectrum of Indian manufacturing environments — from automobile plants to pharmaceutical clean rooms.</p>
          <div style={styles.cardGrid}>
            {products.map((p, i) => (
              <div key={i} style={styles.productCard}>
                <span style={styles.cardTag}>{p.tag}</span>
                <p style={styles.cardTitle}>{p.title}</p>
                <p style={styles.cardSpec}>{p.specs}</p>
                <p style={{ fontSize: 12, color: COLORS.textMuted, margin: "0 0 6px" }}>Best for: {p.bestFor}</p>
                <p style={{ fontSize: 12, color: COLORS.textMuted, margin: "0 0 14px" }}>MOQ: {p.moq}</p>
                <span style={styles.cardCert}>{p.cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACTORY MATCHING TABLE */}
      <section style={styles.section}>
        <div style={styles.inner}>
          <p style={styles.sectionEyebrow}>Specification Guide</p>
          <h2 style={styles.sectionH2}>Which Safety Shoe Is Right for Your Factory?</h2>
          <p style={styles.sectionLead}>Map your industry to the right shoe specification before you order. This table covers the most common manufacturing environments in India.</p>
          <div style={styles.tableWrap}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Factory / Industry</th>
                  <th style={styles.th}>Key Hazard</th>
                  <th style={styles.th}>Recommended Shoe</th>
                </tr>
              </thead>
              <tbody>
                {factoryTable.map((row, i) => (
                  <tr key={i}>
                    <td style={i % 2 === 0 ? styles.td : styles.tdAlt}><strong>{row.factory}</strong></td>
                    <td style={i % 2 === 0 ? styles.td : styles.tdAlt}>{row.hazard}</td>
                    <td style={i % 2 === 0 ? { ...styles.td, color: COLORS.primary, fontWeight: 600 } : { ...styles.tdAlt, color: COLORS.primary, fontWeight: 600 }}>{row.shoe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: 20, fontSize: 15, color: COLORS.textMuted, lineHeight: 1.6 }}>
            Not sure which specification suits your factory? Share your industry and worker roles — we'll recommend the right shoe and provide a sample for evaluation before your bulk order. <a href="#enquiry" style={{ color: COLORS.accent, fontWeight: 600, textDecoration: "none" }}>Ask our safety advisor →</a>
          </p>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section style={styles.sectionAlt}>
        <div style={styles.inner}>
          <p style={styles.sectionEyebrow}>Certifications & Standards</p>
          <h2 style={styles.sectionH2}>Every Pair We Supply Meets These Standards</h2>
          <p style={styles.sectionLead}>Full certification documentation provided with every bulk order for your EHS audit and compliance records.</p>
          <div style={styles.certGrid}>
            {certs.map((c, i) => (
              <div key={i} style={styles.certCard}>
                <span style={styles.certIcon}>{c.icon}</span>
                <div>
                  <p style={styles.certLabel}>{c.label}</p>
                  <p style={styles.certDesc}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <button style={{ ...styles.ctaSecondary, background: COLORS.primary, color: COLORS.white, border: "none", padding: "13px 24px", borderRadius: 8, fontWeight: 600, fontSize: 15, cursor: "pointer" }}>
              Download Industrial Footwear Catalogue (PDF)
            </button>
          </div>
        </div>
      </section>

      {/* ANNUAL RATE CONTRACT */}
      <section style={styles.section}>
        <div style={styles.inner}>
          <div style={styles.arcBox}>
            <p style={{ ...styles.sectionEyebrow, color: "#F6AC7A" }}>Annual Rate Contracts</p>
            <h2 style={styles.arcH}>PPE Supply Contracts for Manufacturing Plants</h2>
            <p style={styles.arcP}>
              Most manufacturing plants replace safety shoes every 6–12 months per worker — creating predictable, recurring procurement. We support Annual Rate Contract (ARC) arrangements for factories with 50+ workers, so you're never scrambling to reorder under audit pressure.
            </p>
            <div style={styles.arcBenefits}>
              {["Fixed pricing for 12 months", "Quarterly or bi-annual delivery", "Dedicated account manager", "GST-compliant invoicing every cycle", "Priority stock reservation", "Sample evaluation before ARC sign-off"].map((b, i) => (
                <div key={i} style={styles.arcBenefit}>✓ {b}</div>
              ))}
            </div>
            <button style={styles.ctaPrimary} onClick={() => document.getElementById("enquiry").scrollIntoView({ behavior: "smooth" })}>
              Enquire About Annual Rate Contracts →
            </button>
          </div>
        </div>
      </section>

      {/* ORDER PROCESS */}
      <section style={styles.sectionAlt}>
        <div style={styles.inner}>
          <p style={styles.sectionEyebrow}>How to Order</p>
          <h2 style={styles.sectionH2}>Safety Shoes for Your Factory Team in 4 Steps</h2>
          <div style={styles.stepsRow}>
            {steps.map((s, i) => (
              <div key={i} style={styles.step}>
                <div style={styles.stepNum}>{i + 1}</div>
                <p style={styles.stepTitle}>{s.title}</p>
                <p style={styles.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={styles.section}>
        <div style={styles.inner}>
          <p style={styles.sectionEyebrow}>Common Questions</p>
          <h2 style={styles.sectionH2}>Frequently Asked Questions</h2>
          <FAQ />
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={styles.sectionAlt}>
        <div style={styles.inner}>
          <div style={styles.ctaBlock} id="enquiry">
            <p style={styles.sectionEyebrow}>Get a Quote</p>
            <h2 style={styles.ctaBlockH}>Protect Your Factory Workers — From the Ground Up</h2>
            <p style={styles.ctaBlockP}>
              50 pairs for a small unit or 2,000 pairs for a multi-shift plant — we supply IS 15298 certified safety shoes matched to your factory's specific hazards, with annual contract options, GST invoicing, and pan-India delivery.
            </p>
            <div style={styles.ctaBlockRow}>
              <button style={styles.ctaPrimary}>Request a Bulk Quote →</button>
              <button style={{ ...styles.ctaPrimary, background: "#25D366" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      
    </div>
  );
}
 