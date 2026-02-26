"use client";
import styles from "./ContactForm.module.css";
import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Send } from "lucide-react";
export default function ContactForm() {
  const [state, handleSubmit] = useForm("mreajyap");
  const [showSuccess, setShowSuccess] = useState(false);

  const hasErrors: boolean =
    Array.isArray(state.errors) &&
    state.errors.length > 0 &&
    !showSuccess &&
    !state.submitting;

  useEffect(() => {
    if (!state.succeeded) return;

    setShowSuccess(true);

    const timer = setTimeout(() => {
      setShowSuccess(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [state.succeeded]);

  return (
    <section className={styles.formSection}>
      <h2 className={styles.sectionTitle}>Parlami del tuo Progetto</h2>
      {hasErrors && (
        <div className={styles.containerError}>
          <h3 className={styles.errorTitle}>Si è verificato un errore!</h3>
          <p className={styles.errorMessage}>
            Si è verificato un errore durante l'invio. Controlla i campi
            evidenziati e riprova!
          </p>
        </div>
      )}
      {!showSuccess && (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.formLabel} htmlFor="name">
                Nome: <span className={styles.required}>*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Mario"
                required
                autoComplete="name"
                className={styles.input}
              />
              <ValidationError
                prefix="Nome"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.formLabel} htmlFor="requestType">
                Tipo di richiesta:
              </label>

              <select
                id="requestType"
                name="requestType"
                className={styles.input}
                defaultValue=""
              >
                <option value="" disabled>
                  Seleziona un'opzione
                </option>
                <option value="informazioni">Informazioni generali</option>
                <option value="preventivo">Preventivo</option>
                <option value="disponibilita">Disponibilità prodotto</option>
                <option value="altro">Altro</option>
              </select>

              <ValidationError
                prefix="Tipo di richiesta"
                field="requestType"
                errors={state.errors}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.formLabel} htmlFor="email">
                E-Mail: <span className={styles.required}>*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="mariorossi@gmail.com"
                required
                autoComplete="email"
                className={styles.input}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.formLabel} htmlFor="object">
                Oggetto:
              </label>
              <input
                id="object"
                type="text"
                name="object"
                placeholder="Disponibilità Manichini"
                autoComplete="object"
                className={styles.input}
              />
              <ValidationError
                prefix="Oggetto"
                field="object"
                errors={state.errors}
              />
            </div>
          </div>

          <div className={styles.fieldMessage}>
            <label className={styles.formLabel} htmlFor="message">
              Inserisci un messaggio: <span className={styles.required}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              className={styles.input}
            />
            <ValidationError
              prefix="Messaggio"
              field="message"
              errors={state.errors}
            />
          </div>

          <label className={styles.hidden} htmlFor="website">
            Website
          </label>
          <input
            id="website"
            type="text"
            name="website"
            className={styles.honeypot}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <button
            type="submit"
            disabled={state.submitting}
            className={styles.buttonSubmit}
          >
            <span className={styles.textButton}>
              {state.submitting ? "Invio in corso..." : "Invia"}
            </span>
            <Send />
          </button>
        </form>
      )}

      {showSuccess && (
        <div className={styles.thanks} role="status">
          <h3 className={styles.thanksTitle}>Messaggio Ricevuto!</h3>
          <p className={styles.thanksMessage}>
            Abbiamo ricevuto il tuo messaggio! Risponderemo il prima possibile!
          </p>
        </div>
      )}
    </section>
  );
}
