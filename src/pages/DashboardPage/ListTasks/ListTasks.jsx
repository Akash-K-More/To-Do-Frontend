import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './ListTasks.css'

export default function ListTasks({tasks, onEditTask, onDeleteTask}) {
    return (
        <TransitionGroup>
            {tasks?.map((task) => (
                <CSSTransition key={task.id} timeout={500} classNames="fade">
                    <div className={`task ${new Date(task.due_date) < new Date() ? 'overdue' : ''}`}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p>Priority: {task.priority}</p>
                        <p>Due: {task.due_date}</p>
                        <button style={{padding: "4px 8px", marginRight: "5px"}} onClick={() => onEditTask(task)}>Edit</button>
                        <button style={{padding: "4px 8px"}} onClick={() => onDeleteTask(task.id)}>Delete</button>
                    </div>
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
}
