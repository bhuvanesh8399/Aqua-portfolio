import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  X
} from "lucide-react";
import MoodVideo from "./MoodVideo";
import SectionTitle from "./SectionTitle";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: ""
};

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [toast, setToast] = useState(null);

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value
    }));
  };

  const showToast = (type, title, message) => {
    setToast({
      type,
      title,
      message
    });

    window.setTimeout(() => {
      setToast(null);
    }, 4600);
  };

  const validateForm = () => {
    if (!form.name.trim()) {
      return "Please enter your name.";
    }

    if (!form.email.trim()) {
      return "Please enter your email.";
    }

    if (!isValidEmail(form.email.trim())) {
      return "Please enter a valid email address.";
    }

    if (!form.message.trim()) {
      return "Please enter your message.";
    }

    if (form.message.trim().length < 10) {
      return "Message should be at least 10 characters.";
    }

    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setStatus("error");
      showToast("error", "Signal not ready", validationError);
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          website: form.website
        })
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.ok) {
        throw new Error(result?.message || "Message failed to send.");
      }

      setStatus("success");
      setForm(initialForm);

      showToast(
        "success",
        "Message launched into the ocean 🌊",
        "Your message reached Bhuvanesh. I’ll reply soon."
      );

      window.setTimeout(() => {
        setStatus("idle");
      }, 1200);
    } catch (error) {
      setStatus("error");

      showToast(
        "error",
        "Signal lost",
        error.message || "Message not sent. Please try again."
      );
    }
  };

  const buttonText =
    status === "sending"
      ? "Sending Ocean Signal..."
      : status === "success"
        ? "Message Sent ✓"
        : status === "error"
          ? "Try Again"
          : "Send Message";

  return (
    <section className="relative overflow-hidden px-6 py-24">
      <MoodVideo src="/videos/dolphin.mp4" opacity="opacity-20" />

      <div className="section-container relative z-10">
        <SectionTitle
          label="Contact"
          title="Let’s Swim Forward Together"
          description="Send a message through the Ocean Journey contact system. I’ll receive it directly in my inbox."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            {[
              [Mail, "Email", "dbhuvanesh2005@gmail.com"],
              [Github, "GitHub", "github.com/bhuvanesh8399"],
              [Linkedin, "LinkedIn", "Add your LinkedIn"],
              [MapPin, "Location", "India"]
            ].map(([Icon, label, value]) => (
              <div
                key={label}
                className="glass-panel flex items-center gap-4 rounded-3xl p-5"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aqua-400/15 text-aqua-200">
                  <Icon size={22} />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-aqua-300">
                    {label}
                  </p>
                  <p className="mt-1 break-all text-slate-200">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="glass-panel rounded-[2rem] p-6">
            <div className="mb-5 rounded-3xl border border-aqua-300/15 bg-aqua-400/10 p-4">
              <p className="text-sm font-black text-aqua-200">
                Ocean Mail System
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                This form sends a real message to dbhuvanesh2005@gmail.com.
              </p>
            </div>

            <input
              type="text"
              name="website"
              value={form.website}
              onChange={updateField}
              className="hidden"
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className="input-field"
                placeholder="Name"
                name="name"
                value={form.name}
                onChange={updateField}
                disabled={status === "sending"}
              />
              <input
                className="input-field"
                placeholder="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={updateField}
                disabled={status === "sending"}
              />
            </div>

            <input
              className="input-field mt-4"
              placeholder="Subject"
              name="subject"
              value={form.subject}
              onChange={updateField}
              disabled={status === "sending"}
            />

            <textarea
              className="input-field mt-4 min-h-36 resize-none"
              placeholder="Message"
              name="message"
              value={form.message}
              onChange={updateField}
              disabled={status === "sending"}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="water-button mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-aqua-400 px-6 py-3 font-black text-ocean-950 transition hover:bg-aqua-300 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              <Send size={18} />
              {buttonText}
            </button>
          </form>
        </div>
      </div>

      <ContactToast toast={toast} onClose={() => setToast(null)} />
    </section>
  );
}

function ContactToast({ toast, onClose }) {
  const isError = toast?.type === "error";

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          className="fixed bottom-5 left-1/2 z-[120] w-[min(360px,calc(100vw-32px))] -translate-x-1/2 rounded-3xl border border-aqua-300/20 bg-ocean-950/92 p-4 text-white shadow-glow backdrop-blur-2xl sm:bottom-auto sm:left-auto sm:right-6 sm:top-20 sm:translate-x-0"
          initial={{ opacity: 0, y: isError ? 18 : -18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: isError ? 18 : -18, scale: 0.96 }}
        >
          <div className="flex items-start gap-3">
            <span className={`mt-1 ${isError ? "text-red-300" : "text-aqua-300"}`}>
              {isError ? <AlertCircle size={22} /> : <CheckCircle2 size={22} />}
            </span>

            <div className="flex-1">
              <p className="font-black text-white">{toast.title}</p>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                {toast.message}
              </p>
            </div>

            <button
              onClick={onClose}
              className="rounded-xl bg-white/10 p-1.5 text-slate-200 hover:bg-white/15"
              aria-label="Close notification"
            >
              <X size={16} />
            </button>
          </div>

          {!isError && (
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-aqua-400"
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 4.4, ease: "linear" }}
              />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
