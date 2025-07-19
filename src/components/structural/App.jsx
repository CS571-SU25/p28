
import '../../App.css'
import AboutUs from '../AboutUs'
import FindCourse from '../FindCourse'
import NoteNestNoMatch from '../NoteNestNoMatch'
import Notes from '../Notes'
import OtherInfo from '../OtherInfo'
import StudySesh from '../StudySesh'
import NoteNestLayout from './NoteNestLayout'
import { HashRouter, Routes, Route } from 'react-router'
import { useContext } from 'react'
import CourseChosenContext from '../../contexts/CourseChosenContext'

function App() {

    const courseList = ['Physics', 'Math', 'Chemistry'];

    const [courseChosen, setCourseChosen] = useContext(CourseChosenContext);

  return <HashRouter>
    <Routes>
      <Route path="/" element={<NoteNestLayout/>}>
        <Route index element={<FindCourse/>}/>
        {/* <Route path="/about-us" element={<AboutUs/>}></Route>
        <Route path="/other-info" element={<OtherInfo/>}></Route> */}
        {
          courseList.map(course =>{
            return <>
              <Route key={course} path={`notes/${course}`} element={<Notes courseName={course}/>}></Route>
              <Route key={course} path={`studysesh/${course}`} element={<StudySesh/>}></Route>
            </>
          })
        }
        <Route path="*" element={<NoteNestNoMatch/>}/>
      </Route>
    </Routes>
  </HashRouter>
}

export default App
