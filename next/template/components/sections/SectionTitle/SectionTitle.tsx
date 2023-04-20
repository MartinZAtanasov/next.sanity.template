interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  const { title, subtitle } = props;

  return (
    <h2>
      {title}
      {subtitle && <span>{subtitle}</span>}
    </h2>
  );
};
