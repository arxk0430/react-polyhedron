import "./Tetrahedron.scss"

const Face = ({
    className
}) => {
    return(
        <div className={className}>
            <div className="left-border"/>
            <div className="right-border"/>
            <div className="bottom-border"/>
        </div>
    )
}

const Tetrahedron = () => {
    return(
        <div className="tetrahedron-container">
            <div className="tetrahedron">
                <Face className="front"/>
                <Face className="bottom"/>
                <Face className="left"/>
                <Face className="right"/>
            </div>
        </div>
    )
}

export default Tetrahedron