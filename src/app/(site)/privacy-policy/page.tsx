import Container from "@/components/ui/Container/Container";
import styles from "./page.module.css";

export default function PrivacyPolicy() {
  return (
    <Container className={styles.legalPage}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Informativa</p>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.intro}>
          In questa pagina trovi le informazioni relative al trattamento dei
          dati personali effettuato tramite il sito web di Centro Vetrine.
        </p>
        <p className={styles.updated}>Ultimo aggiornamento: 20/03/2026</p>
      </header>

      <div className={styles.content}>
        <section className={styles.section} aria-labelledby="titolare">
          <h2 id="titolare" className={styles.sectionTitle}>
            1. Titolare del trattamento
          </h2>
          <p className={styles.text}>
            Il titolare del trattamento è{" "}
            <strong>[RAGIONE SOCIALE / NOME ATTIVITÀ]</strong>, con sede in{" "}
            <strong>Via Mameli 20, Olbia, 07026</strong>, P. IVA/C.F.{" "}
            <strong>[P. IVA O C.F.]</strong>.
          </p>
          <p className={styles.text}>
            Per qualsiasi richiesta relativa al trattamento dei dati personali è
            possibile contattare il titolare ai seguenti recapiti:
          </p>
          <ul className={styles.list}>
            <li>Email: ligioimarco@gmail.com</li>
            <li>Telefono: +39 3284595823</li>
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="dati-raccolti">
          <h2 id="dati-raccolti" className={styles.sectionTitle}>
            2. Tipologie di dati raccolti
          </h2>
          <p className={styles.text}>
            Attraverso questo sito possono essere raccolti i seguenti dati
            personali:
          </p>
          <ul className={styles.list}>
            <li>
              dati forniti volontariamente dall’utente tramite il modulo di
              contatto, come nome, indirizzo email, numero di telefono e
              contenuto del messaggio;
            </li>
            <li>
              eventuali dati tecnici connessi alla navigazione e al corretto
              funzionamento del sito;
            </li>
            <li>
              dati eventualmente trasmessi a soggetti terzi nel momento in cui
              l’utente sceglie di visualizzare la mappa interattiva o di aprire
              la posizione su Google Maps.
            </li>
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="finalita">
          <h2 id="finalita" className={styles.sectionTitle}>
            3. Finalità del trattamento
          </h2>
          <p className={styles.text}>
            I dati personali sono trattati per le seguenti finalità:
          </p>
          <ul className={styles.list}>
            <li>
              rispondere alle richieste inviate tramite il modulo contatti;
            </li>
            <li>
              fornire informazioni sui servizi, prodotti o attività di Centro
              Vetrine richieste dall’utente;
            </li>
            <li>
              gestire comunicazioni precontrattuali o richieste di preventivo;
            </li>
            <li>
              garantire il corretto funzionamento tecnico del sito e la
              sicurezza dei sistemi;
            </li>
            <li>
              consentire, su richiesta dell’utente, la visualizzazione della
              mappa interattiva o l’apertura della posizione su Google Maps.
            </li>
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="base-giuridica">
          <h2 id="base-giuridica" className={styles.sectionTitle}>
            4. Base giuridica del trattamento
          </h2>
          <p className={styles.text}>
            Il trattamento dei dati personali si fonda, a seconda dei casi:
          </p>
          <ul className={styles.list}>
            <li>
              sull’esecuzione di misure precontrattuali adottate su richiesta
              dell’interessato, quando l’utente invia una richiesta di contatto,
              informazioni o preventivo;
            </li>
            <li>
              sul legittimo interesse del titolare alla gestione tecnica, alla
              sicurezza del sito e alla tutela dei propri diritti;
            </li>
            <li>
              sull’azione volontaria dell’utente, quando decide di visualizzare
              contenuti o servizi di terze parti come la mappa interattiva.
            </li>
          </ul>
        </section>

        <section className={styles.section} aria-labelledby="conferimento">
          <h2 id="conferimento" className={styles.sectionTitle}>
            5. Natura del conferimento dei dati
          </h2>
          <p className={styles.text}>
            Il conferimento dei dati tramite modulo contatti è facoltativo, ma
            il mancato inserimento dei dati contrassegnati come necessari può
            rendere impossibile ricevere risposta o dare seguito alla richiesta
            inviata dall’utente.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="modalita">
          <h2 id="modalita" className={styles.sectionTitle}>
            6. Modalità di trattamento
          </h2>
          <p className={styles.text}>
            I dati personali sono trattati con strumenti informatici e
            telematici, con misure organizzative e tecniche adeguate a garantire
            un livello di sicurezza proporzionato al rischio, al fine di evitare
            accessi non autorizzati, perdita, divulgazione o uso improprio dei
            dati.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="destinatari">
          <h2 id="destinatari" className={styles.sectionTitle}>
            7. Destinatari dei dati e servizi di terze parti
          </h2>
          <p className={styles.text}>
            I dati possono essere trattati, per conto del titolare, da fornitori
            di servizi tecnici strettamente connessi al funzionamento del sito e
            alla gestione delle richieste inviate dall’utente.
          </p>
          <p className={styles.text}>
            In particolare, il modulo contatti del sito utilizza{" "}
            <strong>Formspree</strong>, servizio esterno impiegato per la
            ricezione e la gestione dei messaggi inviati tramite form.
          </p>
          <p className={styles.text}>
            La visualizzazione della mappa interattiva o l’apertura della
            posizione su <strong>Google Maps</strong> comporta invece
            l’interazione con servizi forniti da Google, secondo le condizioni e
            le informative privacy del relativo fornitore.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="trasferimenti">
          <h2 id="trasferimenti" className={styles.sectionTitle}>
            8. Trasferimento dei dati verso Paesi terzi
          </h2>
          <p className={styles.text}>
            Alcuni fornitori terzi utilizzati dal sito potrebbero trattare dati
            personali anche al di fuori dello Spazio Economico Europeo. In tali
            casi il trattamento avviene nel rispetto della normativa applicabile
            e, ove necessario, mediante l’adozione di garanzie adeguate previste
            dalla legge.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="conservazione">
          <h2 id="conservazione" className={styles.sectionTitle}>
            9. Periodo di conservazione dei dati
          </h2>
          <p className={styles.text}>
            I dati trasmessi tramite modulo contatti sono conservati per il
            tempo strettamente necessario a gestire la richiesta ricevuta e per
            l’eventuale seguito amministrativo, commerciale o tecnico ad essa
            collegato, salvo ulteriori obblighi di legge.
          </p>
          <p className={styles.text}>
            Se desideri indicare un criterio più puntuale, puoi sostituire
            questo paragrafo con una formula specifica, ad esempio:{" "}
            <strong>[INSERIRE PERIODO O CRITERIO DI CONSERVAZIONE]</strong>.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="diritti">
          <h2 id="diritti" className={styles.sectionTitle}>
            10. Diritti dell’interessato
          </h2>
          <p className={styles.text}>
            Nei casi previsti dalla normativa vigente, l’interessato può
            esercitare i diritti di accesso, rettifica, cancellazione,
            limitazione del trattamento, opposizione e portabilità dei dati.
          </p>
          <p className={styles.text}>
            L’interessato ha inoltre il diritto di proporre reclamo all’Autorità
            Garante per la protezione dei dati personali, qualora ritenga che il
            trattamento avvenga in violazione della normativa applicabile.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="contatti">
          <h2 id="contatti" className={styles.sectionTitle}>
            11. Modalità di esercizio dei diritti
          </h2>
          <p className={styles.text}>
            Per esercitare i propri diritti o richiedere informazioni sul
            trattamento dei dati personali è possibile contattare il titolare ai
            recapiti indicati nella presente informativa.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="modifiche">
          <h2 id="modifiche" className={styles.sectionTitle}>
            12. Modifiche alla presente informativa
          </h2>
          <p className={styles.text}>
            La presente Privacy Policy può essere aggiornata nel tempo, anche in
            conseguenza di modifiche normative, tecniche o organizzative. Gli
            utenti sono invitati a consultare periodicamente questa pagina per
            verificare la versione più recente.
          </p>
        </section>
      </div>
    </Container>
  );
}
