const Form = (props) => {
    return (
        <div className="col-3">
            <form id="todoForm">
                <div className="mb-3">
                    <label className="form-label" htmlFor="title-name">Task title</label>
                    <input
                        type="text"
                        name='title'
                        value={props.todoEl.title}
                        className="form-control"
                        id="title-name"
                        placeholder="Title of your task"
                        required
                        onChange={props.changeInput}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="task-name">Task body</label>
                    <textarea
                        type="text"
                        name='description'
                        id="task-name"
                        value={props.todoEl.description}
                        className="form-control"
                        placeholder="Describe your task"
                        cols="30"
                        rows="5"
                        required
                        onChange={props.changeInput}
                    ></textarea>
                </div>
                <div className="d-block">
                    <div>
                        <input
                            type="submit"
                            className={props.className}
                            value="Create Task!"
                            onClick={props.addTodoEl}
                        />
                    </div>
                    <div>
                        <input
                            type="reset"
                            value="Clear"
                            className="btn btn-warning mb-1"
                            onClick={props.resetTodoEl}
                        />
                    </div>
                    <button type="button"
                            className="btn btn-danger delete-all-elems"
                            onClick={props.removeAllTodos}>
                        Delete all
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form;