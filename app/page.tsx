import Image from "next/image";
import {
  Briefcase,
  GraduationCap,
  Award,
  Brain,
  Users,
  Code,
  Target,
  BarChart3,
  FileText,
  MapPin,
  ChevronRight,
  Globe,
  Linkedin,
} from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-[rgba(248,250,252,0.95)] backdrop-blur-[20px] border-b border-accent-border3">
      <div className="mx-auto max-w-[1200px] h-full flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <span className="font-heading text-xl font-bold tracking-[4px] text-black">
            SP
          </span>
          <span className="font-heading text-[13px] font-semibold tracking-[2px] text-accent2">
            CV
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="font-body text-sm text-text2 hover:text-black transition-colors">
            Profil
          </a>
          <a href="#experience" className="font-body text-sm text-text2 hover:text-black transition-colors">
            Erfahrung
          </a>
          <a href="#skills" className="font-body text-sm text-text2 hover:text-black transition-colors">
            Kompetenzen
          </a>
          <a href="#education" className="font-body text-sm text-text2 hover:text-black transition-colors">
            Ausbildung
          </a>
          <a
            href="#contact"
            className="font-heading text-[13px] font-bold tracking-[1px] bg-accent text-black px-[22px] py-2 rounded-lg hover:bg-accent-hover hover:shadow-[0_4px_30px_rgba(1,255,205,0.25)] transition-all"
          >
            KONTAKT
          </a>
        </div>
      </div>
    </nav>
  );
}

