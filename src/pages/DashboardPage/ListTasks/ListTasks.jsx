import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './ListTasks.css'

export default function ListTasks({tasks}) {
    return (
        <TransitionGroup>
            {tasks.map((task) => (
                <CSSTransition key={task.id} timeout={500} classNames="fade">
                    <div className={`task ${new Date(task.due_date) < new Date() ? 'overdue' : ''}`}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p>Priority: {task.priority}</p>
                        <p>Due: {task.due_date}</p>
                        <button >Edit</button>
                        <button >Delete</button>
                    </div>
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
}
