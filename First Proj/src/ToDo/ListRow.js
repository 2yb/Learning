export const ListRow = ({ task, setList }) => {
  const onCheckboxChange = (e) => {
    setList((prev) =>
      prev.map((list) =>
        list.id != task.id ? list : { ...list, isDone: !list.isDone }
      )
    );
  };

  return (
    <div
      style={{
        display: "list-item",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <li key={task.id}>
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={onCheckboxChange}
        />
        {task.name}
        <i
          onClick={() => {
            setList((prev) =>
              prev.filter((list) => {
                return list.id != task.id;
              })
            );
          }}
          class="fa-solid fa-ban"
        ></i>
      </li>
    </div>
  );
};
export default ListRow;
