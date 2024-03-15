import logo from './logo.svg';
import './App.css';
// default export (Used to export only Single Element and the function name and import name can be different)
import Header from './HeaderFooterWorld';
// named export (Used to export Multiple Elements and the funciton name and import name must be same)
import { Main } from './HeaderFooterWorld';
import { Footer } from './HeaderFooterWorld';

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
