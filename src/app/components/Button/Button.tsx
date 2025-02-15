/* /components/Button/Button.tsx */
import styles from './Button.module.css';

const Button = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
