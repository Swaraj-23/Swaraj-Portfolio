import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Project from './components/Project';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Banner/>
      <Skills/>
      <Education/>
      <Experience/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
