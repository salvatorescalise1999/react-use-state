function ProductCard({ language }) {

    return (

        <div className="card">
            {language ? (
                <p>{language.description}</p>
            ) : (
                <p>Nessun linguaggio selezionato</p>
            )}
        </div>

    );

}

export default ProductCard;