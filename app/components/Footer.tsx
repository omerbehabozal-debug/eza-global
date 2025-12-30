import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-eza-gray border-t border-gray-200/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="text-xl font-semibold text-eza-text">EZA.global</span>
            </div>
            <p className="text-eza-text-secondary text-sm leading-relaxed mb-4 max-w-xs">
              Yapay zekâ çıktılarının etik etkilerini
              müdahale etmeden ölçen ve görünür kılan
              etik gözlem altyapısı.
            </p>
            <p className="text-eza-text-secondary/60 text-xs leading-relaxed italic">
              EZA is a non-interventionist ethical observation infrastructure.
            </p>
          </div>

          {/* Ürünler */}
          <div>
            <h3 className="text-sm font-semibold text-eza-text mb-4">Ürünler</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/products/standalone"
                  className="text-eza-text-secondary hover:text-eza-text transition-colors text-sm hover:underline"
                >
                  Standalone
                </Link>
              </li>
              <li>
                <Link
                  href="/products/proxy-lite"
                  className="text-eza-text-secondary hover:text-eza-text transition-colors text-sm hover:underline"
                >
                  Proxy-Lite
                </Link>
              </li>
              <li>
                <Link
                  href="/products/proxy"
                  className="text-eza-text-secondary hover:text-eza-text transition-colors text-sm hover:underline"
                >
                  Proxy
                </Link>
              </li>
            </ul>
          </div>

          {/* Paneller */}
          <div>
            <h3 className="text-sm font-semibold text-eza-text mb-4">Paneller</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/panels/regulator"
                  className="text-eza-text-secondary hover:text-eza-text transition-colors text-sm hover:underline"
                >
                  Global Oversight Panel
                </Link>
              </li>
              <li>
                <Link
                  href="/panels/regulator"
                  className="text-eza-text-secondary hover:text-eza-text transition-colors text-sm hover:underline"
                >
                  Ulusal Regülasyon Panelleri
                </Link>
              </li>
              <li>
                <Link
                  href="/panels/corporate"
                  className="text-eza-text-secondary hover:text-eza-text transition-colors text-sm hover:underline"
                >
                  Sektörel Paneller
                </Link>
              </li>
            </ul>
          </div>

          {/* Kaynaklar / Yasal */}
          <div>
            <h3 className="text-sm font-semibold text-eza-text mb-4">Kaynaklar</h3>
            <ul className="space-y-2.5 mb-6">
              <li>
                <Link
                  href="/documentation"
                  className="text-eza-text-secondary hover:text-eza-text transition-colors text-sm hover:underline"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/whitepaper"
                  className="text-eza-text-secondary hover:text-eza-text transition-colors text-sm hover:underline"
                >
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/test-suite"
                  className="text-eza-text-secondary hover:text-eza-text transition-colors text-sm hover:underline"
                >
                  Test & Safety Benchmarks
                </Link>
              </li>
            </ul>
            
            <h3 className="text-sm font-semibold text-eza-text mb-4">Yasal</h3>
            <ul className="space-y-2.5 mb-6">
              <li>
                <Link
                  href="/privacy"
                  className="text-eza-text-secondary hover:text-eza-text transition-colors text-sm hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-eza-text-secondary hover:text-eza-text transition-colors text-sm hover:underline"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
            
            <div>
              <Link
                href="/contact"
                className="text-eza-text-secondary hover:text-eza-text transition-colors text-sm hover:underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-eza-text-secondary text-sm">
              &copy; {new Date().getFullYear()} EZA.global. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
