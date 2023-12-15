// LoginForm.jsx
import React, { useState } from 'react';
import TasksTable from '../Components/TaskTable';
import TaskFilter from '../Components/TaskFilter';
import '../Styles/ObservationPage.css'; // Stil dosyasını import edin
function ObservationPage({ onLogin }) {
     const initialTasks = [
          {
               id: 1,
               name: 'Görev 1',
               status: 'tamamlandı',
               date: '2023-01-01'
          },
          {
               id: 2,
               name: 'Görev 2',
               status: 'beklemede',
               date: '2023-01-02'
          },
          {
               id: 3,
               name: 'Görev 3',
               status: 'devam ediyor',
               date: '2023-01-03'
          },
          {
               id: 4,
               name: 'Görev 4',
               status: 'tamamlandı',
               date: '2023-01-04'
          },
          {
               id: 5,
               name: 'Görev 5',
               status: 'beklemede',
               date: '2023-01-05'
          }
     ];

     const [tasks, setTasks] = useState(initialTasks); // Tasklarınızın listesi
     const [filteredTasks, setFilteredTasks] = useState(initialTasks);

     const handleFilterChange = (filter) => {
          if (filter === 'all') {
               setFilteredTasks(tasks);
          } else {
               setFilteredTasks(tasks.filter(task => task.status === filter));
          }
     };

     return (
          <div>
               <TaskFilter onFilterChange={handleFilterChange} />
               <TasksTable tasks={filteredTasks} />
          </div>
     );
}

export default ObservationPage;
