import { Link } from "react-router-dom";

export function nav() {

    return (
        <>
            <Link to= "/about">
                <button> About </button>
            </Link>
            <Link to= "/">
             <button> Home </button>
             </Link>
        </>

    )
}