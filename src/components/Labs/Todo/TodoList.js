import TodoItem from "./TodoItem";
import todos from "./todos.json";

const TodoList = () => {
    return(
        <ul>
            {
                todos.map(todo => {
                    return(<TodoItem todos={todos}/>);
                })
            }
        </ul>
    );
}
export default TodoList;