function ProfilePhoto() {
  return (
    <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] mx-auto shrink-0">
      {/* Gradient ring — matching LinkedIn Profilbild from .pen */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 180deg, rgba(163,230,53,0.44), rgba(163,230,53,0.12) 40%, rgba(163,230,53,0.44))",
          padding: 3,
          WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
        }}
      />
      {/* Photo container */}
      <div className="absolute inset-[6px] rounded-full overflow-hidden bg-light">
        <Image
          src="/profile.jpg"
          alt="Sebastian Pieper"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 280px, 340px"
          priority
        />
        {/* Radial vignette overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 42%, transparent 52%, rgba(248,250,252,0.09) 63%, rgba(248,250,252,0.31) 73%, rgba(248,250,252,0.63) 83%, rgba(248,250,252,0.87) 93%, rgba(248,250,252,0.96) 100%)",
          }}
        />
      </div>
      {/* Decorative floating squares around the photo */}
      <div className="absolute -bottom-2 left-[18%] w-[48px] h-[48px] bg-[#A3E635] opacity-90 rounded-[10px] rotate-[18deg] shadow-[0_4px_30px_rgba(163,230,53,0.3)]" />
      <div className="absolute -bottom-1 right-[16%] w-[44px] h-[44px] bg-[#84CC16] opacity-90 rounded-[8px] rotate-[-15deg] shadow-[0_4px_25px_rgba(132,204,22,0.25)]" />
      <div className="absolute bottom-[8%] left-[5%] w-[30px] h-[30px] bg-[#BEF264] opacity-65 rounded-[5px] rotate-[30deg]" />
      <div className="absolute top-[35%] right-[-6%] w-[34px] h-[34px] bg-[#4ADE80] opacity-70 rounded-[6px] rotate-[-25deg]" />
      <div className="absolute top-[30%] left-[-4%] w-[26px] h-[26px] bg-[#65A30D] opacity-75 rounded-[5px] rotate-[22deg]" />
      <div className="absolute -bottom-3 left-[42%] w-[34px] h-[34px] bg-[#BEF264] opacity-80 rounded-[6px] rotate-[25deg]" />
      {/* Glass square */}
      <div className="absolute bottom-[20%] right-[-3%] w-[50px] h-[50px] bg-[rgba(255,255,255,0.5)] rounded-[10px] rotate-[8deg] border border-[rgba(255,255,255,0.7)] backdrop-blur-[10px]" />
      <div className="absolute top-[15%] left-[-2%] w-[40px] h-[40px] bg-[rgba(255,255,255,0.5)] rounded-[8px] rotate-[-12deg] border border-[rgba(255,255,255,0.7)] backdrop-blur-[8px]" />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-light via-light2 to-light">
      {/* Decorative floating squares - matching LinkedIn banner style */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[8%] w-[75px] h-[75px] bg-[#84CC16] opacity-80 rounded-[10px] rotate-[-18deg] shadow-[0_5px_28px_rgba(132,204,22,0.25)]" />
        <div className="absolute top-[10%] right-[15%] w-[130px] h-[130px] bg-[#A3E63525] rounded-2xl rotate-[20deg] border border-[#A3E63530]" />
        <div className="absolute top-[60%] right-[8%] w-[110px] h-[110px] bg-[#A3E635] opacity-85 rounded-[14px] rotate-[12deg] shadow-[0_8px_36px_rgba(163,230,53,0.3)]" />
        <div className="absolute bottom-[20%] left-[5%] w-[55px] h-[55px] bg-[#BEF264] opacity-60 rounded-lg rotate-[28deg]" />
        <div className="absolute top-[40%] left-[50%] w-[90px] h-[90px] bg-[rgba(255,255,255,0.04)] rounded-xl rotate-[-10deg] border border-[rgba(255,255,255,0.06)] backdrop-blur-[10px]" />
        <div className="absolute bottom-[35%] right-[25%] w-[32px] h-[32px] bg-[#22C55E] opacity-45 rounded-[5px] rotate-[-25deg]" />
        <div className="absolute top-[25%] left-[35%] w-[60px] h-[60px] bg-[#65A30D] opacity-50 rounded-lg rotate-[35deg]" />
        {/* Subtle glows */}
        <div className="absolute top-[10%] left-[55%] w-[380px] h-[300px] bg-[#A3E63518] rounded-full blur-[90px]" />
        <div className="absolute bottom-[20%] left-[15%] w-[280px] h-[220px] bg-[#84CC1612] rounded-full blur-[60px]" />
        <div className="absolute top-[30%] right-[10%] w-[220px] h-[180px] bg-[#65A30D15] rounded-full blur-[55px]" />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Profile Photo */}
        <div className="animate-fade-up">
          <ProfilePhoto />
        </div>

        {/* Text content */}
        <div className="text-center md:text-left">
          <p className="animate-fade-up delay-100 font-heading text-[22px] md:text-[26px] font-bold tracking-[2px] text-accent2 mb-4">
            with Product &amp; People in mind
          </p>
          <h1 className="animate-fade-up delay-200 font-heading text-5xl md:text-[68px] font-extrabold text-black leading-[1.1] tracking-[-1px] mb-5">
            Building what&apos;s next
          </h1>
          <div className="animate-fade-up delay-300 w-20 h-1 bg-accent rounded-sm mb-6 mx-auto md:mx-0" />
          <div className="animate-fade-up delay-400 flex items-center justify-center md:justify-start gap-4 flex-wrap">
            <span className="font-body text-xl md:text-2xl font-bold text-text2 tracking-[0.5px]">
              AI
            </span>
            <span className="text-[28px] text-[rgba(15,23,42,0.15)]">·</span>
            <span className="font-body text-xl md:text-2xl font-bold text-text2 tracking-[0.5px]">
              Agile Product Delivery
            </span>
            <span className="text-[28px] text-[rgba(15,23,42,0.15)]">·</span>
            <span className="font-body text-xl md:text-2xl font-bold text-text2 tracking-[0.5px]">
              Leadership
            </span>
          </div>
          <div className="animate-fade-up delay-500 mt-10 flex items-center justify-center md:justify-start gap-4">
            <a
              href="#experience"
              className="font-heading text-sm font-bold bg-accent text-black px-7 py-3 rounded-lg hover:bg-accent-hover hover:shadow-[0_4px_30px_rgba(163,230,53,0.4)] transition-all"
            >
              Erfahrung ansehen
            </a>
            <a
              href="#contact"
              className="font-heading text-sm font-semibold text-text2 bg-pill-bg border border-accent-border px-7 py-3 rounded-lg hover:bg-[rgba(15,23,42,0.08)] hover:border-accent-border2 transition-all"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-600">
        <div className="w-6 h-10 border-2 border-accent-border2 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2.5 bg-accent2 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-heading text-[11px] font-semibold tracking-[4px] text-accent2 uppercase">
      {children}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-[40px] font-bold text-black tracking-[-0.5px] mt-3 mb-2">
      {children}
    </h2>
  );
}

