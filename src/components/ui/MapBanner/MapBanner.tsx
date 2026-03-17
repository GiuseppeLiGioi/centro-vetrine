"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import styles from "./MapBanner.module.css";

export default function MapBanner() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className={styles.location}>
      <address className={styles.address}>Via Mameli 20, 07026, Olbia</address>

      <div className={styles.innerLocation}>
        <div className={styles.mapWrapper}>
          {showMap ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6029.375803457347!2d9.493963576670279!3d40.92258852469596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d94b030e4bf49f%3A0xf996380f5a91aa2b!2sCentro%20Vetrine%20Li%20Gioi!5e0!3m2!1sit!2sit!4v1772101264941!5m2!1sit!2sit"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="Mappa Centro Vetrine"
              className={styles.mapFrame}
            />
          ) : (
            <div className={styles.fallbackMap}>
              <p className={styles.mapText}>
                Visualizza la mappa interattiva direttamente nella pagina oppure
                apri la posizione su Google Maps.
              </p>

              <div className={styles.mapActions}>
                <button
                  type="button"
                  className={styles.buttonOpenMap}
                  onClick={() => setShowMap(true)}
                >
                  Mostra la mappa
                </button>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Via+Goffredo+Mameli+20+Olbia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapsLink}
                >
                  <MapPin />
                  <span className={styles.textMap}>Apri su Google Maps</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
