import "./Tetrahedron.scss"

const Face = ({
    className
}) => {
    return(
        <div className={className}>
            <div className="border"/>
            <div className="border border__left"/>
            <div className="border border__right"/>
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

const TriangularBipyramid = () => {
    var changed = 1.0;
    const change = () => {
        for(let i=0;i<3;i++) {
            document.getElementsByClassName(`tf${i+1}`)[0].style.transform = `
                matrix3d(
                    1, 0, 0, 0,
                    0, 1, 0, 0,
                    0, 0, ${changed}, 0,
                    0, 0, 0, 1
                )
                translateX(${i==0?"0":i==1?"-25%":"25%"})
                translateY(${i==0?"0":"-50%"})
                rotateZ(${i*120}deg)
                rotateX(70.529deg)`;
        }
        changed = (0.5-(changed-0.5)/2)*2;
        console.log(changed);   
    }
    return(
        <div onClick={change} className="tetrahedron-container">
            <div className="triangular-bipyramid">
                <div className="top">
                    <Face className="tf1"/>
                    <Face className="tf2"/>
                    <Face className="tf3"/>
                </div>
                <div className="btm">
                    <Face className="tf4"/>
                    <Face className="tf5"/>
                    <Face className="tf6"/>
                </div>
            </div>
        </div>
    )
}

export {Tetrahedron, TriangularBipyramid}