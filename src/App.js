import './App.css';
import Header from './components/header/header';
import MainBlock from './components/MainBlock/mainblock'
import About from './components/about/about';
import Skills from './components/skills/skill';
import Work from './components/work/work';
import Contact from './components/contact/contact';
import CopyRight from './components/copyright/copyright';
import Client from "./components/clients/client"
import ChooseUs from "./components/whychooseus/whychooseus"
import Story from "./components/story/story"
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      {/* <Cursor /> */}
      <Header />
      <MainBlock />
      <Skills />
      <About />
      <ChooseUs />
      <Work />
      <Story />
      <Client />
      <Contact />
      <CopyRight />
      <Footer />
    </div>
  );
}

export default App;
