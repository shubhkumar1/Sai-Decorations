'use client';

import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Calculator, CheckCircle2, Phone, Calendar, Users, MapPin, Send, AlertCircle, ExternalLink } from 'lucide-react';
import { SERVICES } from '@/lib/business-data';

export default function InteractiveCalculator() {
  const [eventType, setEventType] = useState('Royal Wedding');
  const [eventDate, setEventDate] = useState('');
  const [venueCity, setVenueCity] = useState('Kanke Road, Ranchi');
  const [guestCount, setGuestCount] = useState(400);
  const [budgetRange, setBudgetRange] = useState('₹2,50,000 - ₹5,000,000');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'wedding-arrangements',
    'tent-house',
    'flower-decoration',
    'dj-light-sound'
  ]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [websiteHp, setWebsiteHp] = useState('');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Event types
  const eventTypes = [
    'Royal Wedding',
    'Sangeet & Ring Ceremony',
    'Haldi / Mehendi Function',
    'Reception Party',
    'Religious Trust Pandal',
    'Corporate Expo / Seminar',
    'Birthday / Anniversary'
  ];

  const popularCities = [
    'Kanke Road, Ranchi',
    'Lalpur, Ranchi',
    'Morabadi, Ranchi',
    'Harmu, Ranchi',
    'Doranda / Hinoo, Ranchi',
    'Ratu Road, Ranchi',
    'Bariatu, Ranchi',
    'Ramgarh',
    'Khunti',
    'Hazaribagh'
  ];

  // Dynamic estimate calculation
  const estimateRange = useMemo(() => {
    let base = 25000;
    if (eventType === 'Royal Wedding') base = 95000;
    if (eventType === 'Sangeet & Ring Ceremony') base = 45000;
    if (eventType === 'Religious Trust Pandal') base = 65000;
    if (eventType === 'Birthday / Anniversary') base = 12000;

    // Guest factor
    const guestMultiplier = Math.max(1, guestCount / 200);

    // Selected services count
    const serviceBase = selectedServices.length * 20000;

    const minEstimate = Math.round(base * guestMultiplier + serviceBase * 0.8);
    const maxEstimate = Math.round(minEstimate * 1.4);

    return {
      min: minEstimate.toLocaleString('en-IN'),
      max: maxEstimate.toLocaleString('en-IN')
    };
  }, [eventType, guestCount, selectedServices]);

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name || name.trim().length < 2) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!/^[6-9]\d{9}$/.test(phone.trim())) {
      setErrorMsg('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          eventType,
          eventDate: eventDate || new Date().toISOString().split('T')[0],
          venueCity,
          guestCount: Number(guestCount),
          budgetRange: `Estimated ₹${estimateRange.min} - ₹${estimateRange.max}`,
          servicesNeeded: selectedServices,
          message: message.trim(),
          website_hp: websiteHp
        })
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setWhatsappUrl(data.whatsappUrl);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        setErrorMsg(data.error || 'Failed to submit enquiry. Please try calling us directly.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMsg('Network error. Please WhatsApp or call us directly at +91 94311 04229.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-amber-500/30 overflow-hidden">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 p-6 sm:p-8 text-white relative">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-amber-950 font-bold">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold gold-gradient-text">
              Interactive Event Cost Estimator
            </h2>
            <p className="text-xs text-amber-200">
              Select your requirements below to see an instant estimate range for Ranchi.
            </p>
          </div>
        </div>
      </div>

      {submitted ? (
        <div className="p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="font-serif text-2xl font-bold text-amber-950">
              Enquiry Received Successfully!
            </h3>
            <p className="text-sm text-stone-600">
              Thank you, <span className="font-semibold text-stone-900">{name}</span>! Our event director will review your request for <span className="font-semibold">{eventType}</span> on <span className="font-semibold">{eventDate}</span> and get back to you shortly.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-300 max-w-md mx-auto space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-900">
              Estimated Price Range
            </p>
            <p className="text-3xl font-serif font-extrabold text-maroon">
              ₹{estimateRange.min} – ₹{estimateRange.max}
            </p>
            <p className="text-xs text-stone-500 italic">
              Includes selected services for {guestCount} guests in {venueCity}.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <span>Confirm Quote on WhatsApp Now</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={() => {
                setSubmitted(false);
                setName('');
                setPhone('');
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-stone-300 text-stone-700 font-semibold text-sm hover:bg-stone-50"
            >
              Calculate Another Estimate
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8">
          {errorMsg && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Step 1: Event Type & Date */}
          <div className="space-y-4">
            <label className="block text-xs font-bold uppercase tracking-wider text-amber-900">
              1. Event Type & Date
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {eventTypes.map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setEventType(type)}
                  className={`p-3 rounded-xl text-xs font-semibold text-left border transition-all ${
                    eventType === type
                      ? 'bg-amber-950 text-amber-300 border-amber-500 shadow-md ring-2 ring-amber-400/50'
                      : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-amber-50'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs text-stone-600 font-medium mb-1">Event Date</label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="date"
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-stone-600 font-medium mb-1">Venue Locality / City</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <select
                    value={venueCity}
                    onChange={(e) => setVenueCity(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none bg-white"
                  >
                    {popularCities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Guest Count Slider */}
          <div className="space-y-4 pt-4 border-t border-stone-200">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold uppercase tracking-wider text-amber-900">
                2. Expected Guests Count
              </label>
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-serif font-bold text-sm">
                {guestCount} Guests
              </span>
            </div>
            <input
              type="range"
              min="50"
              max="2500"
              step="50"
              value={guestCount}
              onChange={(e) => setGuestCount(Number(e.target.value))}
              className="w-full accent-amber-700 h-2 bg-stone-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-stone-400">
              <span>50 Guests (Intimate)</span>
              <span>500 Guests (Grand)</span>
              <span>2,500+ Guests (Mega Pandal)</span>
            </div>
          </div>

          {/* Step 3: Select Required Services */}
          <div className="space-y-4 pt-4 border-t border-stone-200">
            <label className="block text-xs font-bold uppercase tracking-wider text-amber-900">
              3. Select Services Needed (Multi-select)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SERVICES.map((s) => {
                const isSelected = selectedServices.includes(s.id);
                return (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => toggleService(s.id)}
                    className={`p-3 rounded-xl text-left border flex items-center justify-between transition-all ${
                      isSelected
                        ? 'bg-amber-900/10 border-amber-600 text-amber-950 font-semibold shadow-sm'
                        : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    <span className="text-xs">{s.title}</span>
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                        isSelected ? 'bg-amber-700 text-white' : 'border border-stone-300 text-transparent'
                      }`}
                    >
                      ✓
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Live Estimate Card Display */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border border-amber-500/40">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">
                Instant Estimated Price Range
              </p>
              <p className="font-serif text-3xl font-extrabold gold-gradient-text mt-1">
                ₹{estimateRange.min} – ₹{estimateRange.max}
              </p>
              <p className="text-[10px] text-amber-200/70">
                Includes all selected services • Custom discount applied on WhatsApp submission
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold shrink-0">
              100% Free Quote
            </span>
          </div>

          {/* Step 4: Contact Information */}
          <div className="space-y-4 pt-4 border-t border-stone-200">
            <label className="block text-xs font-bold uppercase tracking-wider text-amber-900">
              4. Contact Information to Lock Booking
            </label>

            {/* Honeypot field (hidden from real users) */}
            <input
              type="text"
              name="website_hp"
              value={websiteHp}
              onChange={(e) => setWebsiteHp(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-stone-600 font-medium mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-stone-600 font-medium mb-1">WhatsApp / Mobile Number *</label>
                <input
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="10-digit number e.g. 9431104229"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-stone-600 font-medium mb-1">Special Requirements or Notes (Optional)</label>
              <textarea
                rows={2}
                placeholder="Mention specific floral preferences, food cuisine, or stage dimensions..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-stone-300 text-xs focus:ring-2 focus:ring-amber-500 outline-none"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-amber-950 font-extrabold text-base shadow-xl hover:brightness-110 transition-all flex items-center justify-center gap-2 transform active:scale-98"
          >
            {loading ? (
              <span>Calculating & Submitting Enquiry...</span>
            ) : (
              <>
                <Send className="w-5 h-5 fill-amber-950" />
                <span>Submit Enquiry & Get WhatsApp Confirmation</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
