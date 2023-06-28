import React, { useState } from 'react';
import './MyTasks.css';
import { Task } from '../../../shared/model/task.model';

interface MyCurrentTasksProps {
    currentTasks: Task[]
}

export function MyCurrentTasks({ currentTasks }: MyCurrentTasksProps) {
    return (
        <div id='MyTasks'>
            <h2>My tasks</h2>

            {currentTasks.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Task</th>
                            <th>Priority</th>
                            <th>Size</th>
                            <th>Details</th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentTasks.map((task, index) => (
                            <tr key={`${index} ${task.name}`}>
                                <td>{task.status}</td>
                                <td>{task.name}</td>
                                <td>{task.priority}</td>
                                <td>{task.size}</td>
                                <td>{task.details}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (<span>No tasks added</span>)}
        </div>
    )
};