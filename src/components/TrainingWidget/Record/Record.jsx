import './Record.css'

export default function Record(props) {

    const {data, onDel/*, onEdit*/} = props;

    const onDelRecord = () => {
        onDel(data.id);
    }

    // const onEditRecord = () => {
    //     onEdit(data.date, data.dist);
    // }

    return(
        <div className="Record">  
                    <span className="Widget-Date">{data.date}</span>
                    <span className="Widget-Dist">{data.dist}</span>
                    <div className="Widget-Actions">
                        <button className="Edit" /*onClick={onEditRecord}*/>✎</button>
                        <button className="Delete" onClick={onDelRecord}>✘</button>
                    </div>
                </div>
    )
}