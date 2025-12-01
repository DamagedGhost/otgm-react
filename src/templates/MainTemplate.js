import Navbar from '../components/organisms/NavBar';
import Footer from '../components/organisms/Footer';

const MainTemplate = ({ children }) => (

  <div className="d-flex flex-column min-vh-100">
    
    <header>
      <Navbar />
    </header>


    <main className="flex-grow-1">
      {children}
    </main>

    <Footer />

  </div>
);

export default MainTemplate;