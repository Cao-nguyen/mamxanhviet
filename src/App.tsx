import { motion } from 'motion/react';
import { 
  Leaf, 
  GraduationCap, 
  Users, 
  Laptop, 
  Sparkles, 
  BookOpen, 
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    {
      title: "Công tác Đoàn",
      description: "Nhịp sống thanh niên, các phong trào và hoạt động tình nguyện.",
      icon: <Users className="w-6 h-6 text-green-600" />
    },
    {
      title: "Góc Học Sinh",
      description: "Góc chia sẻ kỷ niệm tuổi học trò, cẩm nang học tập hiệu quả.",
      icon: <BookOpen className="w-6 h-6 text-green-600" />
    },
    {
      title: "Giáo Dục",
      description: "Tin tức tuyển sinh, phương pháp giảng dạy và học tập hiện đại.",
      icon: <GraduationCap className="w-6 h-6 text-green-600" />
    },
    {
      title: "Công Nghệ",
      description: "Cập nhật xu hướng công nghệ mới, AI, và kỹ năng số cho người trẻ.",
      icon: <Laptop className="w-6 h-6 text-green-600" />
    },
    {
      title: "Truyền Cảm Hứng",
      description: "Những câu chuyện vượt khó, gương sáng vươn lên trong cuộc sống.",
      icon: <Sparkles className="w-6 h-6 text-green-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-green-200 selection:text-green-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/logo.png" alt="Mầm Xanh Việt Logo" className="h-10 md:h-12 object-contain" />
            </div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
              <a href="#about" className="hover:text-green-600 transition-colors">Giới thiệu</a>
              <a href="#categories" className="hover:text-green-600 transition-colors">Chuyên mục</a>
              <a href="#contact" className="hover:text-green-600 transition-colors">Liên hệ</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600 hover:text-green-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-4 shadow-lg"
          >
            <a href="#about" className="block text-slate-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>Giới thiệu</a>
            <a href="#categories" className="block text-slate-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>Chuyên mục</a>
            <a href="#contact" className="block text-slate-600 py-2" onClick={() => setIsMobileMenuOpen(false)}>Liên hệ</a>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-green-50 to-slate-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-300/20 blur-3xl rounded-full -z-10 pointer-events-none" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 font-medium text-sm mb-6 border border-green-200">
            Sắp ra mắt phiên bản mới
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Nơi ươm mầm tri thức và <br className="hidden md:block"/>
            <span className="text-green-600">khát vọng vươn xa</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Mầm Xanh Việt là chuyên trang uy tín dành cho thế hệ trẻ. Dẫn đầu về nội dung Đoàn - Đội, tiên phong chia sẻ kiến thức giáo dục và cập nhật xu hướng công nghệ mới nhất.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 w-full sm:w-auto bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-600/30">
              Sắp ra mắt <ArrowRight className="w-5 h-5" />
            </button>
            <a href="#contact" className="px-8 py-3 w-full sm:w-auto bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all text-center inline-block">
              Liên hệ
            </a>
          </div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Các chuyên mục nổi bật</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Khám phá vũ trụ nội dung đa dạng được đội ngũ biên tập viên của Mầm Xanh Việt chắt lọc mỗi ngày.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{category.title}</h3>
              <p className="text-slate-600 leading-relaxed">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer / Liên hệ */}
      <footer id="contact" className="bg-white border-t border-slate-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Mầm Xanh Việt Logo" className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition-all opacity-80" />
            </div>
            <div className="text-slate-600 flex flex-col gap-1 text-sm md:text-base">
              <span className="font-medium text-slate-900 mb-1">Thông tin liên hệ:</span>
              <span>Zalo: <a href="https://zalo.me/0394217863" className="hover:text-green-600 font-medium transition-colors">0394217863</a></span>
              <span>Email: <a href="mailto:cao343451@gmail.com" className="hover:text-green-600 font-medium transition-colors">cao343451@gmail.com</a></span>
            </div>
          </div>
          
          <div className="text-slate-500 text-sm md:text-base text-left md:text-right flex flex-col gap-1">
            <span className="font-semibold text-green-700">Quần đảo Hoàng Sa và Quần đảo Trường Sa là của Việt Nam.</span>
            <span>© 2026 Mầm Xanh Việt. Bản quyền đã được bảo hộ.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
