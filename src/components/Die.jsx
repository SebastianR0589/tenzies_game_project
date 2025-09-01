export default function Die(props) {

    const heldStyle = {backgroundColor: props.isHeld ? "#59E391" : "white"}
    return(
    <button onClick={() => props.holdDice(props.id)} style={heldStyle}>{props.value}</button>
    )
}