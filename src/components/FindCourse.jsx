import { memo, useContext } from "react";
import { Dropdown } from "react-bootstrap";
import CourseChosenContext from "../contexts/CourseChosenContext";

function FindCourse(){

    const [courseChosen, setCourseChosen] = useContext(CourseChosenContext);

    const handleDropdownClick = (course) => {
        setCourseChosen(course);

    };
    
    return <>
        <h1>Welcome to NoteNest!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Proin id arcu venenatis, condimentum elit nec, efficitur erat.</p>
        <p>Duis lobortis tincidunt eleifend. Mauris fringilla quam eu imperdiet hendrerit.</p>
        <p>Suspendisse vehicula leo a massa luctus, sed dapibus ligula semper.</p>
        <br/>
        <Dropdown>
            {courseChosen ?
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    {courseChosen}
                </Dropdown.Toggle>
                :
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Choose your course...
                </Dropdown.Toggle> 
            }
            <Dropdown.Menu>
            <Dropdown.Item onClick={()=> handleDropdownClick('Physics')}>Physics</Dropdown.Item>
            <Dropdown.Item onClick={()=> handleDropdownClick('Math')}>Math</Dropdown.Item>
            <Dropdown.Item onClick={()=> handleDropdownClick('Chemistry')}>Chemistry</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </>
}

export default memo(FindCourse);