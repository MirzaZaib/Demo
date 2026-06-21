import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import PageTitle from '../components/PageTitle';

const Contact = () => {
  const { addToast } = useApp();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    addToast('Message sent! We will reply within 24 hours.');
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <PageTitle title="Contact Us" />
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-tech-text">Contact Us</h1>
        <p className="text-tech-muted mt-4 max-w-2xl mx-auto">
          Have a question about a laptop, order, or warranty? Our premium support team is here to help.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-tech-card border border-tech-border rounded-2xl p-6 md:p-8">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <CheckCircle className="w-16 h-16 text-tech-green mb-4" />
              <h3 className="text-2xl font-bold font-heading text-tech-text">Message Sent!</h3>
              <p className="text-tech-muted mt-2">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-tech-muted mb-2">Name</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-tech-bg border border-tech-border rounded-lg px-4 py-3 text-tech-text focus:outline-none focus:border-tech-blue"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-tech-muted mb-2">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-tech-bg border border-tech-border rounded-lg px-4 py-3 text-tech-text focus:outline-none focus:border-tech-blue"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-tech-muted mb-2">Subject</label>
                <input
                  required
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-tech-bg border border-tech-border rounded-lg px-4 py-3 text-tech-text focus:outline-none focus:border-tech-blue"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-tech-muted mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-tech-bg border border-tech-border rounded-lg px-4 py-3 text-tech-text focus:outline-none focus:border-tech-blue resize-none"
                  placeholder="Tell us more..."
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-tech-blue hover:bg-tech-blue-hover text-white font-semibold rounded-xl transition-colors flex items-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        <div className="space-y-4">
          <div className="bg-tech-card border border-tech-border rounded-2xl p-6">
            <Mail className="w-6 h-6 text-tech-blue mb-3" />
            <h3 className="font-semibold text-tech-text">Email</h3>
            <p className="text-sm text-tech-muted mt-1">support@nexus-tech.demo</p>
          </div>
          <div className="bg-tech-card border border-tech-border rounded-2xl p-6">
            <Phone className="w-6 h-6 text-tech-blue mb-3" />
            <h3 className="font-semibold text-tech-text">Phone</h3>
            <p className="text-sm text-tech-muted mt-1">+1 (888) 555-0199</p>
          </div>
          <div className="bg-tech-card border border-tech-border rounded-2xl p-6">
            <MapPin className="w-6 h-6 text-tech-blue mb-3" />
            <h3 className="font-semibold text-tech-text">Showroom</h3>
            <p className="text-sm text-tech-muted mt-1">100 Tech Plaza, Suite 400<br />San Francisco, CA 94105</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
