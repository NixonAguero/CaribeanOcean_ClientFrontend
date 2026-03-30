import styles from "../styles/AboutUs.module.css";
import { useAboutUs } from "../hooks/useAboutUs";
import Gallery from "./Gallery";
import AboutUsText from "./AboutUsText";

export default function AboutUs() {    
  const { data, loading, error } = useAboutUs();

  if(loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Something went wrong. Please try again.</div>;
  if (!data) return null;

  return (
    <section className={styles.aboutSection}>
      <AboutUsText description={data.description}/>
      <Gallery gallery = {data.gallery} />
    </section>
  );
};