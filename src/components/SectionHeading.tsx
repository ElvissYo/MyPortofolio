import RevealOnScroll from "./RevealOnScroll";

interface SectionHeadingProps {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ number, eyebrow, title, description }: SectionHeadingProps) => (
  <RevealOnScroll className="section-header">
    <div>
      <p className="eyebrow"><span>{number} /</span> {eyebrow}</p>
      <h2 className="section-heading">{title}</h2>
    </div>
    {description && <p className="section-description">{description}</p>}
  </RevealOnScroll>
);

export default SectionHeading;
