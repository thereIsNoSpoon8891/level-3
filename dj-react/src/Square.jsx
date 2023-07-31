
function Square (props){
    
    const style = {
        backgroundColor: props.backgroundColor
    }
    // {backgroundColor: `${props.backgroundColor}`}
    return(
        <div>
            <div className="square" style={style}>

            </div>

        </div>

    )
}

export default Square