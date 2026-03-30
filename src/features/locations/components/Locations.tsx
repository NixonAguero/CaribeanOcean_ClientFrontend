import styles from '../styles/Locations.module.css'
import { useLocations } from "../hooks/useLocations";
import { GrMapLocation } from "react-icons/gr";


export default function Locations() {
  const { data, loading } = useLocations();

  if (loading) return <p>Cargando</p>

  return (
    <section className="sections">
      <h1 className="title">{data.title}</h1>
      <span className="subtitle"><GrMapLocation /></span>
      <p className="description">{data.subtitle}</p>

      <div className={styles.mapContainer}>
        <iframe 
        src={data.mapsLocation} 
        width="100%" 
        height="90%" 
        style={{ border: 0 }} 
        allowFullScreen={true}
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        
      </div>
    </section>
  );
};
