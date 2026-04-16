import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your House of Barber account for faster booking and profile access.",
  openGraph: { url: "https://www.houseofbarber.com/login" },
};

export default function LoginPage() {
  return (
    <main className="pt-24 pb-20 min-h-screen bg-hob-black">
      <section className="section-container max-w-xl">
        <div className="bento-card p-8">
          <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
            Account
          </span>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl font-light text-hob-white mb-3">
            Login
          </h1>
          <p className="text-sm text-hob-muted leading-relaxed mb-6">
            Use the House of Barber app for full account login and booking profile access.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/booking" className="inline-flex items-center justify-center border border-hob-gold px-6 py-3 font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-gold uppercase hover:bg-hob-gold hover:text-hob-black transition-all">
              Go to Booking
            </Link>
            <Link href="/signup" className="inline-flex items-center justify-center border border-hob-gold/35 px-6 py-3 font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-white uppercase hover:border-hob-gold hover:text-hob-gold transition-colors">
              Need Signup?
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
