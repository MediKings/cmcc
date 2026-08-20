'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const { ref, visible } = useReveal();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-primary-900">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'reveal-visible' : ''} text-center mb-16`}>
          <p className="text-accent-400 text-sm font-semibold tracking-[0.25em] uppercase mb-3">Nous contacter</p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary-50 mb-4">Notre adresse & nos contacts</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info cards */}
          <div className={`reveal ${visible ? 'reveal-visible' : ''} space-y-5`}>
            <div className="p-6 rounded-2xl bg-primary-800/50 border border-primary-700 flex items-start gap-4 hover:border-accent-400/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent-500/15 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent-400" />
              </div>
              <div>
                <h3 className="text-primary-50 font-semibold mb-1">Adresse</h3>
                <p className="text-primary-300 text-sm leading-relaxed">
                  2ème rue Limete Industriel, numéro 6<br />
                  Kinshasa, République Démocratique du Congo
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-primary-800/50 border border-primary-700 flex items-start gap-4 hover:border-accent-400/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent-500/15 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-accent-400" />
              </div>
              <div>
                <h3 className="text-primary-50 font-semibold mb-1">Nos rendez-vous</h3>
                <p className="text-primary-300 text-sm leading-relaxed">
                  <span className="text-primary-100 font-medium">Mercredi :</span> Soirée de Gloire, 17h — 19h30<br />
                  <span className="text-primary-100 font-medium">Vendredi :</span> Veillée des Vaillants de Feu, 23h — 5h<br />
                  <span className="text-primary-100 font-medium">Dimanche :</span> 1er culte 8h — 10h30 · 2ème culte 11h30 — 14h (LIVE)
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-primary-800/50 border border-primary-700 flex items-start gap-4 hover:border-accent-400/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-accent-500/15 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <h3 className="text-primary-50 font-semibold mb-1">Téléphone</h3>
                  <p className="text-primary-300 text-sm">+243 000 000 000</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-primary-800/50 border border-primary-700 flex items-start gap-4 hover:border-accent-400/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-accent-500/15 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent-400" />
                </div>
                <div>
                  <h3 className="text-primary-50 font-semibold mb-1">Email</h3>
                  <p className="text-primary-300 text-sm">contact@lacompassion.org</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`reveal ${visible ? 'reveal-visible' : ''} p-8 rounded-2xl bg-primary-800/30 border border-primary-700`} style={{ transitionDelay: '200ms' }}>
            <h3 className="text-2xl font-serif font-semibold text-primary-50 mb-2">Envoyez-nous un message</h3>
            <p className="text-primary-300 text-sm mb-6">Partagez votre requête de prière ou posez-nous une question.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-primary-200 text-sm font-medium mb-2">Nom complet</label>
                  <input
                    type="text"
                    required
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-xl bg-primary-950/60 border border-primary-700 text-primary-50 placeholder-primary-500 focus:border-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-primary-200 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="vous@exemple.com"
                    className="w-full px-4 py-3 rounded-xl bg-primary-950/60 border border-primary-700 text-primary-50 placeholder-primary-500 focus:border-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-400 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-primary-200 text-sm font-medium mb-2">Sujet</label>
                <input
                  type="text"
                  required
                  placeholder="Objet de votre message"
                  className="w-full px-4 py-3 rounded-xl bg-primary-950/60 border border-primary-700 text-primary-50 placeholder-primary-500 focus:border-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-primary-200 text-sm font-medium mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Votre message ou requête de prière..."
                  className="w-full px-4 py-3 rounded-xl bg-primary-950/60 border border-primary-700 text-primary-50 placeholder-primary-500 focus:border-accent-400 focus:outline-none focus:ring-1 focus:ring-accent-400 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 text-primary-950 font-semibold hover:shadow-xl hover:shadow-accent-500/40 hover:scale-[1.02] transition-all"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message envoyé !
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
