import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { FaChartBar, FaCalendarCheck, FaLock, FaArrowRight, FaArrowUp, FaArrowDown, FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

const LandingPage = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [authMode, setAuthMode] = useState(null);
  const [user, setUser] = useState(null);
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (savedUser && isLoggedIn) {
      setUser(savedUser);
    } else {
      setUser(null);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (location.state?.openLogin) {
      setAuthMode("login");
      // Clear state so it doesn't reappear on refresh
      navigate("/", { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  const features = [
    {
      icon: <FaChartBar className="text-2xl text-indigo-600" />,
      title: "Detailed Analytics",
      desc: "Get crystal clear insights into your cash flow with automated monthly summaries and category breakdowns.",
    },
    {
      icon: <FaCalendarCheck className="text-2xl text-indigo-600" />,
      title: "Expense Calendar",
      desc: "Never lose track of a single paisa. A dedicated calendar view shows exactly where your money went, day by day.",
    },
    {
      icon: <FaLock className="text-2xl text-indigo-600" />,
      title: "Bank-Grade Security",
      desc: "Your data is yours alone. We use industry-standard encryption and secure MongoDB Atlas cloud hosting.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-100 selection:text-indigo-900 relative overflow-x-hidden">
      
      {/* Textured Background */}
      <div className="absolute inset-0 z-0 opacity-[0.4] dark:opacity-[0.1] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#6366f1 1px, transparent 1px)`, backgroundSize: '32px 32px' }}>
      </div>

      <nav className="fixed top-0 w-full z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">S</div>
            <span className="text-lg font-bold tracking-tight">Smart Kharcha</span>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-slate-500 hover:text-indigo-600 transition-colors"
            >
              {darkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
            </button>
            {isLoggedIn && user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-slate-600 dark:text-slate-400">Hi, {user.name}</span>
                <button 
                  onClick={() => {
                    setIsEntering(true);
                    setTimeout(() => navigate("/dashboard"), 800);
                  }} 
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-indigo-200 dark:shadow-none"
                >
                  Dashboard <FaArrowRight size={12}/>
                </button>
              </div>
            ) : (
              <>
                <button onClick={() => setAuthMode('login')} className="text-sm font-semibold hover:text-indigo-600 transition-colors">Sign in</button>
                <button onClick={() => setAuthMode('register')} className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity">Get Started</button>
              </>
            )}
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
              {isLoggedIn ? `Good to see you, ` : `Take Control of `} <br />
              <span className="text-indigo-600">{isLoggedIn ? user.name?.split(' ')[0] + "!" : "Your Financial Future."}</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
              {isLoggedIn ? "Ready to see how your finances are looking today? Your dashboard is updated and waiting." : "Tracking your expenses shouldn't be a chore. Smart Kharcha is a minimal, high-performance tool designed for clarity and speed in 2026."}
            </p>
            <div className="flex justify-center gap-4 mb-20">
              <button 
                onClick={() => {
                  if (isLoggedIn) {
                    setIsEntering(true);
                    setTimeout(() => navigate("/dashboard"), 800);
                  } else {
                    setAuthMode('register');
                  }
                }}
                className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 dark:shadow-none hover:bg-indigo-700 transition-all flex items-center gap-2"
              >
                {isLoggedIn ? "Enter Dashboard" : "Start Tracking Now"} <FaArrowRight />
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative lg:max-w-5xl mx-auto">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xl relative overflow-hidden">
               <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl text-left border border-slate-100 dark:border-slate-700">
                  <p className="text-xs font-bold text-slate-400 uppercase mb-1">Monthly Income</p>
                  <p className="text-2xl font-bold">₹54,000</p>
                  <div className="mt-2 text-emerald-500 text-xs font-bold flex items-center gap-1"><FaArrowUp /> +12%</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl text-left border border-slate-100 dark:border-slate-700">
                  <p className="text-xs font-bold text-slate-400 uppercase mb-1">Monthly Expense</p>
                  <p className="text-2xl font-bold">₹12,450</p>
                  <div className="mt-2 text-rose-500 text-xs font-bold flex items-center gap-1"><FaArrowDown /> -8%</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-xl text-left border border-slate-100 dark:border-slate-700">
                  <p className="text-xs font-bold text-slate-400 uppercase mb-1">Budget Limit</p>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full mt-2 overflow-hidden">
                    <div className="bg-indigo-600 h-full w-[65%]"></div>
                  </div>
                  <p className="text-xs mt-2 font-bold text-indigo-600">65% Used</p>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700 overflow-hidden text-left">
                 <div className="p-4 border-b border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 flex justify-between items-center"><span className="font-bold text-sm">Recent Activity</span></div>
                 <div className="p-4 space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-100 dark:border-slate-700">
                       <div className="flex gap-3 items-center"><div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-lg flex items-center justify-center"><FaArrowUp size={12}/></div><div><p className="text-sm font-bold">Freelance Project</p><p className="text-[10px] text-slate-400 font-medium">Income • Mar 22</p></div></div>
                       <span className="text-emerald-600 font-bold text-sm">+₹12,000</span>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
            {features.map((f, i) => (
              <div key={i} className="bg-white/50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 backdrop-blur-sm">
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
        </div>
      </section>

      <section className="py-32 px-6 border-t border-slate-100 dark:border-slate-800 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-sm font-black uppercase tracking-widest text-indigo-600 mb-8">Our Motivation</h2>
          <blockquote className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 leading-snug">
            "We built Smart Kharcha because we were tired of complex finance apps that required a degree to understand. We wanted a tool that was fast, cloud-synced, and most importantly, honest about our spending habits."
          </blockquote>
          <p className="mt-10 text-sm font-black text-indigo-600 tracking-tighter">— Vidush & Utkarsh, Founders</p>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-100 dark:border-slate-800 text-center text-sm font-medium text-slate-400 relative z-10 bg-white dark:bg-slate-950">
        Made with ❤️ by Utkarsh & Vidush
      </footer>

      <AnimatePresence>
        {authMode && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-md" onClick={() => setAuthMode(null)}>
            <div className="w-full h-full absolute inset-0 cursor-zoom-out" />
            <div onClick={(e) => e.stopPropagation()} className="relative z-10 w-full max-w-md">
               {authMode === 'login' ? (
                 <LoginForm 
                    setIsLoggedIn={setIsLoggedIn} 
                    onClose={() => setAuthMode(null)} 
                    onSwitchToRegister={() => setAuthMode('register')} 
                 />
               ) : (
                 <RegisterForm 
                    setIsLoggedIn={setIsLoggedIn}
                    onClose={() => setAuthMode(null)} 
                    onSwitchToLogin={() => setAuthMode('login')} 
                 />
               )}
               <button onClick={() => setAuthMode(null)} className="absolute -top-4 -right-4 w-10 h-10 bg-white dark:bg-slate-800 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform">✕</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✨ Entrance Overlay */}
      <AnimatePresence>
        {isEntering && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-indigo-600 flex items-center justify-center text-white"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-2xl font-bold mb-4 mx-auto animate-pulse">S</div>
              <h2 className="text-2xl font-bold tracking-tight">Entering Smart Kharcha...</h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
