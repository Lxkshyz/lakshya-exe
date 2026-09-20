import Header from './components/layout/Header.jsx';
import Layout from './components/layout/Layout.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import TechStack from "./components/sections/TechStack.jsx";
import About from './components/sections/About.jsx';
import Identity from "./components/sections/Identity.jsx";
import Time from "./components/sections/Time.jsx";
import Projects from "./components/sections/SelectedWork.jsx";

function App() {

  return (
      <>
          <Header />
          <Layout>
              <Hero />
              <TechStack />
              <About />
              <Identity />
              <Time />
              <Projects />
          </Layout>
          <Footer />
      </>
  )
}

export default App
