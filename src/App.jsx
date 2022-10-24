import './App.css';
import Navbar from "../src/components/Navbar";
import AboutMe from './components/AboutMe';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
//import Curriculums from './components/Curriculums';
import image from '../src/assets/fullapp.jpg';

function App() {

  return (
    <div className="bg-gray-200 w-full h-[100vh]">
      <img src={image} className='absolute blur-md opacity-80  ' />
      <Navbar />
      <AboutMe />
      <Stack />
      <Projects />
      {/* <Curriculums /> */}
      <Contacts />
    </div>
  )
}

export default App;
