import React from 'react'
import "./style.css";



const Todo = () => {
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" />
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div className='addItems'><input type="text" placeholder='✍ Add Items' className='form-control' />
                        <i className="fa fa-plus add-btn"></i>
                    </div>

                    {/* show our items */}
                    {/* Remove all items */}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All"><span>CHECK LIST</span></button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Todo
