"use client";
import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import NoTaskFound from "./NoTaskFound";

const TaskBoard = () => {
  const defaultTasks = {
    id: crypto.randomUUID(),
    title: "lorem ipsum text test",
    description: "lorem ipsum text test lorem ipsum text test",
    tags: ["React", "vuejs", "laravel"],
    priority: "high",
    isFavorit: true,
  };
  const [tasks, setTasks] = useState([defaultTasks]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  // add task function
  const handleAddEditTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowAddModal(false);
  };
  // edit task function
  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowAddModal(true);
  };
  // function for delete task
  const handleDeleteTask = (taskId) => {
    const taskAfterDelete = tasks.filter((task) => task.id !== taskId);
    console.log(taskAfterDelete);
    setTasks(taskAfterDelete);
  };

  // function for all task item delete
  const handleDeleteAllClick = () => {
    // console.log('hello');
    tasks.length = 0;
    setTasks([...tasks]);
  };
  // function for handleFavorit
  const handleFavorit = (favId) => {
    const taskindex = tasks.findIndex((task) => task.id === favId);
    let newTasks = [...tasks];
    newTasks[taskindex].isFavorit = !newTasks[taskindex].isFavorit;
    setTasks(newTasks);
  };
  // function for handleSearch
  const handleSearch = (searchTerm) => {
    console.log(searchTerm);
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTasks([...filtered]);
  };
  // close modal function
  const onCloseClick = () => {
    setShowAddModal(false);
    setTaskToUpdate(null);
  };
  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal
          onSave={handleAddEditTask}
          taskToUpdate={taskToUpdate}
          onCloseClick={onCloseClick}
        />
      )}
      <div className="container mx-auto">
        <SearchTask onSearch={handleSearch} />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#fff] px-6 py-8 md:px-9 md:py-16">
          <TaskActions
            onDeleteAllClick={handleDeleteAllClick}
            onAddClick={() => setShowAddModal(true)}
          />
          {tasks.length > 0 ? (
            <TaskList
              onFav={handleFavorit}
              tasks={tasks}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          ) : (
            <NoTaskFound />
          )}
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
