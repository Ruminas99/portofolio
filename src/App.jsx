import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, Smartphone, Database, Palette, 
  ArrowDownRight, Mail, Phone, Award,
  GraduationCap, ExternalLink
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const sections = [
  { id: 'hero', title: 'Beranda' },
  { id: 'about', title: 'Tentang' },
  { id: 'skills', title: 'Keahlian' },
  { id: 'experience', title: 'Pengalaman' },
  { id: 'project-1', title: 'Proyek' },
  { id: 'contact', title: 'Kontak' }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id.startsWith('project')) {
            setActiveSection('project-1');
          } else {
            setActiveSection(entry.target.id);
          }
        }
      });
    }, { threshold: 0.5 });

    const sectionElements = document.querySelectorAll('section');
    sectionElements.forEach((el) => observer.current.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.current.unobserve(el));
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-zinc-950 text-zinc-50 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] font-sans selection:bg-white selection:text-zinc-900">
      
      {/* Dot Navigation - Minimalist Style */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-5 mix-blend-difference">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center justify-end"
            title={section.title}
          >
            <span className={`absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs tracking-widest uppercase font-semibold mr-2 ${activeSection === section.id ? 'text-white' : 'text-zinc-400'}`}>
              {section.title}
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
      <section id="hero" className="min-h-screen w-full snap-start flex flex-col justify-center px-8 lg:px-24 relative overflow-hidden bg-zinc-950">
        <div className="max-w-7xl z-10 w-full py-20 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 max-w-xl">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] xl:text-[8.5rem] font-bold tracking-tighter leading-[0.9] text-white max-w-fit">
                <span className="block whitespace-nowrap">ERGY DAVID</span>
                <span className="block">LUNDY TUMANGGOR</span>
              </h1>
              <p className="mt-6 text-sm md:text-base tracking-widest uppercase font-semibold text-zinc-400">
                Sarjana Komputer | Teknik Informatika
              </p>
              <p className="mt-8 text-lg md:text-2xl lg:text-3xl text-zinc-400 font-light max-w-xl leading-relaxed">
                Software Developer mengubah masalah digital yang kompleks menjadi <span className="text-white font-medium">solusi yang fungsional & elegan.</span>
              </p>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 w-full flex lg:justify-end">
              <div className="w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-[460px] lg:ml-auto lg:mr-[-2rem] xl:mr-[-4rem] aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-800 grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl shadow-black/40">
                <img 
                  src="images/profil.jpg" 
                  alt="Ergy David" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-8 lg:left-24">
          <button onClick={() => scrollToSection('about')} className="flex items-center gap-3 text-sm tracking-widest uppercase text-zinc-500 hover:text-white transition-colors group">
            Scroll to Explore
            <ArrowDownRight className="group-hover:translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* SECTION 2: TENTANG SAYA */}
      <section id="about" className="h-screen w-full snap-start flex flex-col justify-center px-8 lg:px-24 bg-zinc-900">
        <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Cerita Saya</h2>
            <div className="w-20 h-1 bg-white mb-8"></div>
            <div className="flex items-start gap-4 p-6 bg-zinc-800/50 rounded-2xl">
              <Award className="text-white shrink-0 mt-1" size={28} />
              <div>
                <h4 className="font-bold text-lg">Data Analyst (BNSP)</h4>
                <p className="text-zinc-400 text-sm mt-1">Tersertifikasi resmi oleh Badan Nasional Sertifikasi Profesi.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-8 text-lg md:text-2xl font-light leading-relaxed text-zinc-300">
            <p>
              Sebagai lulusan <strong className="text-white">Sarjana Teknik Informatika dengan predikat Cum Laude</strong> dari Universitas Methodist Indonesia, saya membangun fondasi yang kuat di bidang teknologi.
            </p>
            <p>
              Saya adaptif bekerja secara remote maupun dalam tim. Pendekatan saya berpusat pada satu hal: <span className="text-white italic">"Bagaimana teknologi dapat diimplementasikan secara maksimal, namun tetap nyaman digunakan oleh manusia?"</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEAHLIAN */}
      <section id="skills" className="h-screen w-full snap-start flex flex-col justify-center px-8 lg:px-24 bg-zinc-950">
        <div className="max-w-7xl w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Keahlian</h2>
            <p className="text-zinc-400 max-w-sm text-lg">Lebih dari sekadar barisan kode, ini tentang menciptakan nilai.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800">
            {/* Front-End */}
            <div className="bg-zinc-950 p-8 md:p-12 hover:bg-zinc-900 transition-colors group">
              <Palette className="text-zinc-500 mb-6 group-hover:text-white transition-colors" size={40} />
              <h3 className="text-2xl font-bold mb-4">Front-End & UI</h3>
              <p className="text-zinc-400 mb-6">Menjembatani desain visual dan fungsionalitas menggunakan HTML, CSS, dan Tailwind CSS untuk hasil yang pixel-perfect.</p>
              <p className="text-sm tracking-widest text-zinc-600 font-bold">TAILWIND • React • CSS</p>
            </div>

            {/* Mobile */}
            <div className="bg-zinc-950 p-8 md:p-12 hover:bg-zinc-900 transition-colors group">
              <Smartphone className="text-zinc-500 mb-6 group-hover:text-white transition-colors" size={40} />
              <h3 className="text-2xl font-bold mb-4">Mobile Apps</h3>
              <p className="text-zinc-400 mb-6">Menerapkan best practices pengembangan mobile menggunakan React Native, Kotlin, dan Java (Alumni Bangkit Academy).</p>
              <p className="text-sm tracking-widest text-zinc-600 font-bold">REACT NATIVE • KOTLIN • JAVA</p>
            </div>

            {/* Back-End */}
            <div className="bg-zinc-950 p-8 md:p-12 hover:bg-zinc-900 transition-colors group">
              <Code className="text-zinc-500 mb-6 group-hover:text-white transition-colors" size={40} />
              <h3 className="text-2xl font-bold mb-4">Back-End System</h3>
              <p className="text-zinc-400 mb-6">Membangun logika server dan pengelolaan database yang kokoh dengan PHP Native & framework Laravel.</p>
              <p className="text-sm tracking-widest text-zinc-600 font-bold">PHP • LARAVEL • DB</p>
            </div>

            {/* Data */}
            <div className="bg-zinc-950 p-8 md:p-12 hover:bg-zinc-900 transition-colors group">
              <Database className="text-zinc-500 mb-6 group-hover:text-white transition-colors" size={40} />
              <h3 className="text-2xl font-bold mb-4">Data & Machine Learning</h3>
              <p className="text-zinc-400 mb-6">Mengolah data dan mengembangkan model AI/ML menggunakan Python, seperti sistem deteksi Deepfake.</p>
              <p className="text-sm tracking-widest text-zinc-600 font-bold">PYTHON • ML • DATA ANALYST</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PENGALAMAN */}
      <section id="experience" className="h-screen w-full snap-start flex flex-col justify-center px-8 lg:px-24 bg-zinc-900">
        <div className="max-w-7xl w-full">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16">Jejak Karir</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Bangkit */}
            <div className="group">
              <div className="flex items-center justify-between border-b border-zinc-700 pb-4 mb-6">
                <span className="text-sm tracking-widest text-zinc-400 font-bold">2024</span>
                <span className="text-xs uppercase bg-white text-black font-bold px-3 py-1 rounded-full">Intensif</span>
              </div>
              <h3 className="text-3xl font-bold mb-2 group-hover:translate-x-2 transition-transform">Android Developer Cohort</h3>
              <h4 className="text-xl text-zinc-400 mb-6">Bangkit Academy</h4>
              <p className="text-zinc-300 leading-relaxed font-light">
                Menyelesaikan pelatihan intensif yang dipimpin oleh ahli industri. Menerapkan best practices pengembangan aplikasi Android secara riil, mencakup arsitektur modern, navigasi, dan integrasi API.
              </p>
            </div>

            {/* PTUN */}
            <div className="group">
              <div className="flex items-center justify-between border-b border-zinc-700 pb-4 mb-6">
                <span className="text-sm tracking-widest text-zinc-400 font-bold">2025</span>
                <span className="text-xs uppercase bg-zinc-700 text-white font-bold px-3 py-1 rounded-full">Magang</span>
              </div>
              <h3 className="text-3xl font-bold mb-2 group-hover:translate-x-2 transition-transform">IT Intern</h3>
              <h4 className="text-xl text-zinc-400 mb-6">Pengadilan Tata Usaha Negara Medan</h4>
              <p className="text-zinc-300 leading-relaxed font-light">
                Mendukung operasional sistem TI peradilan. Merancang dan membangun "Si Butet" (Sistem Buku Tamu Elektronik) untuk mendigitalisasi layanan publik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
        SECTION 5: PROYEK 
        Layout Baru: Teks di satu sisi, 2 Gambar bertumpuk di sisi lainnya
        =============================================
      */}

      {/* PROYEK 1: DEEPFAKE (Kiri: Gambar, Kanan: Teks) */}
      <section id="project-1" className="h-screen w-full snap-start flex flex-col lg:flex-row bg-zinc-950">
        
        {/* Sisi Gambar (Dibagi Atas Bawah) */}
        <div className="w-full h-1/2 lg:w-1/2 lg:h-full p-4 lg:p-8 flex flex-col gap-4 bg-zinc-900">
          <div className="flex-1 rounded-2xl overflow-hidden bg-zinc-800 relative group">
            <img src="https://via.placeholder.com/1200x600/18181b/ffffff?text=Screenshot+Deepfake+1" alt="Deepfake 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden bg-zinc-800 relative group">
            <img src="https://via.placeholder.com/1200x600/18181b/ffffff?text=Screenshot+Deepfake+2" alt="Deepfake 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>

        {/* Sisi Penjelasan */}
        <div className="w-full h-1/2 lg:w-1/2 lg:h-full flex flex-col justify-center px-8 lg:px-24">
          <div className="text-sm tracking-widest text-zinc-500 font-bold mb-4">01 / PROYEK PENELITIAN</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 leading-tight">Sistem Deteksi Video Deepfake</h2>
          <p className="text-lg lg:text-xl text-zinc-400 font-light leading-relaxed mb-8">
            Pengembangan model Machine Learning untuk mendeteksi manipulasi video tingkat lanjut. Menggunakan ekstraksi fitur <strong>Local Binary Pattern (LBP)</strong> yang dikombinasikan dengan klasifikasi <strong>Support Vector Machine (SVM)</strong>.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 border border-zinc-800 rounded-full text-xs tracking-widest font-bold">PYTHON</span>
            <span className="px-4 py-2 border border-zinc-800 rounded-full text-xs tracking-widest font-bold">MACHINE LEARNING</span>
            <span className="px-4 py-2 border border-zinc-800 rounded-full text-xs tracking-widest font-bold">AI</span>
          </div>
        </div>
      </section>

      {/* PROYEK 2: SI BUTET (Kiri: Teks, Kanan: Gambar) */}
      <section id="project-2" className="h-screen w-full snap-start flex flex-col lg:flex-row bg-zinc-900">
        
        {/* Sisi Penjelasan */}
        <div className="w-full h-1/2 lg:w-1/2 lg:h-full flex flex-col justify-center px-8 lg:px-24 order-2 lg:order-1">
          <div className="text-sm tracking-widest text-zinc-500 font-bold mb-4">02 / WEB APP</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 leading-tight">Si Butet<br/><span className="text-zinc-500 text-3xl lg:text-4xl">Sistem Buku Tamu Elektronik</span></h2>
          <p className="text-lg lg:text-xl text-zinc-400 font-light leading-relaxed mb-8">
            Sistem informasi berbasis website yang saya bangun untuk mendigitalisasi pencatatan pengunjung di PTUN Medan. Fokus pada efisiensi, keamanan data real-time, dan kemudahan monitoring.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 border border-zinc-700 rounded-full text-xs tracking-widest font-bold">WEB DEVELOPMENT</span>
            <span className="px-4 py-2 border border-zinc-700 rounded-full text-xs tracking-widest font-bold">LARAVEL</span>
            <span className="px-4 py-2 border border-zinc-700 rounded-full text-xs tracking-widest font-bold">PHP</span>
            <span className="px-4 py-2 border border-zinc-700 rounded-full text-xs tracking-widest font-bold">MYSQL</span>
          </div>
        </div>

        {/* Sisi Gambar (Dibagi Atas Bawah) */}
        <div className="w-full h-1/2 lg:w-1/2 lg:h-full p-4 lg:p-8 flex flex-col gap-4 bg-zinc-950 order-1 lg:order-2">
          <div className="flex-1 rounded-2xl overflow-hidden bg-zinc-800 relative group">
            <img src="images/SiButet.png" alt="Si Butet 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden bg-zinc-800 relative group">
            <img src="images/SiButet2.png" alt="Si Butet 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* PROYEK 3: WISATA (Kiri: Gambar, Kanan: Teks) */}
      <section id="project-3" className="h-screen w-full snap-start flex flex-col lg:flex-row bg-zinc-950">
        
        {/* Sisi Gambar (Dibagi Atas Bawah) - Untuk Mobile App, kita bisa potong bagian gambarnya atau sesuaikan */}
        <div className="w-full h-1/2 lg:w-1/2 lg:h-full p-4 lg:p-8 flex flex-col gap-4 bg-zinc-900">
          <div className="flex-1 rounded-2xl overflow-hidden bg-zinc-800 relative group">
            <img src="images/MDev.png" alt="Wisata 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 object-top" />
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden bg-zinc-800 relative group">
            <img src="images/MDev2.png" alt="Wisata 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 object-center" />
          </div>
        </div>

        {/* Sisi Penjelasan */}
        <div className="w-full h-1/2 lg:w-1/2 lg:h-full flex flex-col justify-center px-8 lg:px-24">
          <div className="text-sm tracking-widest text-zinc-500 font-bold mb-4">03 / MOBILE APP</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 leading-tight">Aplikasi Rekomendasi Wisata</h2>
          <p className="text-lg lg:text-xl text-zinc-400 font-light leading-relaxed mb-8">
            Aplikasi mobile interaktif yang menyajikan informasi detail dan memberikan rekomendasi cerdas untuk membantu pengguna dalam merencanakan perjalanan mereka.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 border border-zinc-800 rounded-full text-xs tracking-widest font-bold">KOTLIN</span>
            <span className="px-4 py-2 border border-zinc-800 rounded-full text-xs tracking-widest font-bold">ANDROID APP</span>
            <span className="px-4 py-2 border border-zinc-800 rounded-full text-xs tracking-widest font-bold">API</span>
          </div>
        </div>
      </section>

      {/* SECTION 6: KONTAK */}
      <section id="contact" className="h-screen w-full snap-start flex flex-col justify-center px-8 lg:px-24 bg-zinc-950 relative overflow-hidden">
        
        <div className="max-w-5xl z-10">
          <h2 className="text-6xl md:text-8xl lg:text-[8rem] font-bold tracking-tighter leading-none mb-8">
            MARI <br className="hidden md:block"/> BERKOLABORASI.
          </h2>
          
          <div className="w-full h-px bg-zinc-800 my-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-xl">
            <div>
              <p className="text-zinc-500 text-sm tracking-widest font-bold mb-4">MENGIRIM EMAIL</p>
              <a href="mailto:ergydavid9145@gmail.com" className="flex items-center gap-3 hover:text-zinc-300 transition-colors group">
                ergydavid9145@gmail.com
                <ExternalLink size={20} className="text-zinc-600 group-hover:text-white transition-colors" />
              </a>
            </div>
            <div>
              <p className="text-zinc-500 text-sm tracking-widest font-bold mb-4">TELEPON / WHATSAPP</p>
              <a href="https://wa.me/6282165724811" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-zinc-300 transition-colors group">
                +62 821-6572-4811
                <ExternalLink size={20} className="text-zinc-600 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-zinc-500 text-sm tracking-widest font-bold mb-4">SOSIAL</p>
            <div className="flex items-center gap-6 text-zinc-400">
              <a href="https://github.com/Ruminas99" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <FaGithub size={22} />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/ergy-david-lundy/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <FaLinkedin size={22} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center text-sm font-bold tracking-widest text-zinc-600">
          <span>© 2026 ERGY DAVID L.T.</span>
          <span>PORTOFOLIO</span>
        </div>
      </section>

    </div>
  );
}