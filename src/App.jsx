import { useEffect, useState } from "react";
import Splash from "./components/Splash.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import Home from "./pages/Home.jsx";
import Learn from "./pages/Learn.jsx";
import Quiz from "./pages/Quiz.jsx";
import Community from "./pages/Community.jsx";
import Contact from "./pages/Contact.jsx";
import Articles from "./pages/Articles.jsx";
import Calculator from "./pages/Calculator.jsx";
import Points from "./pages/Points.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";

const routes = {
  "": [Home, "Edukasi Sampah"], belajar: [Learn, "Belajar"], artikel: [Articles, "Artikel"],
  kalkulator: [Calculator, "Kalkulator Sampah"], titik: [Points, "Titik Pengumpulan"],
  komunitas: [Community, "Komunitas"], quiz: [Quiz, "Coba Quiz"], tentang: [About, "Tentang Kami"], kontak: [Contact, "Kontak"]
};
const parse = () => {
  const [page = "", ...rest] = location.hash.replace(/^#\/?/, "").split("/");
  return { page, param: rest.join("/") };
};

export default function App() {
  const [r, setR] = useState(parse());
  useEffect(() => {
    const onChange = () => { setR(parse()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  const entry = routes[r.page];
  useEffect(() => { document.title = `${entry ? entry[1] : "Halaman tidak ditemukan"} - Sampadia`; }, [r.page, entry]);
  const Page = entry ? entry[0] : NotFound;
  return (
    <>
      <Splash />
      <Navbar route={r.page} />
      <main><Page param={r.param} /></main>
      <Footer />
      <BackToTop />
    </>
  );
}
