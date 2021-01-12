import Record from './Record/Record';
import './TrainingWidget.css';

export default function TrainingWidget(props) {


    const {records, onDelete/*, onEdit*/} = props;
    
    const sorted = records.sort((a, b) =>  b.dateFormat - a.dateFormat);

    const onDelHandler = (id) => {
        onDelete(id);
    }

    // const onEditHandler = (date,dist) => {
    //     onEdit(date,dist);
    // }

    return(
        <div className="Widget">        
            <div className="Widget-Header">
                <span>Дата (ДД.ММ.ГГ)</span>
                <span>Пройдено км</span>
                <span>Действия</span>
            </div>
            <div className="Widget-Table">
                {sorted.map(record => <Record key={record.id} data={record} onDel={onDelHandler} /*onEdit={onEditHandler}*//>)}
               
            </div>
        </div>


    )
}