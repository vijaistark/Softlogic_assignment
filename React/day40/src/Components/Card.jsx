function Card(props){
    return (
        <div>
            <h2>My card</h2>
            {props.children}
        </div>
    )
}

export default Card