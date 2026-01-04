import { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: "EZA.global — Ethical AI Oversight",
  description: "Yapay zekâ çıktılarının etik risklerini ölçen ve görünür kılan bağımsız denetim altyapısı.",
  keywords: ["etik AI", "teknoloji etiği", "AI güvenliği", "etik yönlendirme", "EZA"],
  openGraph: {
    title: "EZA.global — Ethical AI Oversight",
    description: "Yapay zekâ çıktılarının etik risklerini ölçen ve görünür kılan bağımsız denetim altyapısı.",
    type: "website",
    url: "https://www.eza.global/",
    siteName: "EZA.global",
  },
  twitter: {
    card: "summary_large_image",
    title: "EZA.global — Ethical AI Oversight",
    description: "Yapay zekâ çıktılarının etik risklerini ölçen ve görünür kılan bağımsız denetim altyapısı.",
  },
  alternates: {
    canonical: "https://www.eza.global/",
  },
};

export function generatePageMetadata(
  title: string,
  description: string
): Metadata {
  return {
    title: `${title} | EZA.global`,
    description,
    openGraph: {
      title: `${title} | EZA.global`,
      description,
      type: "website",
    },
  };
}

