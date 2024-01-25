import React from "react";
import ToDoItem1 from "./ToDoItem1";
export default function ToDoList() {
  return (
    <div className="pt-4">
      <table className="table">
        <thead>
          <tr>
            <th className="col-2">Sr. No.</th>
            <th className="col-2">Task Name</th>
            <th className="col-8">Description</th>
          </tr>
        </thead>
        <tbody>
          <ToDoItem1/>
        </tbody>
      </table>
    </div>
  );
}
