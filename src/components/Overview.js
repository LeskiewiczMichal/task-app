import { useState } from 'react';

export default function Overview(props) {
  const [editingTask, setEditngTask] = useState(false);
  function editTask(taskId) {
    setEditngTask((prevEditingTask) => !prevEditingTask);
  }

  return (
    <div className="overview--task">
      <span>{props.task}</span>
      <div className="overview--buttons-container">
        {editingTask && (
          <input
            type="text"
            name="edit"
            onChange={props.handleChange}
            value={props.formData.edit}
            placeholder="New value..."
            className="app--edit-input"
          />
        )}
        {!editingTask ? (
          <button className="overview--edit" onClick={editTask}>
            EDIT
          </button>
        ) : (
          <button
            className="overview--edit"
            onClick={() => {
              props.confirmEdit();
              editTask();
            }}
          >
            ACCEPT
          </button>
        )}
        <button className="overview--delete" onClick={props.deleteTask}>
          X
        </button>
      </div>
    </div>
  );
}
