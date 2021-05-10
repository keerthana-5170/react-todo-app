import React from 'react'

function ListItems(props) {
    const items = props.items
    const listItems = items.map (item =>{
        return <div className="list" key={item.key}>
        <p>
            <input type="text" id={item.key} className="inputList"
            onChange={ event =>{
                    props.setUpdate(event.target.value,item.key)
                }
            } value={item.text}/>
        <span>
        <button className="trash" onClick={()=> props.deleteItem(item.key)}>remove</button>
        </span>
        </p>

        </div>
    })
    return (
        <div>{listItems}</div>
    )
}

export default ListItems;
