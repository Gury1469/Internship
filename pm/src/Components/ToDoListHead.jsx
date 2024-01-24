import React from "react";

export default function ToDoListHead() {
  return (
    <div className="pt-4">
      <table class="table">
        <thead>
          <tr>
            <th className="col-2">Sr. No.</th>
            <th className="col-2">Task Name</th>
            <th className="col-8">Description</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
