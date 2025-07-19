import { Link } from "react-router";

function NoteNestNoMatch(){
    return (
        <div>
            <h2>404. Page not found</h2>
            <p>
                <Link to="/">Back to safety</Link>
            </p>
        </div>
    )
}

export default NoteNestNoMatch;