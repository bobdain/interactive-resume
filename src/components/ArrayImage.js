const ArrayImage = (props) => {
    return (
        <img src={props.image.img} className={props.image.class} alt={props.image.alt} />
    )
}

export default ArrayImage;