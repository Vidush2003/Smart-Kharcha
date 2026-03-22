import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaChartLine, FaCalendarAlt, FaShieldAlt, FaArrowRight } from "react-icons/fa";

const LandingPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  const features = [
    {
      icon: <FaChartLine className="text-3xl text-brand-primary" />,
      title: "Real-time Analytics",
      desc: "Visualize your spending patterns with beautiful, interactive charts that help you identify where your money goes.",
    },
    {
      icon: <FaCalendarAlt className="text-3xl text-purple-500" />,
      title: "Smart Calendar",
      desc: "A dedicated financial calendar to track every single rupee spent or earned, keeping your history organized and accessible.",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-teal-500" />,
      title: "Secure & Cloud-Synced",
      desc: "Your data is encrypted and synced across all your devices using MongoDB Atlas, ensuring you never lose your records.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 overflow-x-hidden">
      
      {/* 🚀 Hero Section */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        {/* Decorative Background Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-br from-brand-primary/10 via-purple-500/5 to-transparent rounded-full blur-3xl -z-10 animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-brand-primary uppercase bg-brand-primary/10 rounded-full">
              Finance for the Future
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
              Master Your Money with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-500">Smart Kharcha</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
              Take complete control of your finances in 2026. Track expenses, set budgets, and visualize your wealth in one beautiful, glassmorphic dashboard.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {isLoggedIn ? (
                <button
                  onClick={() => navigate("/dashboard")}
                  className="px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold rounded-2xl shadow-xl shadow-brand-primary/30 hover:shadow-brand-primary/40 hover:-translate-y-1 transition-all flex items-center gap-2 group"
                >
                  Go to Dashboard <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <>
                  <button
                    onClick={() => navigate("/register")}
                    className="px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold rounded-2xl shadow-xl shadow-brand-primary/30 hover:shadow-brand-primary/40 hover:-translate-y-1 transition-all flex items-center gap-2 group"
                  >
                    Get Started Free <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => navigate("/login")}
                    className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-2xl border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm"
                  >
                    Login
                  </button>
                </>
              )}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/50 dark:border-white/5 backdrop-blur-xl">
               <img 
                 src="/hero.png" 
                 alt="App Preview" 
                 className="w-full h-auto"
               />
            </div>
            {/* Floating Cards Mockup */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl border border-brand-primary/20 z-20 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center">
                  <FaChartLine size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Savings Goal</p>
                  <p className="text-xl font-display font-bold">+₹45,300.00</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 🧠 Motivation Section */}
      <section className="py-24 bg-white dark:bg-brand-dark/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-extrabold mb-8 dark:text-white">Why did we build Smart Kharcha?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed italic">
            "In 2026, financial literacy isn't just a skill—it's a necessity. We noticed how easy it was to lose track of small daily spends that eventually eat up a significant portion of our income. We built Smart Kharcha to bridge that gap—giving you a crystal-clear lens into your wallet."
          </p>
          <div className="flex justify-center gap-4">
            <div className="w-12 h-1 bg-brand-primary rounded-full"></div>
            <div className="w-4 h-1 bg-purple-500 rounded-full"></div>
            <div className="w-4 h-1 bg-teal-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ✨ Features Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-extrabold dark:text-white">Built for your daily needs</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg">Sophisticated engineering hidden behind a minimal, lightning-fast interface.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-brand-dark p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-white/5 hover:border-brand-primary/50 transition-all hover:shadow-xl hover:-translate-y-2 group"
              >
                <div className="mb-6 bg-slate-50 dark:bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-primary/10 transition-all">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 dark:text-white">{f.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏁 Call to Action */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-brand-primary to-brand-secondary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6 relative z-10">Ready to transform your finances?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto relative z-10 font-medium">
            Join thousands of users who are already saving smarter with Smart Kharcha. It's free, forever.
          </p>
          
          <button 
            onClick={() => navigate(isLoggedIn ? "/dashboard" : "/register")}
            className="px-10 py-5 bg-white text-brand-primary font-display font-extrabold rounded-2xl shadow-2xl hover:bg-slate-50 hover:-translate-y-1 transition-all relative z-10 flex items-center gap-2 mx-auto"
          >
            {isLoggedIn ? "Back to Dashboard" : "Sign Up Now"} <FaArrowRight />
          </button>
        </div>
      </section>

      {/* 🦶 Footer */}
      <footer className="py-12 border-t border-slate-200 dark:border-white/10 text-center">
        <p className="text-slate-500 font-medium">© 2026 Smart Kharcha. Made with ❤️ by Utkarsh & Vidush.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
