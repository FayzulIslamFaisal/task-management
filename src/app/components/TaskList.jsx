import { Fragment } from "react";
import { FaStar } from "react-icons/fa";

const TaskList = ({ tasks, onEdit, onDelete, onFav}) => {
    return (
        <div className="overflow-auto">
            <table className="table-fixed overflow-auto xl:w-full">
                <thead>
                    <tr className="border-b border-[#dfdfdf]">
                        <th className="p-2 pb-3 text-sm font-semibold capitalize w-[48px]"></th>
                        <th className="p-2 pb-3 text-sm font-semibold capitalize w-[300px]"> Title </th>
                        <th className="p-2 pb-3 text-sm font-semibold capitalize w-full"> Description </th>
                        <th className="p-2 pb-3 text-sm font-semibold capitalize md:w-[350px]"> Tags </th>
                        <th className="p-2 pb-3 text-sm font-semibold capitalize md:w-[100px]"> Priority </th>
                        <th className="p-2 pb-3 text-sm font-semibold capitalize md:w-[100px]"> Options </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks?.map((task) => {
                            return (
                                <tr key={task.id} className="border-b border-[#dfdfdf] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                                    <td>
                                        <button onClick={()=>onFav(task.id)}>
                                            {task.isFavorit ? (<FaStar color="green" />) : (<FaStar color="gray" />)}
                                        </button>
                                    </td>
                                    <td>{task?.title}</td>
                                    <td>
                                        <div>
                                            {task?.description}
                                        </div>
                                    </td>
                                    <td>
                                        <ul className="flex justify-center gap-1.5 flex-wrap">
                                            {
                                                task?.tags.map((tag) => {
                                                    return (
                                                        <li key={tag}>
                                                            <span
                                                                className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#333333] px-2.5 text-sm capitalize text-[#F4F5F6]"> {tag} </span>
                                                        </li>
                                                    )
                                                })
                                            }


                                        </ul>
                                    </td>
                                    <td className="text-center"> {task.priority} </td>
                                    <td>
                                        <div className="flex items-center justify-center space-x-3">
                                            <button onClick={()=>onDelete(task.id)} className="bg-red-500 text-white px-1">Delete</button>
                                            <button onClick={()=>onEdit(task)} className="text-blue-500">Edit</button>
                                        </div>
                                    </td>
                                </tr>

                            )
                        })
                    }


                </tbody>
            </table>
        </div>
    )
}

export default TaskList