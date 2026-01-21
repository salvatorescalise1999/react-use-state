import { useState } from "react";
import languages from "../languages";
import Button from "./Button";

function ButtonList() {

    // settiamo la var di stato del componente per gestire l'apertura
    const [activeButton, setActivebutton] = useState(null);

    const activeLanguage = languages.find(
        (language) => language.id === activeButton
    );


    return (

        <div className="btn-list">
            {languages.map((language) => (
                <Button key={language.id}
                    title={language.title}
                    description={language.description}
                    isOpen={activeButton === language.id}
                    onAccToggle={() => setActivebutton(activeButton === language.id ? null : language.id)}
                />
            ))}

            <div className="detail-card">
                {activeLanguage ? (
                    <p>{activeLanguage.description}</p>
                ) : (
                    <p>Nessun linguaggio selezionato</p>
                )}
            </div>

        </div>

    )

}

export default ButtonList

