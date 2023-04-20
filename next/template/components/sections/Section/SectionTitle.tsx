import { ccn } from "@template/helpers/css";
import styles from "./Section.module.css";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  extraMargin?: boolean;
  center?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  const { title, extraMargin, subtitle, center } = props;

  return (
    <h2
      className={`${styles.title} ${ccn(
        extraMargin!,
        styles.extraMargin
      )} ${ccn(center!, styles.center)}`}
    >
      {title}
      {subtitle && <span>{subtitle}</span>}
    </h2>
  );
};
