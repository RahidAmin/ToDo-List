import React, { useEffect, useState } from 'react'
import "./style.css";

const getLocalData = () => {
    const lists = localStorage.getItem('ToDo-list');
    if (lists) {
        return JSON.parse(lists);
    }
    else {
        return [];
    }
}


const Todo = () => {
    const [inputData, setInputData] = useState('');
    const [item, setItem] = useState(getLocalData());
    const [isEditItem, setIsEditItem] = useState("")
    const [toggleButton, setToggleButton] = useState(false)


    //add the item function
    const addItems = () => {
        if (!inputData) {

        }
        else if (inputData && toggleButton) {
            setItem(item.map((curEl) => {
                if (curEl.id === isEditItem) {
                    return { ...curEl, name: inputData }
                }
                return curEl;
            }))
            setInputData("")
            setIsEditItem(null)
            setToggleButton(false);
        }
        else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputData
            }
            setItem([...item, myNewInputData]);
            setInputData('');
        }
    }
    //Edit the item
    const editItem = (index) => {
        const item_todo_edited = item.find((curEl) => {
            return curEl.id === index;
        })
        setInputData(item_todo_edited.name)
        setIsEditItem(index)
        setToggleButton(true);

    }

    //Delete item section
    const deleteItem = (index) => {
        const updatedItems = item.filter((curEl) => {
            return curEl.id != index;
        })
        setItem(updatedItems)
    }
    //Remove All Items
    const RemoveAll = () => {
        setItem([]);
    }
    //Adding Local Storage
    useEffect(() => {
        localStorage.setItem('ToDo-list', JSON.stringify(item));
    }, [item])
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" />
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div className='addItems'><input type="text" placeholder='✍ Add Items' className='form-control' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                        {toggleButton ? (<i className="far fa-edit add-btn" onClick={addItems}></i>) : (<i className="fa fa-plus add-btn" onClick={addItems}></i>)}
                        {/* <i className="fa fa-plus add-btn" onClick={addItems}></i> */}
                    </div>

                    {/* show our items */}
                    <div className='showItems'>
                        {item.map((curEl) => {
                            return (
                                <div className='eachItem' key={curEl.id}>
                                    <h3>{curEl.name}</h3>
                                    <div className='todo-btn'>
                                        <i className="far fa-edit add-btn" onClick={() => { editItem(curEl.id) }}></i>
                                        <i className="far fa-trash-alt add-btn" onClick={() => { deleteItem(curEl.id) }}></i>
                                    </div>
                                </div>
                            );

                        })}

                    </div>
                    {/* Remove all items */}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={RemoveAll}><span>CHECK LIST</span></button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Todo
