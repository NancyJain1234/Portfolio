import { useState } from "react";

const API_URL = "http://127.0.0.1:8000/api/contact";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus(result.detail || "Something went wrong.");
        return;
      }

      setStatus("Message sent successfully.");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus("Backend is not running. Please start FastAPI server.");
    }
  };

  return (
    <section id="contact" className="section bg-slate-950">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
          Contact
        </p>

        <h2 className="section-title">Get In Touch</h2>

        <p className="mb-8 max-w-2xl text-slate-400">
          Have an opportunity, collaboration, internship, or project discussion?
          Send a message directly through this contact form.
        </p>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-slate-300">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-sky-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-sky-400"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm text-slate-300">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              className="w-full resize-none rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-sky-400"
            />
          </div>

          <button
            type="submit"
            className="mt-6 rounded-full bg-sky-500 px-8 py-3 font-semibold text-white transition hover:bg-sky-600"
          >
            Send Message
          </button>

          {status && (
            <p className="mt-4 text-sm text-sky-300">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;