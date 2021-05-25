import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import { Jumbotron } from './components/Jumbotron/Jumbotron';
import { About } from './components/AboutMe/About';
import { Portofolio } from './components/Portofolio/Portofolio';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Component } from 'react';


const Loading =()=>
  <div className="loader-wrapper">
    <div className="spinner"></div>
  </div>    

class App extends Component {
  state = {
    loading: true,
  };
  
  componentDidMount(){
    this.isLoading = setTimeout(()=>{this.setState({loading: false})}, 2300);
  }
  componentWillUnmount() {
     clearTimeout(this.isLoading);
  }
  
  timer = () => setTimeout(()=>{
    this.setState({loading: false})
  }, 2300);
  
  render(){
    const {loading} = this.state;
    return ( loading ? (<Loading/>)
    : (
      <div className="App">
      <>
          <Navbar />
          <Jumbotron />
          <About />
          <Portofolio />
          <Contact />
          <Footer />
      </>
      </div>
      
    )
      
    );
  }
}

export default App;