function Divider() {
  return <div className="w-20 h-1 bg-accent rounded-sm" />;
}

function About() {
  return (
    <section id="about" className="py-24 bg-light">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionLabel>PROFIL</SectionLabel>
        <SectionTitle>Über mich</SectionTitle>
        <Divider />
        <div className="mt-10 grid md:grid-cols-[1fr_1fr] gap-12">
          <div>
            <p className="font-body text-base font-light leading-[1.6] text-text mb-6">
              Über 14 Jahre Erfahrung an der Schnittstelle von Technologie, Produkt und Organisation.
              Mein Weg vom Software Engineer über die Geschäftsführung eines eigenen Softwarehauses
              bis zur strategischen Beratung im KI- und Atlassian-Umfeld gibt mir ein seltenes
              Gesamtbild: Ich verstehe, wie Software entsteht, wie Produkte skalieren und wie
              Teams dafür aufgestellt sein müssen.
            </p>
            <p className="font-body text-base font-light leading-[1.6] text-text">
              Heute treibe ich KI-gestützte Produktentwicklung, agile Delivery-Exzellenz und
              datenbasierte Entscheidungsfindung in mittelständischen und Enterprise-Kontexten
              voran. Ich führe Teams nicht nur fachlich, sondern entwickle sie weiter — durch
              Mentoring, klare Strukturen und eine Kultur, in der Ownership und Qualität
              zusammenkommen.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Brain, label: "AI Product", desc: "KI-gestützte Produktentwicklung" },
              { icon: Target, label: "Agile Delivery", desc: "Scrum, Kanban, Lean" },
              { icon: Users, label: "Leadership", desc: "Teamführung & Mentoring" },
              { icon: Code, label: "Tech Background", desc: "Full-Stack Engineering" },
            ].map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="bg-card-bg border border-accent-border rounded-[20px] p-7 hover:bg-[rgba(15,23,42,0.06)] hover:border-accent-border2 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-accent2 mb-3" strokeWidth={1.5} />
                <h3 className="font-heading text-lg font-bold text-black mb-1">{label}</h3>
                <p className="font-body text-sm text-text2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ExperienceItemProps {
  title: string;
  company: string;
  location?: string;
  period: string;
  highlights: string[];
}

