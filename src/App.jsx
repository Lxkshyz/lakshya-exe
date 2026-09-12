import Header from './components/layout/Header.jsx';
import Layout from './components/layout/Layout.jsx';
import Footer from './components/layout/Footer.jsx';
import Hero from './components/sections/Hero.jsx';
import TechStack from "./components/sections/TechStack.jsx";
function App() {

  return (
      <>
          <Header />
          <Layout>
              <Hero />
              <TechStack />
          </Layout>
          <Footer />
      </>
  )
}

export default App
