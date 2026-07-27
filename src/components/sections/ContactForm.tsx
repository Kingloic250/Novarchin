import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { SectionReveal, RevealItem } from '@/components/SectionReveal';
import { RevealWords } from '@/components/RevealWords';
import { cn } from '@/lib/utils';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name (min 2 characters)'),
  email: z.string().email('Enter a valid email address'),
  projectType: z.string().min(1, 'Select a project type'),
  message: z.string().min(10, 'Tell us a bit more (min 10 characters)'),
});

type FormValues = z.infer<typeof schema>;

const projectTypes = [
  'Custom Software',
  'Enterprise Systems',
  'Web & Mobile App',
  'AI & Automation',
  'FinTech',
  'Cloud & DevOps',
  'Cybersecurity',
  'Consulting',
  'Other',
];

function Field({
  label,
  error,
  children,
  htmlFor,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  htmlFor: string;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-soft"
      >
        {label}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-1.5 text-xs font-medium text-wine-700"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputClass =
  'w-full rounded-2xl border border-sand-300 bg-sand-50/70 px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 transition-all focus:border-wine-600 focus:bg-sand-50 focus:outline-none focus:ring-2 focus:ring-wine-600/20';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 1100));
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: info */}
          <SectionReveal className="lg:col-span-5">
            <RevealItem>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-wine-700">
                Contact
              </span>
            </RevealItem>
            <RevealWords
              text="Let's talk about your project."
              as="h2"
              className="mt-4 font-display text-display font-bold text-gradient"
            />
            <RevealItem>
              <p className="mt-5 text-lg text-ink-muted">
                Ready to build something transformative? Tell us about your project,
                and our team will respond within one business day.
              </p>
            </RevealItem>

            <RevealItem>
              <div className="mt-9 space-y-4">
                <a
                  href="mailto:hello@novarchin.studio"
                  className="group flex items-center gap-4 text-ink transition-colors hover:text-wine-700"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-sand-300 bg-sand-50 transition-colors group-hover:border-wine-700 group-hover:bg-wine-700 group-hover:text-amber-300">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs text-ink-muted">Email</div>
                    <div className="font-medium">hello@novarchin.studio</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-ink">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-sand-300 bg-sand-50">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs text-ink-muted">Phone</div>
                    <div className="font-medium">+1 (415) 555-0142</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-ink">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-sand-300 bg-sand-50">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-xs text-ink-muted">Studio</div>
                    <div className="font-medium">Remote · Kigali · Nairobi</div>
                  </div>
                </div>
              </div>
            </RevealItem>
          </SectionReveal>

          {/* Right: form */}
          <SectionReveal className="lg:col-span-7">
            <RevealItem>
              <div className="relative rounded-4xl border border-sand-300 bg-sand-50/70 p-7 shadow-card sm:p-9">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex min-h-[420px] flex-col items-center justify-center text-center"
                    >
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.1 }}
                        className="grid h-16 w-16 place-items-center rounded-full bg-wine-700 text-amber-300 shadow-glow"
                      >
                        <CheckCircle2 className="h-8 w-8" />
                      </motion.span>
                      <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                        Message sent
                      </h3>
                      <p className="mt-2 max-w-sm text-ink-muted">
                        Thanks for reaching out. We'll get back to you within one
                        business day.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-wine-700 hover:text-wine-800"
                      >
                        Send another message
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-5"
                      noValidate
                    >
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <Field label="Name" error={errors.name?.message} htmlFor="name">
                          <input
                            id="name"
                            type="text"
                            placeholder="Jane Doe"
                            className={cn(inputClass, errors.name && 'border-wine-600 bg-wine-50/40')}
                            {...register('name')}
                          />
                        </Field>
                        <Field label="Email" error={errors.email?.message} htmlFor="email">
                          <input
                            id="email"
                            type="email"
                            placeholder="jane@company.com"
                            className={cn(inputClass, errors.email && 'border-wine-600 bg-wine-50/40')}
                            {...register('email')}
                          />
                        </Field>
                      </div>

                      <Field
                        label="Project Type"
                        error={errors.projectType?.message}
                        htmlFor="projectType"
                      >
                        <select
                          id="projectType"
                          className={cn(inputClass, 'appearance-none', errors.projectType && 'border-wine-600 bg-wine-50/40')}
                          {...register('projectType')}
                          defaultValue=""
                        >
                          <option value="" disabled>
                            Select a project type
                          </option>
                          {projectTypes.map((p) => (
                            <option key={p} value={p}>
                              {p}
                            </option>
                          ))}
                        </select>
                      </Field>

                      <Field
                        label="Message"
                        error={errors.message?.message}
                        htmlFor="message"
                      >
                        <textarea
                          id="message"
                          rows={5}
                          placeholder="Tell us about your project, timeline, and requirements…"
                          className={cn(inputClass, 'resize-none', errors.message && 'border-wine-600 bg-wine-50/40')}
                          {...register('message')}
                        />
                      </Field>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-wine-700 px-6 py-4 text-sm font-medium text-sand-50 shadow-lift transition-all hover:bg-wine-800 disabled:opacity-70 sm:w-auto"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            Send message
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </RevealItem>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
