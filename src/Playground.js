import "./Playground.css"
import {Tetrahedron, TriangularBipyramid} from './Tetrahedron';
import Dodecahedron from './Dodecahedron';
import {SharpIcosahedron, Icosahedron} from './Icosahedron';
import Cube from './Cube';

const Playground = () => {
    return(
        <div className="body">
            <h1>Tried to draw some polyhedrons with React.js and SASS. Nice mathematics exercise.</h1>
            {/* <SharpIcosahedron /> */}
            <TriangularBipyramid />
            <Icosahedron />
            <Dodecahedron />
            <Tetrahedron />
            <Cube />
        </div>
    )
}

export default Playground