import FadeIn from "./FadeIn";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  fadeIn?: boolean;
}

export default function Section({
  children,
  id,
  className = "",
  fadeIn = true,
}: SectionProps) {
  const content = (
    <section
      id={id}
      className={`min-h-screen md:min-h-0 py-8 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 flex flex-col ${className}`}
    >
      <div className="flex-1 flex flex-col justify-center">
        {children}
      </div>
    </section>
  );

  if (fadeIn) {
    return <FadeIn>{content}</FadeIn>;
  }

  return content;
}
