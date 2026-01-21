import { useState } from "react";
import languages from "../languages";
import Button from "./Button";
import ProductCard from "./ProductCard";



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

            {/* card separata */}
            <ProductCard language={activeLanguage} />
        </div>

    )

}

export default ButtonList

