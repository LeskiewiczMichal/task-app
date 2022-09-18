export default function Overview(props) {
    return (
        <div className="overview--task">
            <span>{props.task}</span>
            <div className="overview--buttons-container">
                <button className="overview--edit">EDIT</button>
                <button className="overview--delete" onClick={props.deleteTask}>X</button>
            </div>
        </div>
    )
}