import "./Playground.css"
import Tetrahedron from './Tetrahedron';
import Dodecahedron from './Dodecahedron';
import Icosahedron from './Icosahedron';
import Cube from './Cube';

const Boxes = () => {
    return(
        <div style={{marginBottom: "440px"}}>
            <div className="box" style={{animation: "moving-box 4s ease-in-out forwards infinite"}}/>
            <div className="box" style={{animation: "moving-box 4s ease-in-out forwards infinite -1s"}}/>
            <div className="box" style={{animation: "moving-box 4s ease-in-out forwards infinite -2s"}}/>
            <div className="box" style={{animation: "moving-box 4s ease-in-out forwards infinite -3s"}}/>
        </div>
    )
}

const Playground = () => {
    return(
        <div className="body">
            <Icosahedron />
            <Dodecahedron />
            <Tetrahedron />
            <Cube />
            <div className="parent">
                <div className="child" />
            </div>
            <Boxes />
            <div className="box" style={{animation: "changing-box 4s ease-in-out forwards infinite"}}/>
        </div>
    )
}

export default Playground