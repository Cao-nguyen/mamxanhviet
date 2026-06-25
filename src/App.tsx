import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  Users, 
  Laptop, 
  Sparkles, 
  ArrowRight,
  Menu,
  X,
  Target,
  Globe,
  Heart,
  Trophy,
  PenTool,
  Star,
  TrendingUp,
  Headphones,
  Tv,
  Brain,
  Coffee,
  Video,
  HeartHandshake,
  Map,
  PlayCircle,
  X
} from 'lucide-react';
import { useState } from 'react';

// Cinematic Fade Up Variant
const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const AmbientBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-[0] bg-[#fafafa]">
    {/* Light Fog / Vignette */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.7),rgba(250,250,250,1)_100%)]" />
    
    {/* Golden/Warm Ambient Light */}
    <motion.div 
      animate={{ 
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.4, 0.3],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-amber-100/50 blur-[120px]"
    />
    
    {/* Premium Light Green Orb */}
    <motion.div 
      animate={{ 
        y: [0, -30, 0],
        opacity: [0.2, 0.3, 0.2],
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute top-[30%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-emerald-100/40 blur-[130px]"
    />
    
    {/* Subtle noise overlay for cinematic film feel */}
    <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
  </div>
);

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const getEmbedUrl = (url: string) => {
    if (!url || url === '#') return '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11)
      ? `https://www.youtube.com/embed/${match[2]}?autoplay=1`
      : '';
  };

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const categories = [
    {
      title: "Công tác Đoàn, Đội",
      description: "Hoạt động phong trào, tình nguyện và nhịp sống thanh thiếu nhi.",
      icon: <Users className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Tin tức giáo dục",
      description: "Tuyển sinh, cẩm nang học tập và phương pháp giảng dạy.",
      icon: <GraduationCap className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Tin tức công nghệ",
      description: "Cập nhật xu hướng AI, công nghệ số và tiện ích mới.",
      icon: <Laptop className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Cuộc thi - Hội thi",
      description: "Thông tin các sân chơi trí tuệ, nghệ thuật và thể thao.",
      icon: <Trophy className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Câu chuyện truyền cảm hứng",
      description: "Gương sáng vượt khó và những hành trình vươn lên.",
      icon: <Sparkles className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Độc giả viết báo",
      description: "Nơi bạn đọc tự do bày tỏ quan điểm và góc nhìn cá nhân.",
      icon: <PenTool className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Showbiz",
      description: "Tin tức giải trí, sự kiện văn hóa và người nổi tiếng.",
      icon: <Star className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Xu hướng",
      description: "Cập nhật các trào lưu mới nhất của giới trẻ hiện nay.",
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Podcast tin nhanh",
      description: "Bản tin âm thanh cập nhật tin tức nhanh chóng, tiện dụng.",
      icon: <Headphones className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Góc giải trí",
      description: "Thư giãn với những gợi ý phim ảnh, âm nhạc và games.",
      icon: <Tv className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Tâm lý",
      description: "Góc gỡ rối tâm lý, chăm sóc và chữa lành sức khỏe tinh thần.",
      icon: <Brain className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Đời sống",
      description: "Kỹ năng sống, mẹo vặt và những câu chuyện thường nhật.",
      icon: <Coffee className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Video ngắn",
      description: "Clip viral, tin tức nổi bật được tóm tắt qua lăng kính video.",
      icon: <Video className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Chuyện chúng mình",
      description: "Tâm sự tuổi mới lớn, những rung động và góc khuất học trò.",
      icon: <HeartHandshake className="w-6 h-6 text-emerald-600" />
    }
  ];

  const coreValues = [
    {
      icon: <Target className="w-6 h-6 text-emerald-600" />,
      title: "Tầm Nhìn Xuyên Suốt",
      desc: "Đồng hành và định hướng tư duy tích cực, sáng tạo cho thế hệ Việt tương lai."
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-600" />,
      title: "Góc Nhìn Đa Chiều",
      desc: "Cập nhật nhanh chóng thông tin thời sự, bao quát đời sống và công nghệ."
    },
    {
      icon: <Heart className="w-6 h-6 text-emerald-600" />,
      title: "Giá Trị Tiên Phong",
      desc: "Khơi dậy niềm tự hào dân tộc, đề cao tinh thần cống hiến vì cộng đồng."
    }
  ];

  const courseLessons = [
    { session: "Buổi 1", title: "Các biện pháp tu từ thường gặp", date: "25/06/2026", status: "Đã mở", link: "https://youtu.be/c_o9w_c6rbA" },
    { session: "Buổi 2", title: "Các câu thường được sử dụng trong văn bản", date: "26/06/2026", status: "Đã mở", link: "https://youtu.be/g5yLXOLScVo" },
    { session: "Buổi 3", title: "Các thể loại thường gặp trong văn bản đọc hiểu", date: "27/06/2026", status: "Đã mở", link: "https://youtu.be/Y6cEbRZh1OA" },
    { session: "Buổi 4", title: "Các phương thức biểu đạt", date: "28/06/2026", status: "Đã mở", link: "https://youtu.be/8YIziL7kXn4" },
    { session: "Buổi 5", title: "Thể thơ", date: "29/06/2026", status: "Đã mở", link: "https://youtu.be/0kxD35-BGAw" },
    { session: "Buổi 6", title: "Giải đề đọc hiểu - Đề số 1", date: "30/06/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 7", title: "Giải đề đọc hiểu - Đề số 2", date: "01/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 8", title: "Giải đề đọc hiểu - Đề số 3", date: "02/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 9", title: "Nghị luận xã hội về một vấn đề hiện tượng, đời sống", date: "03/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 10", title: "Nghị luận xã hội về tư tưởng, đạo lý", date: "04/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 11", title: "Nghị luận xã hội về một vấn đề trong TPVH, TPNT", date: "05/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 12", title: "Nghị luận văn học phân tích, đánh giá một tác phẩm văn xuôi", date: "06/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 13", title: "Nghị luận văn học phân tích, đánh giá một tác phẩm thơ", date: "07/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 14", title: "Nghị luận văn học phân tích, đánh giá hai tác phẩm thơ hoặc văn xuôi", date: "08/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 15", title: "Mở rộng vốn từ, học cách diễn đạt", date: "09/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 16", title: "Dẫn chứng tiêu biểu phần 1", date: "10/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 17", title: "Dẫn chứng tiêu biểu phần 2", date: "11/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 18", title: "Dẫn chứng tiêu biểu phần 3", date: "12/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 19", title: "Văn học dân gian Việt Nam", date: "13/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 20", title: "Giai đoạn Văn học Trung đại Việt Nam", date: "14/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 21", title: "Giai đoạn Văn học Hiện đại Việt Nam", date: "15/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 22", title: "Đồng Chí - Chính Hữu", date: "16/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 23", title: "Bài thơ về tiểu đội xe không kính - Phạm Tiến Duật", date: "17/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 24", title: "Tây Tiến - Quang Dũng", date: "18/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 25", title: "Chí Phèo - Nam Cao", date: "19/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 26", title: "Hai đứa trẻ - Thạch Lam", date: "20/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 27", title: "Từ ấy - Tố Hữu", date: "21/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 28", title: "Truyện Kiều - Nguyễn Du", date: "22/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 29", title: "Nguyễn Trãi", date: "23/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 30", title: "Hồ Xuân Hương", date: "24/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 31", title: "Nguyễn Khuyến", date: "25/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 32", title: "Ngô Tất Tố", date: "26/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 33", title: "Hồ Chí Minh", date: "27/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 34", title: "Nguyễn Minh Châu", date: "28/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 35", title: "Chế Lan Viên", date: "29/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 36", title: "Nguyễn Ngọc Tư", date: "30/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 37", title: "Nguyễn Nhật Ánh", date: "31/07/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 38", title: "Giải đề và Đánh giá - Đề số 1", date: "01/08/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 39", title: "Giải đề và Đánh giá - Đề số 2", date: "02/08/2026", status: "Chưa mở", link: "#" },
    { session: "Buổi 40", title: "Giải đề và Đánh giá - Đề số 3", date: "03/08/2026", status: "Chưa mở", link: "#" }
  ];

  return (
    <div className="min-h-screen font-sans text-slate-800 selection:bg-emerald-200 selection:text-emerald-900 overflow-hidden relative">
      <AmbientBackground />
      
      {/* Premium Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 glass-panel z-50 border-b border-white/40"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img src="/logo.png" alt="Mầm Xanh Việt Logo" className="h-10 md:h-12 object-contain drop-shadow-sm" />
            </motion.div>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10 font-medium text-slate-600 tracking-wide text-sm">
              <a href="#about" className="hover:text-emerald-700 hover:tracking-widest transition-all duration-300">Giới thiệu</a>
              <a href="#categories" className="hover:text-emerald-700 hover:tracking-widest transition-all duration-300">Chuyên mục</a>
              <a href="#contact" className="hover:text-emerald-700 hover:tracking-widest transition-all duration-300">Liên hệ</a>
            </nav>

            <button 
              className="md:hidden p-2 text-slate-600 hover:text-emerald-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-panel px-6 py-6 space-y-4 shadow-2xl overflow-hidden"
            >
              <a href="#about" className="block text-slate-600 py-2 hover:text-emerald-600" onClick={() => setIsMobileMenuOpen(false)}>Giới thiệu</a>
              <a href="#categories" className="block text-slate-600 py-2 hover:text-emerald-600" onClick={() => setIsMobileMenuOpen(false)}>Chuyên mục</a>
              <a href="#contact" className="block text-slate-600 py-2 hover:text-emerald-600" onClick={() => setIsMobileMenuOpen(false)}>Liên hệ</a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section id="about" className="relative pt-40 pb-32 px-6 lg:px-12 text-center min-h-[90vh] flex items-center justify-center z-10">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} className="mb-8">
            <span className="inline-block py-1.5 px-4 rounded-full glass-panel text-emerald-800 font-medium text-xs uppercase tracking-widest shadow-sm">
              Trang báo thế hệ mới
            </span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8 drop-shadow-sm">
            Nơi ươm mầm tri thức và <br className="hidden md:block"/>
            <span className="text-gradient">khát vọng vươn xa</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-600/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Mầm Xanh Việt là chuyên trang uy tín dành cho thế hệ trẻ. Dẫn đầu về nội dung Đoàn - Đội, tiên phong chia sẻ kiến thức giáo dục và nâng tầm kỹ năng cho kỷ nguyên số.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -15px rgba(16, 185, 129, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 w-full sm:w-auto bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-3"
            >
              Sắp ra mắt <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.8)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 w-full sm:w-auto glass-panel text-slate-800 rounded-full font-medium transition-all text-center flex items-center justify-center gap-3 hover:shadow-lg"
            >
              Liên hệ
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Course Section */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="w-full"
        >
          <div className="text-center mb-16">
            <motion.span variants={fadeUp} className="text-emerald-600 font-semibold tracking-widest uppercase text-sm mb-4 block">Khoá Học Bồi Dưỡng</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl leading-tight font-bold text-slate-900 tracking-tight">
              KHOÁ HỌC 7+ NGỮ VĂN KHÔNG KHÓ
            </motion.h2>
          </div>

          <motion.div variants={fadeUp} className="glass-panel overflow-hidden rounded-[2rem] shadow-sm border border-slate-200/50">
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="border-b border-slate-200/50 bg-slate-50/50">
                    <th className="py-5 px-6 font-semibold text-slate-700 w-24">ID</th>
                    <th className="py-5 px-6 font-semibold text-slate-700 w-24">Buổi học</th>
                    <th className="py-5 px-6 font-semibold text-slate-700">Tên bài học</th>
                    <th className="py-5 px-6 font-semibold text-slate-700 w-40">Thời gian đăng</th>
                    <th className="py-5 px-6 font-semibold text-slate-700 w-36">Trạng Thái</th>
                    <th className="py-5 px-6 font-semibold text-slate-700 w-32 text-center">Link học</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/50">
                  {courseLessons.map((lesson, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/30 transition-colors">
                      <td className="py-4 px-6 text-slate-500 font-mono text-sm">#{String(172815 + idx).padStart(8, '0')}</td>
                      <td className="py-4 px-6 font-medium text-emerald-700">{lesson.session}</td>
                      <td className="py-4 px-6 text-slate-800 font-medium">{lesson.title}</td>
                      <td className="py-4 px-6 text-slate-500 font-mono text-sm">{lesson.date}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                          lesson.status === 'Đã mở' 
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                            : lesson.status === 'Sắp diễn ra'
                            ? 'bg-amber-50 border-amber-200 text-amber-700'
                            : 'bg-slate-50 border-slate-200 text-slate-500'
                        }`}>
                          {lesson.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <a 
                          href={lesson.link}
                          className={`inline-flex p-2 rounded-full transition-colors ${
                            lesson.status === 'Đã mở'
                            ? 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200 hover:text-emerald-700'
                            : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            if (lesson.status === 'Đã mở' && lesson.link !== '#') {
                              setActiveVideo(lesson.link);
                            }
                          }}
                        >
                          <PlayCircle className="w-5 h-5" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden flex flex-col p-4 sm:p-6 gap-4">
              {courseLessons.map((lesson, idx) => (
                <div key={idx} className="bg-white/50 backdrop-blur-sm border border-slate-200/50 p-4 rounded-2xl flex flex-col gap-3 shadow-sm">
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <div className="text-emerald-700 font-medium text-sm mb-1">
                        {lesson.session} <span className="text-slate-400 font-mono font-normal ml-1">#{String(172815 + idx).padStart(8, '0')}</span>
                      </div>
                      <h3 className="text-slate-800 font-medium text-base leading-snug">{lesson.title}</h3>
                    </div>
                    <a 
                      href={lesson.link}
                      className={`shrink-0 inline-flex p-2 rounded-full transition-colors ${
                        lesson.status === 'Đã mở'
                        ? 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200 hover:text-emerald-700'
                        : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        if (lesson.status === 'Đã mở' && lesson.link !== '#') {
                          setActiveVideo(lesson.link);
                        }
                      }}
                    >
                      <PlayCircle className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="flex justify-between items-center mt-1 border-t border-slate-200/50 pt-3">
                    <span className="text-slate-500 font-mono text-xs">{lesson.date}</span>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium border uppercase tracking-wide ${
                      lesson.status === 'Đã mở' 
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                        : lesson.status === 'Sắp diễn ra'
                        ? 'bg-amber-50 border-amber-200 text-amber-700'
                        : 'bg-slate-50 border-slate-200 text-slate-500'
                    }`}>
                      {lesson.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Philosophy / Core Values */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-1 flex flex-col justify-center"
          >
            <motion.span variants={fadeUp} className="text-emerald-600 font-semibold tracking-widest uppercase text-sm mb-4 block">Triết Lý Cốt Lõi</motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-4xl leading-tight font-bold text-slate-900 mb-6 tracking-tight">Sứ mệnh đồng hành cùng giới trẻ</motion.h2>
            <motion.p variants={fadeUp} className="text-slate-600 font-light leading-relaxed text-lg">
              Tại Mầm Xanh Việt, chúng tôi không chỉ đưa tin, chúng tôi kiến tạo không gian tri thức cao cấp, truyền tải những câu chuyện có chiều sâu và truyền cảm hứng mạnh mẽ đến thế hệ trẻ Việt Nam.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {coreValues.map((val, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="glass-panel p-8 rounded-3xl"
              >
                <div className="w-12 h-12 glass-panel rounded-xl flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-slate-900">{val.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed text-sm">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Section - Glassmorphism Bento Grid Feel */}
      <section id="categories" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto relative z-10 border-t border-slate-200/50">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-24"
        >
          <motion.h2 variants={fadeUp} className="font-display text-4xl font-bold text-slate-900 mb-6 tracking-tight">Khai mở tri thức</motion.h2>
          <motion.p variants={fadeUp} className="text-slate-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Khám phá vũ trụ nội dung đa dạng được đội ngũ biên tập viên của Mầm Xanh Việt chắt lọc với tiêu chuẩn khắt khe nhất.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (index % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-panel p-6 md:p-8 rounded-3xl transition-all duration-500 overflow-hidden relative group flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              {/* Subtle hover glow inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 glass-panel rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:shadow-emerald-500/10 transition-shadow duration-500 border border-white/50 mx-auto sm:mx-0">
                  {category.icon}
                </div>
                <h3 className="text-lg md:text-xl font-display font-semibold mb-3 text-slate-900 tracking-tight">{category.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light text-sm">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sovereignty Section */}
      <section className="py-24 px-6 lg:px-12 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.div 
            variants={fadeUp}
            className="glass-panel p-12 md:p-16 rounded-[3rem] relative overflow-hidden text-center border-emerald-500/20 shadow-emerald-900/5 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-500/5 opacity-50" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform duration-1000" />
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 glass-panel rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <Map className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                Quần đảo Hoàng Sa và <br className="hidden sm:block" />
                Quần đảo Trường Sa là của Việt Nam
              </h2>
              <p className="text-xl md:text-2xl font-light text-slate-600 tracking-wide">
                黄沙群岛和长沙群岛属于越南
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer / Liên hệ */}
      <footer id="contact" className="relative z-10 glass-panel border-t border-white/40 pt-20 pb-12 px-6 lg:px-12 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="flex flex-col gap-6">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 transform origin-left"
            >
              <img src="/logo.png" alt="Mầm Xanh Việt Logo" className="h-10 md:h-12 object-contain drop-shadow-sm grayscale hover:grayscale-0 transition-all opacity-80" />
            </motion.div>
            <div className="text-slate-600 flex flex-col gap-2 text-sm md:text-base font-light">
              <span className="font-medium text-slate-900 mb-2 uppercase tracking-widest text-xs">Thông tin liên hệ</span>
              <span className="flex items-center gap-2">Zalo: <a href="https://zalo.me/0394217863" className="hover:text-emerald-700 font-medium transition-colors">0394217863</a></span>
              <span className="flex items-center gap-2">Email: <a href="mailto:cao343451@gmail.com" className="hover:text-emerald-700 font-medium transition-colors">cao343451@gmail.com</a></span>
            </div>
          </div>
          
          <div className="text-slate-500 text-sm md:text-base text-left md:text-right flex flex-col gap-2 font-light">
            <span className="mt-2">© 2026 Mầm Xanh Việt. Khởi tạo giá trị mới.</span>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <iframe
                src={getEmbedUrl(activeVideo)}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
