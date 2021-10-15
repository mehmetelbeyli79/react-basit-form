import './App.css';
import {useState} from 'react';
import {Switch,Route} from 'react-router-dom';
import Bilgiler from './Bilgiler';
import Form from './Form'
function App() {

    const [form,setForm]=useState({isim:'',sehir:'',dogum:'',renk:'',adres:''});

    const handleChange=(event)=>{

      setForm({...form,[event.target.name]:event.target.value})
    }


  return (
    <div className="App">
      <h2>Bilgileriniz Giriniz</h2>
      
      <Switch>
      <Route path="/" exact><Form form={form} handleChange={handleChange}/></Route>
      <Route path="/bilgiler"><Bilgiler form={form}/></Route>
    </Switch>
    </div>
  );
}

export default App;
