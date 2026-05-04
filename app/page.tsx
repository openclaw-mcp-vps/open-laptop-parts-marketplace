export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          Open Hardware Marketplace
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
          Build Better Laptops,{" "}
          <span className="text-[#58a6ff]">Together</span>
        </h1>
        <p className="text-lg sm:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          OpenParts connects hardware hackers, repair shops, and educational institutions with
          open-source laptop component suppliers and design file repositories.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-lg hover:bg-[#79b8ff] transition-colors"
          >
            Get Access — $39/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-4 rounded-lg border border-[#30363d] text-[#c9d1d9] font-semibold text-lg hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "⚙️", title: "Component Catalog", desc: "Browse verified open-source laptop parts with 3D previews and full specs." },
            { icon: "📐", title: "Design File Sharing", desc: "Access and contribute CAD files, schematics, and firmware via GitHub integration." },
            { icon: "🏪", title: "Vendor & Buyer Dashboards", desc: "Separate portals for suppliers and builders with order management and analytics." }
          ].map((f) => (
            <div key={f.title} className="p-5 rounded-xl bg-[#161b22] border border-[#30363d]">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-2xl bg-[#161b22] border border-[#58a6ff] p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <span className="inline-block mb-2 px-3 py-1 rounded-full bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">Pro</span>
          <div className="mt-4 mb-2">
            <span className="text-5xl font-extrabold text-white">$39</span>
            <span className="text-[#8b949e] ml-1">/month</span>
          </div>
          <p className="text-[#8b949e] mb-6 text-sm">Everything you need to source, design, and sell open laptop hardware.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Full component catalog access",
              "Unlimited design file downloads",
              "Vendor storefront & buyer dashboard",
              "GitHub repository integration",
              "Stripe-powered secure payments",
              "Priority community support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Building Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Who is OpenParts for?",
              a: "Hardware hackers building custom laptops, repair shops sourcing open components, and educational institutions teaching hardware design."
            },
            {
              q: "How does the GitHub integration work?",
              a: "Link your GitHub repositories to your vendor profile. Design files, schematics, and firmware are indexed and searchable directly in the marketplace."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel anytime from your dashboard with no penalties. Your access continues until the end of the billing period."
            }
          ].map((item) => (
            <div key={item.q} className="rounded-xl bg-[#161b22] border border-[#30363d] p-5">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#484f58]">
        © {new Date().getFullYear()} OpenParts. Open hardware, open future.
      </footer>
    </main>
  );
}
