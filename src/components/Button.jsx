function Button (props){

    // destrutturiamo props
    const {title, description, isOpen, onAccToggle } = props;

    return(
        <div className="container-btn">

            <button onClick={onAccToggle} className="open-btn"> {title} </button>

            {isOpen && <div>{description}</div>}
            
        </div>

    )
}

export default Button

