import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';


function App() {
  // let name='mehak';
  // let l=[12,13,23,24,34,45,46];
  // let obj={
  //   'name':'cvb',
  //   'cname':'dftghju',
  //   'desc':'asdfgyujk'
  // }
  // let status=true;
  return (
    <div className="main">
      {/* <h1>{name} hiiii</h1>
      {l.map((v)=>{ //direct data render krne k lie
        return (
          <h2>{v}</h2>
        )
      })}
      <div>{obj.name} </div>
      <div>{obj.cname} </div>
      <div>{obj.desc} </div>
      { (status)  ? 
        <div style={{color:'red',backgroundColor:'yellow'}}>welcome to ws</div>
      : ""} */ }
      
      <Header/>
          <div className="row">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      <Footer/>
      </div>
      
  );
}

export default App;


function Card(){
  return(
    <div className='carditems'>Card Div</div>
  )
}