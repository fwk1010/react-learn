import React,{ Component }from "react"

class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            list:[
                "java",
                "php",
                "golang",
                "c#"
            ]
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.list.map((item) =>{
                        return <li key={item}>{item}</li>
                    })
                }
            </div>
        );
    }

}

export  default TodoList;