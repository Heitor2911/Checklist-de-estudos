import { ToDoList } from "../ToDoList";
import { SubHeading } from "../SubHeading";
import { ToDoItem } from "../ToDoItem";

export function ToDoGroup({ items, heading }) {
  return (
    <>
      <SubHeading>{heading}</SubHeading>
      <ToDoList>
        {items.map(function (t) {
          return <ToDoItem 
          key={t.id} 
          item={t} 
          />;
        })}
      </ToDoList>
    </>
  )
}
