import Container from "@/components/ui/Container/Container";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Centro Vetrine",
  description:
    "Leggi la Cookie Policy di Centro Vetrine per conoscere l'utilizzo dei cookie e delle tecnologie simili sul sito.",
};

export default function CookiePolicyPage() {
  return (
    <Container className={styles.legalPage}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Informativa</p>
        <h1 className={styles.title}>Cookie Policy</h1>
        <p className={styles.intro}>
          In questa pagina trovi le informazioni relative all’utilizzo di cookie
          e di eventuali strumenti tecnici o servizi di terze parti presenti sul
          sito web di Centro Vetrine.
        </p>
        <p className={styles.updated}>Ultimo aggiornamento: 20/03/2026</p>
      </header>

      <div className={styles.content}>
        <section className={styles.section} aria-labelledby="cosa-sono">
          <h2 id="cosa-sono" className={styles.sectionTitle}>
            1. Cosa sono i cookie
          </h2>
          <p className={styles.text}>
            I cookie sono piccoli file di testo che i siti web possono salvare
            sul dispositivo dell’utente durante la navigazione. Possono servire
            a garantire il corretto funzionamento del sito, a memorizzare
            preferenze o, in altri casi, a raccogliere informazioni relative
            alla navigazione e all’utilizzo di servizi di terze parti.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="tipologie">
          <h2 id="tipologie" className={styles.sectionTitle}>
            2. Tipologie di cookie e strumenti utilizzabili
          </h2>
          <p className={styles.text}>
            In via generale, un sito web può utilizzare:
          </p>
          <ul className={styles.list}>
            <li>
              <strong>cookie tecnici</strong>, necessari al funzionamento del
              sito o alla corretta erogazione dei servizi richiesti;
            </li>
            <li>
              <strong>cookie di preferenza o funzionali</strong>, usati per
              ricordare determinate impostazioni dell’utente;
            </li>
            <li>
              <strong>cookie analitici</strong>, utilizzati per raccogliere
              informazioni statistiche sull’uso del sito;
            </li>
            <li>
              <strong>cookie di profilazione o marketing</strong>, destinati a
              tracciare il comportamento dell’utente per finalità promozionali o
              pubblicitarie.
            </li>
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="cookie-sito">
          <h2 id="cookie-sito" className={styles.sectionTitle}>
            3. Cookie utilizzati da questo sito
          </h2>
          <p className={styles.text}>
            Alla data di redazione della presente informativa, questo sito non
            utilizza strumenti di profilazione o tracciamento pubblicitario
            attivati automaticamente all’apertura delle pagine.
          </p>
          <p className={styles.text}>
            Il sito può utilizzare esclusivamente elementi tecnici o
            funzionalità strettamente connesse al corretto funzionamento delle
            pagine e alla gestione dei servizi richiesti dall’utente.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="google-maps">
          <h2 id="google-maps" className={styles.sectionTitle}>
            4. Google Maps e servizi di terze parti
          </h2>
          <p className={styles.text}>
            Nella pagina contatti è presente la possibilità di visualizzare una
            mappa interattiva tramite <strong>Google Maps</strong>.
          </p>
          <p className={styles.text}>
            La mappa non viene caricata automaticamente all’apertura della
            pagina, ma solo in seguito a un’azione esplicita dell’utente, ad
            esempio tramite il pulsante dedicato o tramite il link per aprire la
            posizione su Google Maps.
          </p>
          <p className={styles.text}>
            Quando l’utente sceglie di visualizzare la mappa o di aprire Google
            Maps, può avvenire un’interazione con servizi forniti da Google,
            secondo le condizioni, le informative e le impostazioni privacy
            previste dal relativo fornitore.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="consenso">
          <h2 id="consenso" className={styles.sectionTitle}>
            5. Consenso e gestione delle preferenze
          </h2>
          <p className={styles.text}>
            Poiché il sito non attiva automaticamente strumenti di profilazione
            o servizi di tracciamento non necessari all’apertura delle pagine,
            non è attualmente previsto un banner iniziale per l’accettazione dei
            cookie non tecnici.
          </p>
          <p className={styles.text}>
            L’eventuale interazione con servizi esterni, come la visualizzazione
            della mappa, avviene solo su iniziativa dell’utente.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="browser">
          <h2 id="browser" className={styles.sectionTitle}>
            6. Come gestire o disabilitare i cookie
          </h2>
          <p className={styles.text}>
            L’utente può gestire, limitare o disabilitare i cookie direttamente
            tramite le impostazioni del proprio browser. La disattivazione dei
            cookie tecnici potrebbe tuttavia compromettere il corretto
            funzionamento di alcune pagine o funzionalità del sito.
          </p>
          <p className={styles.text}>
            Per maggiori informazioni è possibile consultare la documentazione
            del browser utilizzato.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="terze-parti">
          <h2 id="terze-parti" className={styles.sectionTitle}>
            7. Informative dei fornitori terzi
          </h2>
          <p className={styles.text}>
            Per conoscere nel dettaglio le modalità di trattamento dei dati e
            l’eventuale utilizzo di cookie da parte dei servizi terzi richiamati
            dal sito, l’utente può consultare le informative rese disponibili
            dai rispettivi fornitori.
          </p>
          <ul className={styles.list}>
            <li>
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy di Google
              </a>
            </li>
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="aggiornamenti">
          <h2 id="aggiornamenti" className={styles.sectionTitle}>
            8. Aggiornamenti della Cookie Policy
          </h2>
          <p className={styles.text}>
            La presente Cookie Policy può essere aggiornata nel tempo per
            adeguarla a modifiche normative, tecniche o organizzative. Gli
            utenti sono invitati a consultare periodicamente questa pagina per
            verificare la versione più recente.
          </p>
        </section>
      </div>
    </Container>
  );
}
