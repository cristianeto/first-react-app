import React from 'react';
import './App.css';
/** Props: Son propiedades o datos que pasamos de afuera hacia dentro del componente */

/** State: Son datos internos conocidos como state o estados*/


/* function Helloworld(props){
  console.info(props);
  return(
    <div id="hello"> 
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  )
} */



class Helloworld extends React.Component{
  state = {
    show: true,
  }
  toogleShow = () => {
    this.setState({show:!this.state.show})
  }

  render(){
    if(this.state.show){
      return (
        <div id="hello"> 
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          {/* <button onClick={()=>this.state.show =false}>Toogle Show</button> */}
          <button onClick={this.toogleShow}>Toogle Show</button>
      </div>
      )
    }else{
      return <h1> 
        there is not elements
        <button onClick={this.toogleShow}>toogleShow</button>
      </h1>
    }
   
  }
}

//const App = () => <div>This is my component: <Helloworld/></div>  //Funcion flecha

/* class App extends React.Component{
  render(){
    return <div> This is my component: <Helloworld/></div>
  }
} */

function App() {
  return (
    <div>
      This is my component:
      <Helloworld mytext="Hello Fazt" subtitle="lorem ipsum"/>
      <Helloworld mytext="Mi mundo" subtitle="component 2"/>
      <Helloworld mytext="Seriedad ante todo" subtitle="component 3" />
    </div>
  );
}

export default App;
