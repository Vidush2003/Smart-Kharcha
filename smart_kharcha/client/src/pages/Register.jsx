import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../utils/api";
import Footer from "../components/Footer";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    try {
      await api.post("/auth/register", form);
      navigate("/");
    } catch (err) {
      const msg = err.response?.data?.message || err.response?.data?.error || "Connection error - is the backend running?";
      setError(msg);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-brand-darker relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-brand-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob pointer-events-none"></div>
      <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[20%] w-96 h-96 bg-brand-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 pointer-events-none"></div>

      <div className="flex-grow flex items-center justify-center p-4">
        <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onSubmit={handleRegister}
        className="relative z-10 bg-white/80 dark:bg-brand-dark/80 backdrop-blur-xl border border-white/20 dark:border-white/10 p-10 rounded-3xl shadow-2xl w-[26rem] flex flex-col gap-6"
      >
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold bg-gradient-to-r from-emerald-500 to-brand-primary bg-clip-text text-transparent">
            Create Account
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm font-medium">Join Smart Kharcha today.</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-slate-800/50 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-medium placeholder-slate-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-slate-800/50 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-medium placeholder-slate-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5 ml-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-slate-800/50 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-medium placeholder-slate-400"
            />
          </div>
        </div>

        {error && (
          <motion.p 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-rose-500 bg-rose-50 dark:bg-rose-500/10 px-4 py-2 rounded-lg text-sm font-medium text-center"
          >
            {error}
          </motion.p>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium py-3.5 rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-0.5 transition-all text-lg"
        >
          Sign Up
        </button>

        <p className="text-sm text-center font-medium text-slate-600 dark:text-slate-400">
          Already have an account?{" "}
          <Link to="/" className="text-emerald-600 hover:text-emerald-500 transition-colors font-semibold">
            Sign In
          </Link>
        </p>
      </motion.form>
      </div>

      <Footer />
    </div>
  );
};

export default Register;