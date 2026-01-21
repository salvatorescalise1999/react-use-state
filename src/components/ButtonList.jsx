import { useState } from "react";
import languages from "../languages";
import Button from "./Button"; // bottone scomposto
import ProductCard from "./ProductCard"; // card separata



function ButtonList() {

    // settiamo la var di stato del componente per gestire l'apertura
    const [activeButton, setActiveButton] = useState(null); // stato per il bottone attivo, inizialmente nessuno (null)

    // trova il linguaggio selezionato in base all'id attivo
    const activeLanguage = languages.find(
        (language) => language.id === activeButton
    );


    return (

        <div className="btn-list">

            {/* Mappa tutti i linguaggi e crea un Button per ciascuno */}
            {languages.map((language) => (
                <Button key={language.id} // chiave unica per React
                    title={language.title} // titolo del bottone
                    onAccToggle={() =>   // aggiorna lo stato: se già selezionato chiude, altrimenti apre
                        setActiveButton(activeButton === language.id ? null : language.id)
                    }
                />
            ))}


            {/* Card separata che mostra la descrizione del linguaggio attivo o messaggio di default */}
            <ProductCard language={activeLanguage} />
        </div>

    )

}

export default ButtonList

