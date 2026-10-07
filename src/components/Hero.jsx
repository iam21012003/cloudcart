import { ArrowRight, Cloud, ShieldCheck, Zap } from "lucide-react";
export default function Hero() {
  const goToProducts = () => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  return <section id="home" className="hero"><div className="hero-copy"><span className="pill">A cloud-native marketplace experience</span><h1>Everything you need to <em>learn, build and create.</em></h1><p>Explore cloud learning resources, modern electronics, and developer accessories in one polished marketplace.</p><button className="primary-button" onClick={goToProducts}>Explore products <ArrowRight size={18} /></button><div className="benefits"><span><ShieldCheck />Secure demo checkout</span><span><Zap />Built for cloud scale</span></div></div><div className="hero-card"><Cloud size={90} /><h2>CloudCart</h2><p>Your technology marketplace</p></div></section>;
}
