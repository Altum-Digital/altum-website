import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { HomePage } from "@/pages/HomePage";
import { ProductosPage } from "@/pages/ProductosPage";
import { EquipoPage } from "@/pages/EquipoPage";
import { CasosPage } from "@/pages/CasosPage";
import { ContactoPage } from "@/pages/ContactoPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-ivory text-navy antialiased">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productos" element={<ProductosPage />} />
            <Route path="/equipo" element={<EquipoPage />} />
            <Route path="/casos" element={<CasosPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
