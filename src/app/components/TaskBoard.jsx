"use client"
import { useState } from 'react'
import SearchTask from './SearchTask'
import TaskActions from './TaskActions'
import TaskList from './TaskList'
import AddTaskModal from './AddTaskModal'

const TaskBoard = () => {
    const defaultTasks = {
        id: crypto.randomUUID(),
        title: "lorem ipsum text test",
        description: "lorem ipsum text test lorem ipsum text test",
        tags: ["React", "vuejs", "laravel"],
        priority: "high",
        isFavorit: true
    }
    const [tasks, setTasks] = useState([defaultTasks]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [taskToUpdate, setTaskToUpdate] = useState(null);

    // add task function
    const handleAddEditTask = (newTask, isAdd) => {
        if (isAdd) {
            setTasks([...tasks, newTask])
        }else {
            setTasks(tasks.map((task)=>{
                if (task.id === newTask.id) {
                    return newTask;
                }
                return task;
            }))
        }
        setShowAddModal(false)
    }
    // edit task function
    const handleEditTask = (task) => {
        setTaskToUpdate(task);
        setShowAddModal(true)

    }
    // close modal function
    const onCloseClick =()=> {
        setShowAddModal(false)
        setTaskToUpdate(null)
    }
    return (
        <section className="mb-20" id="tasks">
            {
                showAddModal && (<AddTaskModal onSave={handleAddEditTask} taskToUpdate={taskToUpdate} onCloseClick={onCloseClick} />)
            }
            <div className="container mx-auto">
                <SearchTask />
                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#fff] px-6 py-8 md:px-9 md:py-16">
                    <TaskActions onAddClick={() => setShowAddModal(true)} />
                    <TaskList tasks={tasks} onEdit={handleEditTask} />
                </div>
            </div>
        </section>
    )
}

export default TaskBoard