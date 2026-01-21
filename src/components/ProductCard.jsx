function ProductCard({ language }) {

    return (

        <div className="card">

            {/* Mostra la descrizione se c'è un linguaggio selezionato, altrimenti messaggio di default */}
            {language ? ( <p> {language.description} </p> ) : ( <p> Nessun linguaggio selezionato </p> )}
       
        </div>

    );

}

export default ProductCard;