import React, { useState, useEffect, useRef } from 'react';
import {
  Code,
  Smartphone,
  Database,
  Palette,
  ArrowDownRight,
  ChevronDown,
  Mail,
  Phone,
  GraduationCap,
  ExternalLink,
  Languages,
  Check,
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const sections = ['hero', 'about', 'skills', 'experience', 'certification', 'project-1', 'contact'];

const translations = {
  id: {
    languageLabel: 'Bahasa',
    nav: {
      hero: 'Beranda',
      about: 'Tentang',
      skills: 'Keahlian',
      experience: 'Pengalaman',
      certification: 'Sertifikasi',
      'project-1': 'Proyek',
      contact: 'Kontak',
    },
    brand: 'Ergy David L. Tumanggor',
    role: 'Sarjana Komputer | Teknik Informatika',
    heroLead: 'Saya memiliki ketertarikan mendalam dalam menciptakan produk digital yang modern.',
    heroCta: 'Scroll untuk melihat',
    aboutTitle: 'Cerita Saya',
    aboutParagraphs: [
      'Sebagai lulusan Sarjana Teknik Informatika dengan predikat Cum Laude dari Universitas Methodist Indonesia, saya memiliki pengalaman praktis dalam pengembangan aplikasi mobile, web, dan sistem back-end, serta keahlian dalam data science dan machine learning.',
      'Saya adalah tipe orang yang sangat antusias dengan tantangan baru dan selalu proaktif mencari peluang untuk mengembangkan skill. Tujuan saya adalah bergabung dengan tim yang dinamis di mana saya bisa berkontribusi secara nyata sekaligus terus bertumbuh menjadi profesional yang ahli di bidang ini.',
    ],
    skillsTitle: 'Keahlian',
    frontEndTitle: 'Front-End & UI',
    frontEndBody: 'Menjembatani desain visual dan fungsionalitas menggunakan HTML, CSS, dan Tailwind CSS untuk hasil yang pixel-perfect.',
    mobileTitle: 'Mobile Apps',
    mobileBody: 'Menerapkan best practices pengembangan mobile menggunakan React Native, Kotlin, dan Java (Alumni Bangkit Academy).',
    backEndTitle: 'Back-End System',
    backEndBody: 'Membangun logika server dan pengelolaan database yang kokoh dengan PHP Native & framework Laravel.',
    dataTitle: 'Data & Machine Learning',
    dataBody: 'Mengolah data dan mengembangkan model AI/ML menggunakan Python, seperti sistem deteksi Deepfake.',
    experienceTitle: 'Jejak Karir',
    bangkitRole: 'Android Developer Cohort',
    bangkitOrg: 'Bangkit Academy led by Google, GoTo, dan Traveloka',
    bangkitBody: 'Menyelesaikan pelatihan intensif yang dipimpin oleh ahli industri. Menerapkan best practices pengembangan aplikasi Android secara riil, mencakup arsitektur modern, navigasi, dan integrasi API.',
    internRole: 'IT Intern',
    internOrg: 'Pengadilan Tata Usaha Negara Medan',
    internBody: 'Mendukung operasional sistem TI peradilan. Merancang dan membangun "Si Butet" (Sistem Buku Tamu Elektronik) untuk mendigitalisasi layanan publik.',
    certificationTitle: 'Sertifikasi',
    certificationCardTitle: 'Data Science - BNSP',
    certificationCardBody: 'Sertifikasi resmi dari Badan Nasional Sertifikasi Profesi yang memvalidasi kompetensi analisis data, pengolahan dataset, dan penyajian insight.',
    focusLabel: 'Fokus',
    focusValue: 'Data Analysis, Machine Learning',
    projectLabel1: '01 / PROYEK PENELITIAN',
    projectTitle1: 'Sistem Deteksi Video Deepfake',
    projectSubtitle1: 'Sebagai peneliti.',
    projectBody1: 'Merancang dan mengembangkan model Machine Learning untuk mendeteksi manipulasi video. Menggunakan ekstraksi fitur Local Binary Pattern (LBP) yang dikombinasikan dengan klasifikasi Support Vector Machine (SVM).',
    projectLabel2: '02 / WEB APP',
    projectTitle2: 'Si Butet (Sistem Buku Tamu Elektronik)',
    projectSubtitle2: 'Sebagai tim leader & developer.',
    projectBody2: 'Merancang dan mengembangkan sistem informasi berbasis website untuk mendigitalisasi pencatatan pengunjung di PTUN Medan. Fokus pada efisiensi, keamanan data real-time, dan kemudahan monitoring.',
    projectLabel3: '03 / MOBILE APP',
    projectTitle3: 'Aplikasi Rekomendasi Wisata',
    projectSubtitle3: 'Sebagai Android Developer.',
    projectBody3: 'Merancang dan membangun aplikasi mobile yang menyajikan informasi detail dan memberikan rekomendasi cerdas untuk membantu pengguna dalam merencanakan perjalanan mereka.',
    viewProject: 'LIHAT PROYEK',
    contactTitle: 'MARI BERKOLABORASI.',
    contactLead: 'Terbuka untuk kolaborasi, freelance, dan peluang kerja penuh waktu. Silakan pilih kanal yang paling nyaman untuk menghubungi saya.',
    cvButton: 'UNDUH CV',
    footerLeft: '© 2026 ERGY DAVID L.T.',
    footerRight: 'PORTOFOLIO',
  },
  en: {
    languageLabel: 'Language',
    nav: {
      hero: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      certification: 'Certification',
      'project-1': 'Projects',
      contact: 'Contact',
    },
    brand: 'Ergy David L. Tumanggor',
    role: 'Bachelor of Computer Science | Informatics Engineering',
    heroLead: 'I am deeply interested in creating modern digital products.',
    heroCta: 'Scroll to explore',
    aboutTitle: 'My Story',
    aboutParagraphs: [
      'As a Cum Laude graduate in Informatics Engineering from Universitas Methodist Indonesia, I have practical experience in mobile app, web, and back-end development, as well as data science and machine learning skills.',
      'I am the kind of person who is excited by new challenges and consistently seeks opportunities to sharpen my skills. My goal is to join a dynamic team where I can contribute meaningfully while continuing to grow as a professional in this field.',
    ],
    skillsTitle: 'Skills',
    frontEndTitle: 'Front-End & UI',
    frontEndBody: 'Connecting visual design and functionality with HTML, CSS, and Tailwind CSS for pixel-perfect results.',
    mobileTitle: 'Mobile Apps',
    mobileBody: 'Applying mobile development best practices with React Native, Kotlin, and Java (Bangkit Academy alumnus).',
    backEndTitle: 'Back-End System',
    backEndBody: 'Building reliable server logic and database management with native PHP and the Laravel framework.',
    dataTitle: 'Data & Machine Learning',
    dataBody: 'Processing data and developing AI/ML models with Python, such as deepfake detection systems.',
    experienceTitle: 'Career Track',
    bangkitRole: 'Android Developer Cohort',
    bangkitOrg: 'Bangkit Academy led by Google, GoTo, and Traveloka',
    bangkitBody: 'Completed intensive training led by industry experts. Applied real-world Android best practices, including modern architecture, navigation, and API integration.',
    internRole: 'IT Intern',
    internOrg: 'Medan State Administrative Court',
    internBody: 'Supported judicial IT operations. Designed and built "Si Butet" (Electronic Guest Book System) to digitize public services.',
    certificationTitle: 'Certification',
    certificationCardTitle: 'Data Science - BNSP',
    certificationCardBody: 'Official certification from the National Professional Certification Agency validating data analysis, dataset processing, and insight presentation skills.',
    focusLabel: 'Focus',
    focusValue: 'Data Analysis, Machine Learning',
    projectLabel1: '01 / RESEARCH PROJECT',
    projectTitle1: 'Deepfake Video Detection System',
    projectSubtitle1: 'As a researcher.',
    projectBody1: 'Designed and developed a Machine Learning model to detect video manipulation. It uses Local Binary Pattern (LBP) feature extraction combined with Support Vector Machine (SVM) classification.',
    projectLabel2: '02 / WEB APP',
    projectTitle2: 'Si Butet (Electronic Guest Book System)',
    projectSubtitle2: 'As team leader & developer.',
    projectBody2: 'Designed and developed a web-based information system to digitize visitor logging at PTUN Medan. The focus was efficiency, real-time data security, and easy monitoring.',
    projectLabel3: '03 / MOBILE APP',
    projectTitle3: 'Tour Recommendation App',
    projectSubtitle3: 'As Android Developer.',
    projectBody3: 'Designed and built a mobile app that delivers detailed information and smart recommendations to help users plan their trips.',
    viewProject: 'VIEW PROJECT',
    contactTitle: 'LET’S COLLABORATE.',
    contactLead: 'Open for collaboration, freelance work, and full-time opportunities. Choose the channel that is most convenient for you.',
    cvButton: 'DOWNLOAD CV',
    footerLeft: '© 2026 ERGY DAVID L.T.',
    footerRight: 'PORTFOLIO',
  },
  de: {
    languageLabel: 'Sprache',
    nav: {
      hero: 'Startseite',
      about: 'Über mich',
      skills: 'Fähigkeiten',
      experience: 'Erfahrung',
      certification: 'Zertifikate',
      'project-1': 'Projekte',
      contact: 'Kontakt',
    },
    brand: 'Ergy David L. Tumanggor',
    role: 'Bachelor of Computer Science | Informatik',
    heroLead: 'Ich entwickle mit großem Interesse moderne digitale Produkte.',
    heroCta: 'Zum Entdecken scrollen',
    aboutTitle: 'Meine Geschichte',
    aboutParagraphs: [
      'Als Cum-Laude-Absolvent der Informatik an der Universitas Methodist Indonesia verfüge ich über praktische Erfahrung in der Entwicklung von Mobile Apps, Web- und Back-End-Systemen sowie über Kenntnisse in Data Science und Machine Learning.',
      'Ich bin jemand, der neue Herausforderungen liebt und ständig nach Möglichkeiten sucht, seine Fähigkeiten weiterzuentwickeln. Mein Ziel ist es, Teil eines dynamischen Teams zu werden, in dem ich spürbar beitragen und mich gleichzeitig fachlich weiterentwickeln kann.',
    ],
    skillsTitle: 'Fähigkeiten',
    frontEndTitle: 'Front-End & UI',
    frontEndBody: 'Visuelles Design und Funktionalität mit HTML, CSS und Tailwind CSS für pixelgenaue Ergebnisse verbinden.',
    mobileTitle: 'Mobile Apps',
    mobileBody: 'Mobile Best Practices mit React Native, Kotlin und Java umsetzen (Bangkit Academy Absolvent).',
    backEndTitle: 'Back-End System',
    backEndBody: 'Robuste Serverlogik und Datenbankverwaltung mit nativem PHP und dem Laravel-Framework aufbauen.',
    dataTitle: 'Data & Machine Learning',
    dataBody: 'Daten verarbeiten und AI/ML-Modelle mit Python entwickeln, z. B. Deepfake-Erkennungssysteme.',
    experienceTitle: 'Karriereweg',
    bangkitRole: 'Android Developer Cohort',
    bangkitOrg: 'Bangkit Academy unter der Leitung von Google, GoTo und Traveloka',
    bangkitBody: 'Intensives Training unter Anleitung von Branchenexperten abgeschlossen. Dabei moderne Architektur, Navigation und API-Integration in echten Android-Projekten angewendet.',
    internRole: 'IT-Praktikant',
    internOrg: 'Verwaltungsgericht Medan',
    internBody: 'Den IT-Betrieb des Gerichts unterstützt. „Si Butet“ (Elektronisches Gästebuchsystem) entworfen und entwickelt, um öffentliche Dienste zu digitalisieren.',
    certificationTitle: 'Zertifikate',
    certificationCardTitle: 'Data Science - BNSP',
    certificationCardBody: 'Offizielles Zertifikat der nationalen Berufsakkreditierungsstelle, das Datenanalyse, Datensatzverarbeitung und Insights-Visualisierung bestätigt.',
    focusLabel: 'Schwerpunkt',
    focusValue: 'Data Analysis, Machine Learning',
    projectLabel1: '01 / FORSCHUNGSPROJEKT',
    projectTitle1: 'Deepfake-Videoerkennungssystem',
    projectSubtitle1: 'Als Forscher.',
    projectBody1: 'Ein Machine-Learning-Modell zur Erkennung von Videomanipulation entworfen und entwickelt. Dabei werden Local Binary Pattern (LBP) Features mit Support Vector Machine (SVM) kombiniert.',
    projectLabel2: '02 / WEB APP',
    projectTitle2: 'Si Butet (Elektronisches Gästebuchsystem)',
    projectSubtitle2: 'Als Teamleiter & Entwickler.',
    projectBody2: 'Ein webbasiertes Informationssystem entworfen und entwickelt, um Besucherprotokolle am PTUN Medan zu digitalisieren. Fokus auf Effizienz, Echtzeit-Datensicherheit und einfache Überwachung.',
    projectLabel3: '03 / MOBILE APP',
    projectTitle3: 'Reiseempfehlungs-App',
    projectSubtitle3: 'Als Android-Entwickler.',
    projectBody3: 'Eine mobile App entworfen und entwickelt, die detaillierte Informationen und intelligente Empfehlungen für Reiseplanungen bietet.',
    viewProject: 'PROJEKT ANSEHEN',
    contactTitle: 'LASS UNS ZUSAMMENARBEITEN.',
    contactLead: 'Offen für Zusammenarbeit, freiberufliche Projekte und Vollzeitstellen. Wähle einfach den bequemsten Kontaktweg.',
    cvButton: 'CV HERUNTERLADEN',
    footerLeft: '© 2026 ERGY DAVID L.T.',
    footerRight: 'PORTFOLIO',
  },
  fr: {
    languageLabel: 'Langue',
    nav: {
      hero: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      experience: 'Expérience',
      certification: 'Certifications',
      'project-1': 'Projets',
      contact: 'Contact',
    },
    brand: 'Ergy David L. Tumanggor',
    role: 'Licence en informatique | Génie informatique',
    heroLead: 'Je suis profondément intéressé par la création de produits numériques modernes.',
    heroCta: 'Faire défiler pour découvrir',
    aboutTitle: 'Mon histoire',
    aboutParagraphs: [
      'Diplômé en génie informatique avec mention Cum Laude de l’Universitas Methodist Indonesia, j’ai une expérience pratique en développement mobile, web et back-end, ainsi qu’en data science et machine learning.',
      'Je suis une personne qui aime les nouveaux défis et qui cherche constamment des occasions d’améliorer ses compétences. Mon objectif est de rejoindre une équipe dynamique où je peux contribuer concrètement tout en continuant à progresser en tant que professionnel dans ce domaine.',
    ],
    skillsTitle: 'Compétences',
    frontEndTitle: 'Front-End & UI',
    frontEndBody: 'Relier le design visuel et la fonctionnalité avec HTML, CSS et Tailwind CSS pour un rendu pixel-perfect.',
    mobileTitle: 'Applications mobiles',
    mobileBody: 'Appliquer les bonnes pratiques du développement mobile avec React Native, Kotlin et Java (ancien de Bangkit Academy).',
    backEndTitle: 'Back-End System',
    backEndBody: 'Construire une logique serveur fiable et la gestion de base de données avec PHP natif et le framework Laravel.',
    dataTitle: 'Data & Machine Learning',
    dataBody: 'Traiter les données et développer des modèles AI/ML avec Python, comme des systèmes de détection de deepfake.',
    experienceTitle: 'Parcours',
    bangkitRole: 'Android Developer Cohort',
    bangkitOrg: 'Bangkit Academy dirigée par Google, GoTo et Traveloka',
    bangkitBody: 'Formation intensive menée par des experts du secteur. Application concrète des bonnes pratiques Android, notamment l’architecture moderne, la navigation et l’intégration API.',
    internRole: 'Stagiaire IT',
    internOrg: 'Tribunal administratif de Medan',
    internBody: 'Soutien aux opérations informatiques du tribunal. Conception et développement de « Si Butet » (système électronique de registre des visiteurs) pour numériser les services publics.',
    certificationTitle: 'Certifications',
    certificationCardTitle: 'Data Science - BNSP',
    certificationCardBody: 'Certification officielle de l’agence nationale de certification professionnelle validant l’analyse de données, le traitement de jeux de données et la présentation d’insights.',
    focusLabel: 'Focus',
    focusValue: 'Data Analysis, Machine Learning',
    projectLabel1: '01 / PROJET DE RECHERCHE',
    projectTitle1: 'Système de détection de vidéos deepfake',
    projectSubtitle1: 'En tant que chercheur.',
    projectBody1: 'Conception et développement d’un modèle de Machine Learning pour détecter la manipulation vidéo. Utilisation de Local Binary Pattern (LBP) combiné à la classification Support Vector Machine (SVM).',
    projectLabel2: '02 / WEB APP',
    projectTitle2: 'Si Butet (Système électronique de registre des visiteurs)',
    projectSubtitle2: 'En tant que chef d’équipe & développeur.',
    projectBody2: 'Conception et développement d’un système d’information web pour digitaliser l’enregistrement des visiteurs au PTUN Medan. Priorité à l’efficacité, à la sécurité des données en temps réel et au suivi simple.',
    projectLabel3: '03 / APPLICATION MOBILE',
    projectTitle3: 'Application de recommandations de voyage',
    projectSubtitle3: 'En tant que développeur Android.',
    projectBody3: 'Conception et développement d’une application mobile offrant des informations détaillées et des recommandations intelligentes pour aider les utilisateurs à planifier leurs voyages.',
    viewProject: 'VOIR LE PROJET',
    contactTitle: 'COLLABORONS ENSEMBLE.',
    contactLead: 'Ouvert à la collaboration, aux missions freelance et aux opportunités à temps plein. Choisissez simplement le canal le plus pratique.',
    cvButton: 'TÉLÉCHARGER LE CV',
    footerLeft: '© 2026 ERGY DAVID L.T.',
    footerRight: 'PORTFOLIO',
  },
};

const availableLanguages = [
  { code: 'id', label: 'Indonesia', shortLabel: 'ID' },
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'de', label: 'Deutsch', shortLabel: 'DE' },
  { code: 'fr', label: 'Français', shortLabel: 'FR' },
];

