import "./Dodecahedron.scss"

const Face = ({
    className
}) => {
    return(
        <div className={className}>
            <div className="left-top-border"/>
            <div className="right-top-border"/>
            <div className="left-bottom-border"/>
            <div className="right-bottom-border"/>
            <div className="bottom-border"/>
        </div>
    )
}

const Dodecahedron = () => {
    return(
        <div className="dodecahedron-container">
            <div className="dodecahedron">
                {/* build from the base part */}
                <Face className="bottom"/> {/* point up*/}
                <Face className="b1"/> {/* 1 o'clock */}
                <Face className="b2"/> {/* 4 o'clock */}
                <Face className="b3"/> {/* 6 o'clock */}
                <Face className="b4"/> {/* 8 o'clock */}
                <Face className="b5"/> {/* 11 o'clock */}
                {/* build the upper part */}
                <Face className="top"/> {/* point down*/}
                <Face className="b6"/> {/* 12 o'clock */}
                <Face className="b7"/> {/* 2 o'clock */}
                <Face className="b8"/> {/* 5 o'clock */}
                <Face className="b9"/> {/* 7 o'clock */}
                <Face className="b10"/> {/* 10 o'clock */}
           </div>
        </div>
    )
}

export default Dodecahedron