import React from "react";
import ToDoListHead from "./ToDoListHead";
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
          <tr>
            <td className="col-2">1</td>
            <td className="col-2">Jacob</td>
            <td className="col-8">
              <tr className="row">
                <td className="col-9">
                  Lorem ipsum, dolor sit amet consectetur adipisicing
                </td>
                <td className="col-3">
                  <button type="button" class="btn btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>
              <tr className="row">
                <td className="col-9">
                  Lorem ipsum, dolor sit amet consectetur adipisicing
                </td>
                <td className="col-3">
                  <button type="button" class="btn btn-outline-danger">
                    Delete
                  </button>
                </td>
              </tr>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
