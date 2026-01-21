function Button(props) {

    // destrutturiamo props
    const { title, onAccToggle, isActive } = props;


    return (
        <div>

            {/* Bottone che chiama la funzione di toggle passata dal padre */}
            <button className={isActive ? "btn-active" : "btn-inactive"} onClick={onAccToggle}>
             {title} 
            </button>

        </div>

    )
}

export default Button
