import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { siteContent } from "@/data/content";
import { useSubmitContact } from "@workspace/api-client-react";
import { ContactInputInquiryType } from "@workspace/api-client-react";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";

const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(200),
  organization: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  country: z.string().optional(),
  inquiryType: z.enum([
    ContactInputInquiryType.industrial_pilot,
    ContactInputInquiryType.research_collaboration,
    ContactInputInquiryType.join_the_team,
    ContactInputInquiryType.incubator_or_program,
    ContactInputInquiryType.investor_conversation,
    ContactInputInquiryType.general_inquiry
  ]),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
  privacyConsent: z.boolean().refine(val => val === true, { message: "You must agree to the privacy policy" }),
  honeypot: z.string().optional()
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [location] = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  
  const submitContact = useSubmitContact();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      organization: "",
      email: "",
      phone: "",
      country: "Morocco",
      inquiryType: ContactInputInquiryType.general_inquiry,
      message: "",
      privacyConsent: false,
      honeypot: ""
    }
  });

  useEffect(() => {
    // Parse query params safely
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      const typeParam = searchParams.get('type');
      if (typeParam && Object.values(ContactInputInquiryType).includes(typeParam as ContactInputInquiryType)) {
        form.setValue('inquiryType', typeParam as ContactInputInquiryType);
      }
    }
  }, [location, form]);

  const onSubmit = (data: ContactFormValues) => {
    setApiError(null);
    submitContact.mutate(
      { data },
      {
        onSuccess: () => {
          setSubmitted(true);
        },
        onError: (error: any) => {
          setApiError(error?.response?.data?.error || "An error occurred while submitting the form. Please try again.");
        }
      }
    );
  };

  return (
    <Layout>
      <section className="bg-[#050810] pt-32 pb-32 text-[#F0F4FF] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00C2FF]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Reveal>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-heading font-black leading-[1.1] tracking-tight mb-8">
                Start a <span className="gradient-text">Conversation</span>
              </h1>
              <p className="text-xl text-[#8B9EC4] leading-relaxed font-medium">
                Whether you're a researcher, an industrial operator, or an investor, we want to hear from you.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-32 bg-[#0C1220]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Contact Info */}
            <Reveal className="lg:col-span-1">
              <div className="bg-[#050810] p-10 rounded-[2rem] border border-white/[0.06] shadow-xl relative overflow-hidden group hover:border-[#00C2FF]/30 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00C2FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <h3 className="text-2xl font-heading font-bold text-[#F0F4FF] mb-8 relative z-10">Direct Contact</h3>
                <div className="space-y-8 relative z-10">
                  <div>
                    <div className="text-xs font-bold text-[#4A5880] uppercase tracking-widest mb-2">Email</div>
                    <a href="mailto:Momobaltit30@gmail.com" className="text-[#00C2FF] font-bold text-lg hover:text-[#00E87A] transition-colors">Momobaltit30@gmail.com</a>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#4A5880] uppercase tracking-widest mb-2">Location</div>
                    <p className="text-[#F0F4FF] text-lg font-medium">Nador, Morocco</p>
                  </div>
                </div>

                <div className="mt-12 pt-10 border-t border-white/[0.06] relative z-10">
                  <h4 className="font-heading font-bold text-[#F0F4FF] mb-4">Response Expectation</h4>
                  <p className="text-sm text-[#8B9EC4] leading-relaxed">
                    As an early-stage startup, we read every message carefully. Please allow 48-72 hours for a response to detailed technical or partnership inquiries.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal className="lg:col-span-2" delay={0.2}>
              <div className="bg-[#050810] p-10 md:p-14 rounded-[2.5rem] border border-white/[0.06] shadow-2xl relative overflow-hidden">
                {submitted ? (
                  <div className="text-center py-20 px-4">
                    <div className="w-24 h-24 bg-[#00E87A]/10 text-[#00E87A] rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h3 className="text-4xl font-heading font-bold text-[#F0F4FF] mb-6">Message Received</h3>
                    <p className="text-[#8B9EC4] text-lg mb-10 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out to SLIPS Morocco. We have received your inquiry and will be in touch shortly.
                    </p>
                    <button 
                      onClick={() => {
                        setSubmitted(false);
                        form.reset();
                      }}
                      className="text-[#00C2FF] font-bold uppercase tracking-wider text-sm hover:text-[#00E87A] transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {apiError && (
                      <div className="bg-red-500/10 text-red-400 p-6 rounded-2xl flex gap-4 text-sm border border-red-500/20 mb-8 items-start">
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <p className="leading-relaxed">{apiError}</p>
                      </div>
                    )}

                    <div className="hidden">
                      <label htmlFor="honeypot">Don't fill this out if you're human</label>
                      <input id="honeypot" {...form.register("honeypot")} tabIndex={-1} />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-sm font-bold text-[#F0F4FF] mb-3 uppercase tracking-wider" htmlFor="fullName">Full Name *</label>
                        <input 
                          id="fullName"
                          {...form.register("fullName")}
                          className={`w-full p-4 rounded-xl border bg-[#0C1220] text-[#F0F4FF] placeholder-[#4A5880] focus:bg-white/[0.03] focus:outline-none focus:border-[#00C2FF] transition-colors ${form.formState.errors.fullName ? 'border-red-500/50' : 'border-white/[0.06]'}`}
                          placeholder="Jane Doe"
                        />
                        {form.formState.errors.fullName && <p className="text-red-400 text-xs mt-2 font-medium">{form.formState.errors.fullName.message}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-[#F0F4FF] mb-3 uppercase tracking-wider" htmlFor="email">Work Email *</label>
                        <input 
                          id="email"
                          type="email"
                          {...form.register("email")}
                          className={`w-full p-4 rounded-xl border bg-[#0C1220] text-[#F0F4FF] placeholder-[#4A5880] focus:bg-white/[0.03] focus:outline-none focus:border-[#00C2FF] transition-colors ${form.formState.errors.email ? 'border-red-500/50' : 'border-white/[0.06]'}`}
                          placeholder="jane@company.com"
                        />
                        {form.formState.errors.email && <p className="text-red-400 text-xs mt-2 font-medium">{form.formState.errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-sm font-bold text-[#F0F4FF] mb-3 uppercase tracking-wider" htmlFor="organization">Organization <span className="text-[#4A5880] font-normal">(Optional)</span></label>
                        <input 
                          id="organization"
                          {...form.register("organization")}
                          className="w-full p-4 rounded-xl border border-white/[0.06] bg-[#0C1220] text-[#F0F4FF] placeholder-[#4A5880] focus:bg-white/[0.03] focus:outline-none focus:border-[#00C2FF] transition-colors"
                          placeholder="University or Company"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-[#F0F4FF] mb-3 uppercase tracking-wider" htmlFor="phone">Phone <span className="text-[#4A5880] font-normal">(Optional)</span></label>
                        <input 
                          id="phone"
                          {...form.register("phone")}
                          className="w-full p-4 rounded-xl border border-white/[0.06] bg-[#0C1220] text-[#F0F4FF] placeholder-[#4A5880] focus:bg-white/[0.03] focus:outline-none focus:border-[#00C2FF] transition-colors"
                          placeholder="+212 ..."
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-sm font-bold text-[#F0F4FF] mb-3 uppercase tracking-wider" htmlFor="country">Country</label>
                        <select 
                          id="country"
                          {...form.register("country")}
                          className="w-full p-4 rounded-xl border border-white/[0.06] bg-[#0C1220] text-[#F0F4FF] focus:bg-white/[0.03] focus:outline-none focus:border-[#00C2FF] transition-colors appearance-none"
                        >
                          <option value="Morocco">Morocco</option>
                          <option value="France">France</option>
                          <option value="Spain">Spain</option>
                          <option value="United States">United States</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-[#F0F4FF] mb-3 uppercase tracking-wider" htmlFor="inquiryType">Inquiry Type *</label>
                        <select 
                          id="inquiryType"
                          {...form.register("inquiryType")}
                          className={`w-full p-4 rounded-xl border bg-[#0C1220] text-[#F0F4FF] focus:bg-white/[0.03] focus:outline-none focus:border-[#00C2FF] transition-colors appearance-none ${form.formState.errors.inquiryType ? 'border-red-500/50' : 'border-white/[0.06]'}`}
                        >
                          {siteContent.inquiryTypes.map(opt => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                        {form.formState.errors.inquiryType && <p className="text-red-400 text-xs mt-2 font-medium">{form.formState.errors.inquiryType.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-[#F0F4FF] mb-3 uppercase tracking-wider" htmlFor="message">Message *</label>
                      <textarea 
                        id="message"
                        {...form.register("message")}
                        rows={6}
                        className={`w-full p-4 rounded-xl border bg-[#0C1220] text-[#F0F4FF] placeholder-[#4A5880] focus:bg-white/[0.03] focus:outline-none focus:border-[#00C2FF] transition-colors resize-y ${form.formState.errors.message ? 'border-red-500/50' : 'border-white/[0.06]'}`}
                        placeholder="Please describe your interest or proposed collaboration..."
                      />
                      {form.formState.errors.message && <p className="text-red-400 text-xs mt-2 font-medium">{form.formState.errors.message.message}</p>}
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <div className="flex items-center h-6 mt-0.5">
                        <input 
                          id="privacyConsent"
                          type="checkbox"
                          {...form.register("privacyConsent")}
                          className="w-5 h-5 rounded border-white/[0.2] text-[#00C2FF] focus:ring-[#00C2FF] bg-[#0C1220]"
                        />
                      </div>
                      <div className="text-sm">
                        <label htmlFor="privacyConsent" className={`font-medium leading-relaxed cursor-pointer ${form.formState.errors.privacyConsent ? 'text-red-400' : 'text-[#8B9EC4]'}`}>
                          I consent to SLIPS Morocco storing and processing my personal data to respond to my inquiry. *
                        </label>
                        {form.formState.errors.privacyConsent && <p className="text-red-400 text-xs mt-2 font-medium">{form.formState.errors.privacyConsent.message}</p>}
                      </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={submitContact.isPending}
                      className="w-full bg-gradient-to-r from-[#00C2FF] to-[#00E87A] text-[#050810] py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,194,255,0.2)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {submitContact.isPending ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