const desktopSectionOrder = [
  'hero',
  'about',
  'skills',
  'experience',
  'certification',
  'project-1',
  'project-2',
  'project-3',
  'contact'
];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [visibleSection, setVisibleSection] = useState('hero');
  const [isDesktop, setIsDesktop] = useState(false);
  const [language, setLanguage] = useState('id');
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const observer = useRef(null);
  const wheelLockRef = useRef(false);
  const copy = translations[language];
  const cvHref = `${import.meta.env.BASE_URL}CV-English-Main.pdf`;

  const getSectionId = (id) => (id.startsWith('project') ? 'project-1' : id);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)');

    const handleChange = () => {
      setIsDesktop(mediaQuery.matches);
    };

    handleChange();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      observer.current?.disconnect();
      return;
    }

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setVisibleSection(sectionId);
          setActiveSection(getSectionId(sectionId));
        }
      });
    }, { threshold: 0.5 });

    const sectionElements = document.querySelectorAll('section');
    sectionElements.forEach((el) => observer.current.observe(el));

    return () => {
      observer.current?.disconnect();
    };
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) {
      return;
    }

    const handleWheel = (event) => {
      event.preventDefault();

      if (wheelLockRef.current) {
        return;
      }

      if (event.deltaY === 0) {
        return;
      }

      const currentIndex = desktopSectionOrder.indexOf(visibleSection);
      if (currentIndex === -1) {
        return;
      }

      const nextIndex = event.deltaY > 0 ? currentIndex + 1 : currentIndex - 1;
      const nextSectionId = desktopSectionOrder[nextIndex];

      if (!nextSectionId) {
        return;
      }

      wheelLockRef.current = true;
      scrollToSection(nextSectionId);

      window.setTimeout(() => {
        wheelLockRef.current = false;
      }, 850);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isDesktop, visibleSection]);

  useEffect(() => {
    const handlePointerDown = (event) => {
      const target = event.target;
      if (target instanceof Element && !target.closest('[data-language-switcher]')) {
        setIsLanguageMenuOpen(false);
      }
    };

    window.addEventListener('pointerdown', handlePointerDown);

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, []);

  useEffect(() => {
    setIsLanguageMenuOpen(false);
  }, [language]);

  const scrollToSection = (id) => {
    setVisibleSection(id);
    setActiveSection(getSectionId(id));

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-[100svh] w-full overflow-y-auto lg:overflow-y-scroll snap-none lg:snap-y lg:snap-mandatory bg-zinc-950 text-zinc-50 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] font-sans selection:bg-white selection:text-zinc-900 overflow-x-hidden">
      <div className="fixed right-3 top-3 z-50" data-language-switcher>
        <button
          type="button"
          onClick={() => setIsLanguageMenuOpen((value) => !value)}
          className={`inline-flex items-center gap-2 rounded-full border bg-zinc-950/85 px-3 py-2 text-xs font-semibold tracking-[0.22em] text-white shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-200 hover:border-white/20 hover:bg-zinc-900/90 active:scale-[0.98] ${isLanguageMenuOpen ? 'border-white/25 ring-1 ring-white/10' : 'border-white/10'}`}
          aria-expanded={isLanguageMenuOpen}
          aria-label={copy.languageLabel}
        >
          <Languages size={15} />
          <span className="hidden sm:inline">{copy.languageLabel}</span>
          <span>{availableLanguages.find((item) => item.code === language)?.shortLabel}</span>
          <ChevronDown size={14} className={`transition-transform duration-200 ${isLanguageMenuOpen ? 'rotate-180' : 'rotate-0'}`} />
        </button>

        <div className={`absolute right-0 top-full mt-2 w-[min(17rem,calc(100vw-1.5rem))] origin-top-right overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/95 shadow-2xl shadow-black/40 backdrop-blur-xl transition-[opacity,transform,filter] duration-200 ease-out will-change-transform sm:w-[20rem] ${isLanguageMenuOpen ? 'pointer-events-auto translate-y-0 scale-100 opacity-100 blur-0' : 'pointer-events-none -translate-y-2 scale-[0.98] opacity-0 blur-[1px]'}`}>
          <div className="border-b border-white/10 px-4 py-3">
            <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">{copy.languageLabel}</p>
            <p className="mt-1 text-sm font-semibold text-white">{copy.languageLabel}</p>
          </div>
          <div className="p-2">
            {availableLanguages.map((item) => {
              const isActive = language === item.code;

              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLanguage(item.code)}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition-colors ${isActive ? 'bg-white text-zinc-950' : 'text-zinc-300 hover:bg-white/5 hover:text-white'}`}
                >
                  <span className="flex items-center gap-3 text-sm font-semibold tracking-wide">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-[10px] tracking-[0.25em] text-zinc-400">
                      {item.shortLabel}
                    </span>
                    <span>{item.label}</span>
                  </span>
                  {isActive ? <Check size={16} /> : <span className="h-2 w-2 rounded-full bg-zinc-600" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden flex-col gap-5 mix-blend-difference lg:flex">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center justify-end"
            title={copy.nav[section.id]}
          >
            <span className={`absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs tracking-widest uppercase font-semibold mr-2 ${activeSection === section.id ? 'text-white' : 'text-zinc-400'}`}>
              {copy.nav[section.id]}
            </span>
            <div className={`transition-all duration-500 ease-out ${
              activeSection === section.id 
                ? 'w-2 h-8 bg-white' 
                : 'w-1 h-3 bg-zinc-600 group-hover:h-5 group-hover:bg-zinc-400'
            }`} />
          </button>
        ))}
      </div>

      {/* SECTION 1: HERO */}
      <section id="hero" className="min-h-[100svh] w-full lg:snap-start flex flex-col justify-center px-6 sm:px-8 lg:px-24 py-16 lg:py-0 relative overflow-hidden bg-zinc-950">
        <div className="max-w-7xl z-10 w-full py-20 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 xl:gap-32 items-center">
            <div className="pointer-events-none absolute -left-16 top-16 hero-orb bg-white/8 soft-pulse" />
            <div className="pointer-events-none absolute right-0 top-1/3 hero-orb hero-orb-secondary bg-white/5 soft-pulse" />

            <div className="lg:col-span-5 order-2 lg:order-1 max-w-xl">
              <h1 className="fade-rise text-4xl sm:text-5xl md:text-7xl lg:text-[7.5rem] xl:text-[8.5rem] font-bold tracking-tighter leading-[0.9] text-white max-w-fit">
                <span className="block lg:whitespace-nowrap">ERGY DAVID</span>
                <span className="block">LUNDY TUMANGGOR</span>
              </h1>
              <p className="fade-rise fade-rise-delay-1 mt-6 text-sm md:text-base tracking-widest uppercase font-semibold text-zinc-400">
                {copy.role}
              </p>
              <p className="fade-rise fade-rise-delay-2 mt-8 text-base sm:text-lg md:text-2xl lg:text-3xl text-zinc-400 font-light max-w-xl leading-relaxed">
                {copy.heroLead}
              </p>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 w-full flex lg:justify-end lg:pl-6 xl:pl-12">
              <div className="motion-safe-reveal w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[500px] lg:ml-auto lg:mr-[-2rem] xl:mr-[-4rem] aspect-[4/5] rounded-[2rem] p-3 bg-gradient-to-br from-white/15 via-white/5 to-white/10 shadow-2xl shadow-black/40 ring-1 ring-white/10 backdrop-blur-sm">
                <div className="h-full w-full rounded-[1.4rem] overflow-hidden bg-zinc-800 transition-all duration-500 relative">
                  <img
                    src="images/profil.jpg"
                    alt="Ergy David Lundy Tumanggor"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-8 lg:left-24">
          <button onClick={() => scrollToSection('about')} className="flex items-center gap-3 text-sm tracking-widest uppercase text-zinc-500 hover:text-white transition-colors group">
            {copy.heroCta}
            <ArrowDownRight className="group-hover:translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* SECTION 2: TENTANG SAYA */}
      <section id="about" className="min-h-[100svh] w-full lg:snap-start flex flex-col justify-center px-6 sm:px-8 lg:px-24 py-16 lg:py-0 bg-zinc-900">
        <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-4 fade-rise">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">{copy.aboutTitle}</h2>
            <div className="w-20 h-1 bg-white mb-8"></div>
            
          </div>
          
          <div className="lg:col-span-8 space-y-6 lg:space-y-8 text-base sm:text-lg md:text-2xl font-light leading-relaxed text-zinc-300 fade-rise fade-rise-delay-1">
            {copy.aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: KEAHLIAN */}
      <section id="skills" className="min-h-[100svh] w-full lg:snap-start flex flex-col justify-center px-6 sm:px-8 lg:px-24 py-16 lg:py-0 bg-zinc-950">
        <div className="max-w-7xl w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter fade-rise">{copy.skillsTitle}</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-12 mb-12 md:mb-16 opacity-80">
            <div className="flex flex-col items-center gap-3 hover:text-white hover:-translate-y-1 transition-all motion-safe-reveal">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" alt="Kotlin" className="w-8 h-8 md:w-10 md:h-10 grayscale hover:grayscale-0 transition-all" />
              <span className="text-[10px] tracking-widest font-bold">KOTLIN</span>
            </div>
            <div className="flex flex-col items-center gap-3 hover:text-white hover:-translate-y-1 transition-all motion-safe-reveal">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="w-8 h-8 md:w-10 md:h-10 grayscale hover:grayscale-0 transition-all" />
              <span className="text-[10px] tracking-widest font-bold">PYTHON</span>
            </div>
            <div className="flex flex-col items-center gap-3 hover:text-white hover:-translate-y-1 transition-all motion-safe-reveal">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP" className="w-8 h-8 md:w-10 md:h-10 grayscale hover:grayscale-0 transition-all" />
              <span className="text-[10px] tracking-widest font-bold">PHP</span>
            </div>
            <div className="flex flex-col items-center gap-3 hover:text-white hover:-translate-y-1 transition-all motion-safe-reveal">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" alt="Laravel" className="w-8 h-8 md:w-10 md:h-10 grayscale hover:grayscale-0 transition-all" />
              <span className="text-[10px] tracking-widest font-bold">LARAVEL</span>
            </div>
            <div className="flex flex-col items-center gap-3 hover:text-white hover:-translate-y-1 transition-all motion-safe-reveal">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="w-8 h-8 md:w-10 md:h-10 grayscale hover:grayscale-0 transition-all" />
              <span className="text-[10px] tracking-widest font-bold">REACT NATIVE</span>
            </div>
            <div className="flex flex-col items-center gap-3 hover:text-white hover:-translate-y-1 transition-all motion-safe-reveal">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" className="w-8 h-8 md:w-10 md:h-10 grayscale hover:grayscale-0 transition-all" />
              <span className="text-[10px] tracking-widest font-bold">TAILWIND</span>
            </div>
            <div className="flex flex-col items-center gap-3 hover:text-white hover:-translate-y-1 transition-all motion-safe-reveal">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" className="w-8 h-8 md:w-10 md:h-10 grayscale hover:grayscale-0 transition-all" />
              <span className="text-[10px] tracking-widest font-bold">JAVA</span>
            </div>
            <div className="flex flex-col items-center gap-3 hover:text-white hover:-translate-y-1 transition-all motion-safe-reveal">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" className="w-8 h-8 md:w-10 md:h-10 grayscale hover:grayscale-0 transition-all" />
              <span className="text-[10px] tracking-widest font-bold">MYSQL</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800">
            {/* Front-End */}
            <div className="bg-zinc-950 p-8 md:p-12 hover:bg-zinc-900 transition-colors group motion-safe-reveal">
              <Palette className="text-zinc-500 mb-6 group-hover:text-white transition-colors" size={40} />
              <h3 className="text-2xl font-bold mb-4">{copy.frontEndTitle}</h3>
              <p className="text-zinc-400 mb-6">{copy.frontEndBody}</p>
              <p className="text-sm tracking-widest text-zinc-600 font-bold">TAILWIND • React • CSS</p>
            </div>

            {/* Mobile */}
            <div className="bg-zinc-950 p-8 md:p-12 hover:bg-zinc-900 transition-colors group motion-safe-reveal">
              <Smartphone className="text-zinc-500 mb-6 group-hover:text-white transition-colors" size={40} />
              <h3 className="text-2xl font-bold mb-4">{copy.mobileTitle}</h3>
              <p className="text-zinc-400 mb-6">{copy.mobileBody}</p>
              <p className="text-sm tracking-widest text-zinc-600 font-bold">REACT NATIVE • KOTLIN • JAVA</p>
            </div>

            {/* Back-End */}
            <div className="bg-zinc-950 p-8 md:p-12 hover:bg-zinc-900 transition-colors group motion-safe-reveal">
              <Code className="text-zinc-500 mb-6 group-hover:text-white transition-colors" size={40} />
              <h3 className="text-2xl font-bold mb-4">{copy.backEndTitle}</h3>
              <p className="text-zinc-400 mb-6">{copy.backEndBody}</p>
              <p className="text-sm tracking-widest text-zinc-600 font-bold">PHP • LARAVEL • DB</p>
            </div>

            {/* Data */}
            <div className="bg-zinc-950 p-8 md:p-12 hover:bg-zinc-900 transition-colors group motion-safe-reveal">
              <Database className="text-zinc-500 mb-6 group-hover:text-white transition-colors" size={40} />
              <h3 className="text-2xl font-bold mb-4">{copy.dataTitle}</h3>
              <p className="text-zinc-400 mb-6">{copy.dataBody}</p>
              <p className="text-sm tracking-widest text-zinc-600 font-bold">PYTHON • ML • DATA ANALYST</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PENGALAMAN */}
      <section id="experience" className="min-h-[100svh] w-full lg:snap-start flex flex-col justify-center px-6 sm:px-8 lg:px-24 py-16 lg:py-0 bg-zinc-900">
        <div className="max-w-7xl w-full">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 fade-rise">{copy.experienceTitle}</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Bangkit */}
            <div className="group motion-safe-reveal">
              <div className="flex items-center justify-between border-b border-zinc-700 pb-4 mb-6">
                <span className="text-sm tracking-widest text-zinc-400 font-bold">2024</span>
                <span className="text-xs uppercase bg-white text-black font-bold px-3 py-1 rounded-full">Bootcamp</span>
              </div>
              <h3 className="text-3xl font-bold mb-2 group-hover:translate-x-2 transition-transform">{copy.bangkitRole}</h3>
              <h4 className="text-xl text-zinc-400 mb-6">{copy.bangkitOrg}</h4>
              <p className="text-zinc-300 leading-relaxed font-light">{copy.bangkitBody}</p>
            </div>

            {/* PTUN */}
            <div className="group motion-safe-reveal">
              <div className="flex items-center justify-between border-b border-zinc-700 pb-4 mb-6">
                <span className="text-sm tracking-widest text-zinc-400 font-bold">2025</span>
                <span className="text-xs uppercase bg-zinc-700 text-white font-bold px-3 py-1 rounded-full">Magang</span>
              </div>
              <h3 className="text-3xl font-bold mb-2 group-hover:translate-x-2 transition-transform">{copy.internRole}</h3>
              <h4 className="text-xl text-zinc-400 mb-6">{copy.internOrg}</h4>
              <p className="text-zinc-300 leading-relaxed font-light">{copy.internBody}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: SERTIFIKASI */}
      <section id="certification" className="min-h-[100svh] w-full lg:snap-start flex flex-col justify-center px-6 sm:px-8 lg:px-24 py-16 lg:py-0 bg-zinc-950">
        <div className="max-w-7xl w-full">
          <div className="flex items-end justify-between mb-10 md:mb-14 gap-6">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter fade-rise">{copy.certificationTitle}</h2>
            
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/50 motion-safe-reveal">
              <img
                src="images/sertifikasi.jpeg"
                alt="Dokumentasi sertifikasi"
                className="w-full h-[260px] sm:h-[320px] lg:h-full object-cover"
              />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 md:p-8 motion-safe-reveal">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-white" size={22} />
                  <h3 className="text-2xl md:text-3xl font-bold">{copy.certificationCardTitle}</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed text-base md:text-lg">{copy.certificationCardBody}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 motion-safe-reveal">
                  <p className="text-[11px] tracking-widest uppercase text-zinc-500 font-bold mb-2">{copy.focusLabel}</p>
                  <p className="text-white font-semibold">{copy.focusValue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
        SECTION 6: PROYEK 
        Layout Baru: Teks di satu sisi, 2 Gambar bertumpuk di sisi lainnya
        =============================================
      */}

      {/* PROYEK 1: DEEPFAKE (Kiri: Gambar, Kanan: Teks) */}
      <section id="project-1" className="min-h-[100svh] w-full lg:snap-start flex flex-col lg:flex-row lg:items-stretch bg-zinc-950 py-4 lg:py-0">
        
        {/* Sisi Gambar (Dibagi Atas Bawah) */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-[100svh] lg:max-h-[100svh] p-4 lg:p-8 flex flex-col gap-4 bg-zinc-900">
          <div className="aspect-[16/10] lg:flex-1 lg:aspect-auto rounded-2xl overflow-hidden bg-zinc-800 relative group">
            <img src="images/diagram-alur.png" alt="Deepfake 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="aspect-[16/10] lg:flex-1 lg:aspect-auto rounded-2xl overflow-hidden bg-zinc-800 relative group">
            <img src="images/deepfake-2.png" alt="Deepfake 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>

        {/* Sisi Penjelasan */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-8 lg:px-24 py-10 lg:py-0">
          <div className="text-sm tracking-widest text-zinc-500 font-bold mb-4">{copy.projectLabel1}</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 leading-tight">{copy.projectTitle1} <br/><span className="text-zinc-500 text-2xl sm:text-3xl lg:text-4xl">{copy.projectSubtitle1}</span></h2>

          <p className="text-base sm:text-lg lg:text-xl text-zinc-400 font-light leading-relaxed mb-8">{copy.projectBody1}</p>

          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 border border-zinc-800 rounded-full text-xs tracking-widest font-bold">PYTHON</span>
            <span className="px-4 py-2 border border-zinc-800 rounded-full text-xs tracking-widest font-bold">MACHINE LEARNING</span>
            <span className="px-4 py-2 border border-zinc-800 rounded-full text-xs tracking-widest font-bold">AI</span>
          </div>
          <a
            href="https://github.com/Ruminas99/AI-generated-video-detection"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-700 text-sm tracking-widest font-bold hover:bg-white hover:text-zinc-950 transition-colors"
          >
            {copy.viewProject}
            <ExternalLink size={16} />
          </a>
        </div>
      </section>

      {/* PROYEK 2: SI BUTET (Kiri: Teks, Kanan: Gambar) */}
      <section id="project-2" className="min-h-[100svh] w-full lg:snap-start flex flex-col lg:flex-row lg:items-stretch bg-zinc-900 py-4 lg:py-0">
        
        {/* Sisi Penjelasan */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-8 lg:px-24 py-10 lg:py-0 order-2 lg:order-1">
          <div className="text-sm tracking-widest text-zinc-500 font-bold mb-4">{copy.projectLabel2}</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 leading-tight">{copy.projectTitle2}<br/><span className="text-zinc-500 text-2xl sm:text-3xl lg:text-4xl">{copy.projectSubtitle2}</span></h2>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-400 font-light leading-relaxed mb-8">{copy.projectBody2}</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 border border-zinc-700 rounded-full text-xs tracking-widest font-bold">WEB DEVELOPMENT</span>
            <span className="px-4 py-2 border border-zinc-700 rounded-full text-xs tracking-widest font-bold">LARAVEL</span>
            <span className="px-4 py-2 border border-zinc-700 rounded-full text-xs tracking-widest font-bold">PHP</span>
            <span className="px-4 py-2 border border-zinc-700 rounded-full text-xs tracking-widest font-bold">MYSQL</span>
          </div>
          <a
            href="https://github.com/Ruminas99/buku-tamu"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-700 text-sm tracking-widest font-bold hover:bg-white hover:text-zinc-950 transition-colors"
          >
            {copy.viewProject}
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Sisi Gambar (Dibagi Atas Bawah) */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-[100svh] lg:max-h-[100svh] p-4 lg:p-8 flex flex-col gap-4 bg-zinc-950 order-1 lg:order-2">
          <div className="aspect-[16/10] lg:flex-1 lg:aspect-auto rounded-2xl overflow-hidden bg-zinc-800 relative group">
            <img src="images/SiButet.png" alt="Si Butet 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="aspect-[16/10] lg:flex-1 lg:aspect-auto rounded-2xl overflow-hidden bg-zinc-800 relative group">
            <img src="images/SiButet2.png" alt="Si Butet 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* PROYEK 3: WISATA (Kiri: Gambar, Kanan: Teks) */}
      <section id="project-3" className="min-h-[100svh] w-full lg:snap-start flex flex-col lg:flex-row lg:items-stretch bg-zinc-950 py-4 lg:py-0">
        
        {/* Sisi Gambar (Dibagi Atas Bawah) - Untuk Mobile App, kita bisa potong bagian gambarnya atau sesuaikan */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-0 lg:h-[100svh] lg:max-h-[100svh] p-4 lg:p-8 flex flex-col gap-4 bg-zinc-900">
          <div className="aspect-[16/10] lg:flex-1 lg:aspect-auto rounded-2xl overflow-hidden bg-zinc-800 relative group">
            <img src="images/MDev.png" alt="Wisata 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 object-top" />
          </div>
          <div className="aspect-[16/10] lg:flex-1 lg:aspect-auto rounded-2xl overflow-hidden bg-zinc-800 relative group">
            <img src="images/MDev2.png" alt="Wisata 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 object-center" />
          </div>
        </div>

        {/* Sisi Penjelasan */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-8 lg:px-24 py-10 lg:py-0">
          <div className="text-sm tracking-widest text-zinc-500 font-bold mb-4">{copy.projectLabel3}</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 leading-tight">{copy.projectTitle3} <br/><span className="text-zinc-500 text-2xl sm:text-3xl lg:text-4xl">{copy.projectSubtitle3}</span></h2>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-400 font-light leading-relaxed mb-8">{copy.projectBody3}</p>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 border border-zinc-800 rounded-full text-xs tracking-widest font-bold">KOTLIN</span>
            <span className="px-4 py-2 border border-zinc-800 rounded-full text-xs tracking-widest font-bold">ANDROID APP</span>
            <span className="px-4 py-2 border border-zinc-800 rounded-full text-xs tracking-widest font-bold">API</span>
          </div>
          <a
            href="https://github.com/jovi345/C242-PS195"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full border border-zinc-700 text-sm tracking-widest font-bold hover:bg-white hover:text-zinc-950 transition-colors"
          >
            {copy.viewProject}
            <ExternalLink size={16} />
          </a>
        </div>
      </section>

      {/* SECTION 7: KONTAK */}
      <section id="contact" className="min-h-[100svh] w-full lg:snap-start flex flex-col justify-start lg:justify-center px-6 sm:px-8 lg:px-24 py-16 lg:py-0 bg-zinc-950 relative overflow-hidden">
        
        <div className="max-w-7xl z-10 w-full">
          <h2 className="text-[clamp(2.1rem,11vw,7rem)] font-bold tracking-tighter leading-[0.9] mb-8 break-words">
            {copy.contactTitle}
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            {copy.contactLead}
          </p>
          
          <div className="w-full h-px bg-zinc-800 my-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 text-base">
            <a href="mailto:ergydavid9145@gmail.com" className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-zinc-600 transition-colors group">
              <p className="text-zinc-500 text-xs tracking-widest font-bold mb-3">EMAIL</p>
              <div className="flex items-center gap-3 text-zinc-200 group-hover:text-white">
                <Mail size={18} />
                <span className="break-all">ergydavid9145@gmail.com</span>
              </div>
            </a>

            <a href="https://wa.me/6282165724811" target="_blank" rel="noreferrer" className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-zinc-600 transition-colors group">
              <p className="text-zinc-500 text-xs tracking-widest font-bold mb-3">WHATSAPP</p>
              <div className="flex items-center gap-3 text-zinc-200 group-hover:text-white">
                <Phone size={18} />
                <span>+62 821-6572-4811</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/ergy-david-lundy/" target="_blank" rel="noreferrer" className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-zinc-600 transition-colors group md:col-span-2 xl:col-span-1">
              <p className="text-zinc-500 text-xs tracking-widest font-bold mb-3">LINKEDIN</p>
              <div className="flex items-center gap-3 text-zinc-200 group-hover:text-white">
                <FaLinkedin size={18} />
                <span>Ergy David Lundy Tumanggor</span>
              </div>
            </a>
            <a href="https://github.com/Ruminas99" target="_blank" rel="noreferrer" className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-zinc-600 transition-colors group md:col-span-2 xl:col-span-1">
              <p className="text-zinc-500 text-xs tracking-widest font-bold mb-3">GITHUB</p>
              <div className="flex items-center gap-3 text-zinc-200 group-hover:text-white">
                <FaGithub size={18} />
                <span>Ruminas99</span>
              </div>
            </a>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <a
              href={cvHref}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-900 text-sm tracking-widest font-bold hover:bg-zinc-200 transition-colors"
            >
              {copy.cvButton}
            </a>
          </div>
        </div>

        <div className="static lg:absolute lg:bottom-8 lg:left-8 lg:right-8 mt-16 lg:mt-0 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-sm font-bold tracking-widest text-zinc-600">
          <span>{copy.footerLeft}</span>
          <span>{copy.footerRight}</span>
        </div>
      </section>

    </div>
  );
}