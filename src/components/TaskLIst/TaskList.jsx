import { Component } from "react";
import style from "./TaskList.module.scss";

export class TaskList extends Component {
state = {
      tasks: [
        {
          id: 1,
          text: "Помити посуду",
        },
        {
          id: 2,
          text: "Підготуватись до кр",
        },
        {
          id: 3,
          text: "Сходити в спортзал",
        },
        {
          id: 4,
          text: "Записатись до лікаря",
        },
        {
          id: 5,
          text: "Позвонити брату",
        },
        {
          id: 6,
          text: "Віддати ключі ",
        },
        {
          id: 7,
          text: "Зробити вагон дз",
        },
        {
          id: 8,
          text: "Полити вазон",
        },
        
      ],
    };




  deleteElem(id) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  }
  render() {
    return (
      <ul className={style.list}>
        {this.state.tasks.map((task) => {
          return (
            <li className={style.item} key={task.id}>
              <p className={style.text}>{task.text}</p>
              <button
                className={style.btn}
                onClick={() => this.deleteElem(task.id)}
              >
                Видалити
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
