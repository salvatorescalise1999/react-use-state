function Button (props){

    // destrutturiamo props
    const {title, onAccToggle } = props;
    

    return(
        <div className="container-btn">

            {/* Bottone che chiama la funzione di toggle passata dal padre */}
            <button onClick={onAccToggle}> {title} </button>
            
        </div>

    )
}

export default Button
