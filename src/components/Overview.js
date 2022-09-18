export default function Overview(props) {
    return (
        <div className="overview--task">
            <span>{props.task}</span>
            <button className="overview--delete" onClick={props.deleteTask}>X</button>
        </div>
    )
}