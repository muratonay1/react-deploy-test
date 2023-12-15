import React from 'react';
import { Table } from 'react-bootstrap'; // React Bootstrap kullanılarak

const TaskTable = ({ tasks }) => {
     return (
          <Table striped bordered hover responsive className="shadow-sm">
               <thead className="bg-primary text-white">
                    <tr>
                         <th>#</th>
                         <th>Task Adı</th>
                         <th>Durum</th>
                         <th>Tarih</th>
                    </tr>
               </thead>
               <tbody>
                    {tasks.map((task, index) => (
                         <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{task.name}</td>
                              <td>{task.status}</td>
                              <td>{task.date}</td>
                         </tr>
                    ))}
               </tbody>
          </Table>
     );
}

export default TaskTable;
