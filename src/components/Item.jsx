import './style.css';

const Item = (props) => {
    return (
        <div className="col-4">
            <div className='taskWrapper'>
                <div className='taskHeading'>{props.task.title}</div>
                <div className='taskDescription'>{props.task.description}</div>
                <hr/>
                <label className='completed'>
                    <input type="checkbox"
                           className="form-check-input"
                           onChange={props.changeStatus(props.task.id)}
                    />
                    <span className='status-action'>Done?</span>
                </label>
                <hr/>
                <button className='btn btn-danger delete-btn'
                        onClick={props.removeTodoEl(props.task.id)}>Delete
                </button>
            </div>
        </div>
    );
}

export default Item;