function ExperienceItem({ title, company, location, period, highlights }: ExperienceItemProps) {
  return (
    <div className="relative pl-8 pb-12 border-l-2 border-accent-border last:pb-0 group">
      <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-accent2 border-2 border-light group-hover:bg-accent group-hover:shadow-[0_0_12px_rgba(163,230,53,0.5)] transition-all" />
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
        <div>
          <h3 className="font-heading text-lg font-bold text-black">{title}</h3>
          <p className="font-body text-sm text-accent2 font-medium">
            {company}
            {location && <span className="text-text3"> · {location}</span>}
          </p>
        </div>
        <span className="font-body text-sm text-text3 whitespace-nowrap">{period}</span>
      </div>
      <ul className="space-y-2">
        {highlights.map((h, i) => (
          <li key={i} className="flex gap-2 text-sm font-light leading-[1.6] text-text">
            <ChevronRight className="w-4 h-4 text-accent2 mt-0.5 shrink-0" strokeWidth={2} />
            <span className="font-body">{h}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Experience() {
  const jobs: ExperienceItemProps[] = [
    {
      title: "Principal Project Manager & AI Product Lead",
      company: "XALT Business Consulting GmbH",
      period: "Okt 2025 – Mär 2026",
      highlights: [
        "End-to-End-Steuerung von Kundenprojekten im Bereich digitale Transformation, Atlassian-basiertes Projektportfoliomanagement und DevOps-Transformation.",
        "Aufbau und Leitung des Bereichs KI-Enablement für mittelständische Unternehmen (50–5.000 Mitarbeiter). Konzeption marktfähiger KI-Produkte und AI-Agent-Services.",
        "Fachliche Teamleitung des PM-Teams. Etablierung einheitlicher Best Practices und aktives Mentoring von Junior- und Mid-Level-Projektmanagern.",
        "Einführung KI-gestützter Workflows und AI-Agent-Lösungen über alle internen Abteilungen hinweg.",
      ],
    },
    {
      title: "Business Product Owner",
      company: "Athlon Germany GmbH",
      location: "Düsseldorf",
      period: "Feb 2024 – Okt 2025",
      highlights: [
        "End-to-End-Verantwortung für zentrale Mobilitätslösungen im Konzernumfeld. Fachliche Führung zweier cross-funktionaler Entwicklungsteams.",
        "Umsetzung der elektronischen Rechnungsverarbeitung 2025 (XRechnung, ZUGFeRD) inkl. XML-/XSD-Validierung und revisionssicherer Archivierung.",
        "Steigerung der Testabdeckung von 5% auf >80% für 33 Microservices. Release-Rollbacks um >90% reduziert.",
        "Weiterentwicklung der Systemarchitektur von monolithischen Strukturen zu Event-Driven-Microservices.",
      ],
    },
    {
      title: "Senior Product Owner & Projektmanager",
      company: "NETZSCH Gerätebau GmbH & Co. KG",
      location: "Selb / Krakow",
      period: "Mär 2024 – Dez 2024",
      highlights: [
        "Product Owner für internationales Kundenportal zur konsolidierten Auswertung technischer Gerätedaten.",
        "Verfünffachung des Projektfortschritts durch strukturiertes Backlog und präzise User Stories.",
        "Reduktion des Koordinationsaufwands um 25% durch Lean-Workflows.",
      ],
    },
    {
      title: "Berater für IT-Projektleitung und Produktmanagement",
      company: "Selbstständig",
      location: "Selb",
      period: "Okt 2023 – heute",
      highlights: [
        "Freiberuflicher Senior Consultant für IT-Projektleitung und Produktmanagement. End-to-End-Betreuung komplexer Softwareprojekte.",
        "Kunden: NETZSCH Gerätebau GmbH (SaaS-Plattform, KI-Messdaten), Bundesagentur für Arbeit (EAMZ), Vishay Germany GmbH.",
        "Lead Software Engineer des Großprojekts EAMZ — Orchestrierung zweier Entwicklungsteams, Architektur des Registrierungs-Frontends.",
      ],
    },
    {
      title: "Geschäftsführer · Projektleiter · Senior Software Engineer",
      company: "Fronetic GmbH",
      location: "Hof",
      period: "2015 – Okt 2023",
      highlights: [
        "Strategische Neuausrichtung vom Beratungsunternehmen zum Full-Service-Softwarehaus. Wachstum von 3 auf 11 Spezialisten (>250%).",
        "Kontinuierliche Umsatzsteigerung von 15–20% YoY durch deutschlandweite Key-Account-Akquise.",
        "Senkung der operativen Kosten um 50% durch Prozessoptimierung.",
        "Kunden: Nvidia Deutschland, GfK, CUBE, öffentliche Verwaltung der Bundesrepublik Deutschland.",
      ],
    },
    {
      title: "Softwareentwickler",
      company: "Moyoki GmbH / Moyoki UG",
      location: "Selb",
      period: "Jan 2011 – Nov 2015",
      highlights: [
        "Entwicklung von Mobile Apps und Web-Applikationen für regionale Kunden sowie interne Produktideen.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-light2">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionLabel>BERUFSERFAHRUNG</SectionLabel>
        <SectionTitle>Karriere</SectionTitle>
        <Divider />
        <div className="mt-12 max-w-3xl">
          {jobs.map((job) => (
            <ExperienceItem key={job.title + job.company} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skillGroups = [
    {
      icon: Target,
      title: "Projektmanagement",
      tags: ["Agiles PM", "Scrum / Kanban", "Roadmapping", "Risikomanagement", "Budget- & Ressourcenplanung", "Stakeholder-Management", "Go-Live-Management", "KPI-Tracking"],
    },
    {
      icon: BarChart3,
      title: "Produktentwicklung",
      tags: ["Produktstrategie", "Produktvision & Roadmap", "User Research", "Backlog Management", "Priorisierung", "Data-Driven Decisions", "UX/UI Zusammenarbeit", "AI-gestützte Produktentwicklung"],
    },
    {
      icon: FileText,
      title: "Requirements Engineering",
      tags: ["Anforderungsanalyse", "Use Cases", "User Stories / Epics", "BPMN", "UML", "Akzeptanzkriterien", "Gap-Analyse", "Schnittstellenspezifikationen"],
    },
    {
      icon: Brain,
      title: "Business Analyse",
      tags: ["Prozessanalyse", "Prozessoptimierung", "End-to-End Betrachtung", "Datenanalyse", "Dashboards & KPIs", "Digitalisierung", "Stakeholder Workshops"],
    },
    {
      icon: Users,
      title: "Teammanagement",
      tags: ["Teamführung", "Moderation", "Coaching", "Konfliktmanagement", "Agile Leadership", "Cross-funktionale Zusammenarbeit", "Mentoring"],
    },
    {
      icon: Code,
      title: "Software Architektur",
      tags: ["Microservices", "REST APIs / API Design", "Cloud (Azure/AWS)", "CI/CD", "Docker", "Clean Architecture", "Datenmodelle"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-light">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionLabel>KOMPETENZEN</SectionLabel>
        <SectionTitle>Skills</SectionTitle>
        <Divider />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map(({ icon: Icon, title, tags }) => (
            <div
              key={title}
              className="bg-card-bg border border-accent-border rounded-[20px] p-[36px_28px] hover:bg-[rgba(15,23,42,0.06)] hover:border-accent-border2 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Icon className="w-8 h-8 text-accent2 mb-4" strokeWidth={1.5} />
              <h3 className="font-heading text-lg font-bold text-black mb-4">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-heading text-[11px] font-semibold text-text2 bg-pill-bg border border-accent-border rounded-lg px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  const certs = [
    { name: "Certified Scrum Professional - Product Owner® (CSP-PO)", org: "Scrum Alliance Inc.", date: "Dezember 2025" },
    { name: "Advanced Certified Scrum Product Owner® (A-CSPO)", org: "Scrum Alliance Inc.", date: "November 2023" },
    { name: "Certified Scrum Product Owner® (CSPO)", org: "Scrum Alliance Inc.", date: "Januar 2023" },
  ];

  return (
    <section className="py-24 bg-light2">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionLabel>ZERTIFIZIERUNGEN</SectionLabel>
        <SectionTitle>Zertifikate</SectionTitle>
        <Divider />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {certs.map((cert) => (
            <div
              key={cert.name}
              className="bg-[rgba(163,230,53,0.06)] border border-[rgba(132,204,22,0.28)] rounded-[20px] p-[36px_28px] hover:-translate-y-0.5 transition-all duration-300"
            >
              <Award className="w-8 h-8 text-accent2 mb-4" strokeWidth={1.5} />
              <h3 className="font-heading text-base font-bold text-black mb-2">{cert.name}</h3>
              <p className="font-body text-sm text-text2">{cert.org}</p>
              <p className="font-body text-sm text-text3 mt-1">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  const edu = [
    { title: "Angewandte Informatik", institution: "Fachhochschule München", location: "München", year: "2012" },
    { title: "Fachhochschulreife — Technik", institution: "Berufsoberschule Regensburg", location: "Regensburg", year: "2010" },
    { title: "Fachinformatiker für Anwendungsentwicklung", institution: "Le-Go GmbH", location: "Hof", year: "2009" },
  ];

  return (
    <section id="education" className="py-24 bg-light">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <SectionLabel>AUSBILDUNG</SectionLabel>
            <SectionTitle>Bildung</SectionTitle>
            <Divider />
            <div className="mt-10 space-y-6">
              {edu.map((e) => (
                <div key={e.title} className="flex gap-4">
                  <GraduationCap className="w-6 h-6 text-accent2 mt-1 shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-heading text-base font-bold text-black">{e.title}</h3>
                    <p className="font-body text-sm text-text2">{e.institution} · {e.location}</p>
                    <p className="font-body text-sm text-text3">{e.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionLabel>SPRACHEN</SectionLabel>
            <SectionTitle>Sprachen</SectionTitle>
            <Divider />
            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <Globe className="w-6 h-6 text-accent2 shrink-0" strokeWidth={1.5} />
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-heading text-base font-bold text-black">Deutsch</span>
                    <span className="font-body text-sm text-text3">Muttersprache (C2)</span>
                  </div>
                  <div className="h-2 bg-light3 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-accent2 rounded-full" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Globe className="w-6 h-6 text-accent2 shrink-0" strokeWidth={1.5} />
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-heading text-base font-bold text-black">Englisch</span>
                    <span className="font-body text-sm text-text3">Verhandlungssicher (C1)</span>
                  </div>
                  <div className="h-2 bg-light3 rounded-full overflow-hidden">
                    <div className="h-full w-[88%] bg-accent2 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ContactForm } from "./components/ContactForm";

function Contact() {
  return (
    <section id="contact" className="py-24 bg-light2">
      <div className="mx-auto max-w-[800px] px-6 text-center">
        <SectionLabel>KONTAKT</SectionLabel>
        <SectionTitle>Let&apos;s connect</SectionTitle>
        <Divider />
        <p className="font-body text-base font-light leading-[1.6] text-text mt-6 mb-10 max-w-lg mx-auto">
          Interesse an einer Zusammenarbeit oder einem Austausch? Ich freue mich über Ihre Nachricht.
        </p>
        <div className="bg-card-bg border border-accent-border rounded-[20px] p-8">
          <ContactForm
            reasons={["Zusammenarbeit", "Austausch", "Jobangebot", "Sonstiges"]}
          />
        </div>
        <div className="flex items-center justify-center gap-6 mt-8">
          <a
            href="https://www.linkedin.com/in/sebastian-pieper-selb/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text2 hover:text-black transition-colors"
          >
            <Linkedin className="w-4 h-4" strokeWidth={1.5} />
            <span className="font-body text-sm">LinkedIn</span>
          </a>
        </div>
        <div className="flex items-center justify-center gap-2 mt-4 text-text3">
          <MapPin className="w-4 h-4" strokeWidth={1.5} />
          <span className="font-body text-sm">Selb, Bayern</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 bg-light border-t border-accent-border">
      <div className="mx-auto max-w-[1200px] px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-heading text-sm font-bold tracking-[4px] text-black">SP</span>
          <span className="font-body text-xs text-text3">© {new Date().getFullYear()} Sebastian Pieper</span>
        </div>
        <p className="font-body text-xs text-text3">
          Building what&apos;s next — with people and product in mind.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
