"use client";

import { useState, FormEvent } from "react";
import { Send, Loader2, User, Phone, Mail, Truck, Calendar, MapPin, CheckCircle, AlertCircle } from "lucide-react";

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  date?: string;
}

function validateForm(data: Record<string, FormDataEntryValue>): FormErrors {
  const errors: FormErrors = {};

  const name = (data.name as string || "").trim();
  if (!name || name.length < 2) {
    errors.name = "Le nom doit contenir au moins 2 caractères.";
  }

  const phone = (data.phone as string || "").replace(/\s/g, "");
  if (!phone || !/^0[1-9]\d{8}$/.test(phone)) {
    errors.phone = "Numéro invalide. Format attendu : 06 XX XX XX XX.";
  }

  const email = (data.email as string || "").trim();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Adresse email invalide.";
  }

  const date = (data.date as string || "").trim();
  if (date) {
    const selected = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selected < today) {
      errors.date = "La date ne peut pas être dans le passé.";
    }
  }

  return errors;
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600" role="alert">
      <AlertCircle className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError(false);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const validationErrors = validateForm(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSuccess(true);
        e.currentTarget.reset();
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border-2 border-success/30 bg-success/5 p-10 text-center animate-fade-in">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/20 text-success">
          <CheckCircle className="h-8 w-8" aria-hidden="true" />
        </div>
        <p className="font-heading text-xl font-bold text-success">Demande envoyée avec succès !</p>
        <p className="text-grey-600">
          On a bien reçu votre demande. Un membre de notre équipe vous rappelle dans les plus brefs délais pour organiser votre transport. Si c&apos;est urgent, n&apos;attendez pas — appelez le <strong>06 33 81 40 47</strong>.
        </p>
      </div>
    );
  }

  const inputBase = "w-full rounded-xl border-2 py-3.5 pl-12 pr-4 text-grey-800 outline-none transition-all";
  const inputNormal = `${inputBase} border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/20`;
  const inputError = `${inputBase} border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-200`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div aria-live="polite" className="sr-only">
        {Object.keys(errors).length > 0 && "Le formulaire contient des erreurs. Veuillez les corriger."}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {/* Nom */}
        <div>
          <label htmlFor="name" className="mb-2 block font-medium text-grey-800">
            Nom complet *
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-grey-500" aria-hidden="true" />
            <input
              type="text"
              id="name"
              name="name"
              required
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={errors.name ? inputError : inputNormal}
              placeholder="Votre nom"
            />
          </div>
          <div id="name-error"><FieldError message={errors.name} /></div>
        </div>
        {/* Téléphone */}
        <div>
          <label htmlFor="phone" className="mb-2 block font-medium text-grey-800">
            Téléphone *
          </label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-grey-500" aria-hidden="true" />
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={errors.phone ? inputError : inputNormal}
              placeholder="06 XX XX XX XX"
            />
          </div>
          <div id="phone-error"><FieldError message={errors.phone} /></div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-2 block font-medium text-grey-800">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-grey-500" aria-hidden="true" />
            <input
              type="email"
              id="email"
              name="email"
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={errors.email ? inputError : inputNormal}
              placeholder="votre@email.com"
            />
          </div>
          <div id="email-error"><FieldError message={errors.email} /></div>
        </div>
        {/* Type transport */}
        <div>
          <label htmlFor="transportType" className="mb-2 block font-medium text-grey-800">
            Type de transport
          </label>
          <div className="relative">
            <Truck className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-grey-500" aria-hidden="true" />
            <select
              id="transportType"
              name="transportType"
              className="w-full appearance-none rounded-xl border-2 border-gray-200 bg-white py-3 pl-12 pr-10 text-grey-800 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/20"
            >
              <option value="">Sélectionnez</option>
              <option value="ambulance">Ambulance</option>
              <option value="vsl">VSL</option>
              <option value="taxi">Taxi Conventionné</option>
              <option value="longue-distance">Longue Distance</option>
              <option value="autre">Autre</option>
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
              <svg className="h-4 w-4 text-grey-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {/* Date */}
        <div>
          <label htmlFor="date" className="mb-2 block font-medium text-grey-800">
            Date souhaitée
          </label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-grey-500" aria-hidden="true" />
            <input
              type="date"
              id="date"
              name="date"
              aria-invalid={errors.date ? true : undefined}
              aria-describedby={errors.date ? "date-error" : undefined}
              className={errors.date ? inputError : inputNormal}
            />
          </div>
          <div id="date-error"><FieldError message={errors.date} /></div>
        </div>
        {/* Départ */}
        <div>
          <label htmlFor="departure" className="mb-2 block font-medium text-grey-800">
            Lieu de départ
          </label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-grey-500" aria-hidden="true" />
            <input
              type="text"
              id="departure"
              name="departure"
              className={inputNormal}
              placeholder="Adresse de départ"
            />
          </div>
        </div>
        {/* Destination */}
        <div>
          <label htmlFor="destination" className="mb-2 block font-medium text-grey-800">
            Lieu d&apos;arrivée
          </label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-grey-500" aria-hidden="true" />
            <input
              type="text"
              id="destination"
              name="destination"
              className={inputNormal}
              placeholder="Adresse de destination"
            />
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-2 block font-medium text-grey-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 text-grey-800 outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/20 resize-none"
          placeholder="Informations complémentaires..."
        />
      </div>

      {submitError && (
        <div className="flex items-center gap-2 rounded-xl border-2 border-red-200 bg-red-50 p-4 text-red-700" role="alert">
          <AlertCircle className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
          <p>Une erreur est survenue. Veuillez réessayer ou nous appeler directement.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-white transition-all hover:bg-primary-dark hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" aria-hidden="true" />
            Envoyer la demande
          </>
        )}
      </button>
    </form>
  );
}
