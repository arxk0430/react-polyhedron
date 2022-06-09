import "./Icosahedron.scss"

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

const Icosahedron = () => {
    return(
        <div className="icosahedron-container">
            <div className="icosahedron">
                <Face className="f1"/>
                <Face className="f2"/>
                <Face className="f3"/>
                <Face className="f4"/>
                <Face className="f5"/>
                <Face className="f6"/>
                <Face className="f7"/>
                <Face className="f8"/>
                <Face className="f9"/>
                <Face className="f10"/>
                <Face className="f11"/>
                <Face className="f12"/>
                <Face className="f13"/>
                <Face className="f14"/>
                <Face className="f15"/>
                <Face className="f16"/>
                <Face className="f17"/>
                <Face className="f18"/>
                <Face className="f19"/>
                <Face className="f20"/>
           </div>
        </div>
    )
}

export default Icosahedron