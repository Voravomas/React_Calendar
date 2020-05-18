import React from "react";

import AddTask from './addTask';

export default class TaskList extends React.Component {
    // addNewTask(task){
    //     const { list } = this.props;
    //     list.allTasks.push(task);
    // }

    render() {
        // const { list } = this.props;
        var list = {
            allTasks: ["hello", "world"]
        }
        return (
        <div class="notes">
          <h2 class="notes-title">Tasks for this day</h2>
          <hr class="notes-hr"></hr>
          {list.allTasks.map((task) => (
              <p class="notes-main">{task}</p>
          ))}
          <AddTask onAdd={(e) => this.addNewTask(e)}></AddTask>
        </div>
        )
    }
}