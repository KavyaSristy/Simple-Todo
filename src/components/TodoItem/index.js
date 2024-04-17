// Write your code here
const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const OndeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="listContainer">
      <p className="para">{title}</p>
      <button type="button" onClick={OndeleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
