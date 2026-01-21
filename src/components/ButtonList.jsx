import { useState } from "react";
import languages from "../languages";
import Button from "./Button";

function ButtonList() {

    // settiamo la var di stato del componente per gestire l'apertura
    const [activeButton, setActivebutton] = useState(null);


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

            {activeButton === null && (
                <p>Nessun linguaggio selezionato</p>
            )}

        </div>

    )

}

export default ButtonList

