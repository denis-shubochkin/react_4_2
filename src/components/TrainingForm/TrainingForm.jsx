//import { useState } from 'react';
import './TrainingForm.css';

export default function TrainingForm(props) {


    const {onAdd/*, editedFields*/} = props;



    // const [form, setForm] = useState({
    //     date: '',
    //     dist: ''
    // })

    // const onFormChangeHandler = (e) => {
    //     setForm({[e.target.name] : e.target.value});
    // }



    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(!e.target.date.value.match(/\b\d{2}\b\.\b\d{2}\b\.\b\d{4}\b/))
        {
            alert('Дата введена неправильно');
            return;
        }
        if(isNaN(Number(e.target.dist.value)))
        {
            alert('Дистанция введена неправильно');
            return;
        };
        onAdd(e.target.date.value, e.target.dist.value);
        //setForm(prevForm => ({...prevForm, date: '', dist: ''}));
        e.target.date.value = '';
        e.target.dist.value = '';
    }

    // if(editedFields.date!=='')
    // {
    //     form.date = editedFields.date;
    // }

    return(
        <form className="Form" onSubmit={onSubmitHandler}>
            <div className="Date-Block">
                <label className="Data-Label" htmlFor="date">Дата (ДД.ММ.ГГ)</label>   
                 <input className="Date-Input" id="date" name="date" /*value={form.date} onChange={onFormChangeHandler}*/ required></input>

            </div>
            <div className="Dist-Block">
                <label className="Dist-Label" htmlFor="dist">Пройдено км</label>
                 <input className="Dist-Input" id="dist" name="dist"  /*value={form.dist} onChange={onFormChangeHandler}*/ required></input>
            </div>
            <button className="Ok-Button">Ok</button>
        </form>
    )
}