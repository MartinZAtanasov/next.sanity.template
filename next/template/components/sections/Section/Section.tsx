import { ccn } from "@template/helpers/css";
import styles from "./Section.module.css";
import { PropsWithChildren } from "react";

interface SectionProps extends PropsWithChildren {
  className?: string;
}

export const Section: React.FC<SectionProps> = (props) => {
  const { children, className } = props;

  return (
    <div
      className={`${styles.section} ${ccn(!!className, className as string)}`}
    >
      <div>{children}</div>
    </div>
  );
};
