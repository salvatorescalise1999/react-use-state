function Button (props){

    // destrutturiamo props
    const {title, onAccToggle } = props;
    

    return(
        <div className="container-btn">

            <button onClick={onAccToggle}> {title} </button>
            
        </div>

    )
}

export default Button
