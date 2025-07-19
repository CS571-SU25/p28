import { useContext } from "react"
import CourseChosenContext from "../contexts/CourseChosenContext"

export default function StudySesh(){

    const [courseChosen, setCourseChosen] = useContext(CourseChosenContext);

    return <>
        <h1>{courseChosen} StudySesh</h1>
        <hr/>
        <p>Page under construction, check back soon!</p>
    </>     
    
}