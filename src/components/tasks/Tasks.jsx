import React, { useState } from 'react';

const TASKS = [
  {
    task: 'Study',
    subtasks: [
      { name: 'Interview Preparation', completed: true },
      { name: 'Screening Test', completed: false },
      { name: 'React coding challenge', completed: false },
    ],
  },
  {
    task: 'Project',
    subtasks: [
      { name: 'Design', completed: false },
      { name: 'Develop', completed: false },
      { name: 'Deploy', completed: false },
    ],
  },
];

export default function App() {
  const [tasks, setTasks] = useState(TASKS);

  const handleSubTask = (taskIdx, subtaskIdx) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task, tIdx) => {
        if (tIdx !== taskIdx) return task;
        return {
          ...task,
          subtasks: task.subtasks.map((sub, sIdx) => {
            if (sIdx !== subtaskIdx) return sub;
            return {
              ...sub,
              completed: !sub.completed,
            };
          }),
        };
      });
    });
  };
  return (
    <div>
      <div>Tasks</div>
      <div>
        {tasks.map((task, index) => {
          return (
            <div key={index}>
              <div>
                <h3>{task.task}</h3>
                <ul>
                  {task.subtasks.map((subtask, idx) => {
                    return (
                      <div key={idx}>
                        <li
                          onClick={() => handleSubTask(index, idx)}
                          style={
                            subtask.completed
                              ? { textDecoration: 'line-through' }
                              : { textDecoration: 'none' }
                          }
                        >
                          {subtask.name}
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
