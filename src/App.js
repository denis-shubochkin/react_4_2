
import { useState } from 'react';
import './App.css';
import TrainingForm from './components/TrainingForm/TrainingForm';
import TrainingWidget from './components/TrainingWidget/TrainingWidget';
import {nanoid} from 'nanoid';

function App() {

  const [records, setRecords] = useState([]);
  //const [fields, setFields] = useState({date: '', dist: ''})

  const onAddRecord = (date,dist) => {
    if(records.find((el, i, arr) => {
      if(el.date===date)
      {
        arr[i].dist = Number( arr[i].dist) + Number(dist);
        return true
      }
      else return false;
    }))
    {
      setRecords(prevRecords => [...prevRecords]); 
    }
    else
    {
      setRecords(prevRecords => [...prevRecords, {id: nanoid(), date: date,  dist: dist, dateFormat: new Date(date.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'))}]); 
    }
    // fields.date ='';
    // fields.dist ='';
  }

  const onDeleteHandler = (id) => {
      setRecords(prevRecords => prevRecords.filter(record => record.id !== id )); 
  }

  // const onEditHandler = (date, dist) => {
  //   setFields({date: date, dist: dist});
  // }

 

  
  return (
    <div className="App">
     <TrainingForm onAdd={onAddRecord} /*editedFields={fields}*//>
     {records.length>0 ? <TrainingWidget records={records} onDelete={onDeleteHandler} /*onEdit={onEditHandler}*//> : null }
    </div>
  );
}

export default App;
