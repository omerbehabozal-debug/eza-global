import Section from "../components/Section";
import Manifesto from "../components/Manifesto";

export const metadata = {
  title: "Kurucu Manifestosu | EZA",
  description: "EZA'nın kurucu manifestosu. Teknolojinin etik kullanımı için vizyon ve misyon.",
};

export default function ManifestoPage() {
  return (
    <>
      <Section className="bg-white">
        <Manifesto />
      </Section>
    </>
  );
}

