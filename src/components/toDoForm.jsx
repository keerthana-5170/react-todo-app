import React, { Component } from 'react'
import ListItems from "./ListItems";
import Heading from "./heading";
export class toDoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
             items: [],
             currentItem:{
                 text:'',
                 key:''
             }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    handleInput = event  =>
    {
            this.setState({
                 currentItem: {
                     text : event.target.value,
                     key:Date.now()
                 }
            })
    }
    addItem = event =>
    {
        event.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);
        if(newItem.text!==""){
            const newItems= [...this.state.items,newItem];
           console.log(newItems);
            this.setState({
                items:newItems,
                currentItem:{
                    text:" ",
                    key:" "
                }
            })
        }
    }
    deleteItem(key)
    {
        const filteredItems = this.state.items.filter(item =>
            item.key!==key);
            this.setState({
                items:filteredItems
            })
    }
    setUpdate(text,key)
    {
        const items = this.state.items;
        // eslint-disable-next-line array-callback-return
        items.map(item => {
            if(item.key===key)
            {
                item.text=text;
            }
        })
        this.setState({
            items:items
        })
    }
   
    render() {
        return (
            <div className="todoapp">
                <Heading/>
                <form action="#" className="todoform" onSubmit={this.addItem}>
                    <input value={this.state.currentItem.text} type="text" 
                    placeholder="Enter what to do" onChange={this.handleInput} />
                    <button type ="submit" className="add-btn">ADD</button>
                    <ListItems items={this.state.items}  setUpdate={this.setUpdate} deleteItem={this.deleteItem}/>
                </form>
               
            </div>
        )
    }
}

export default toDoForm;
