import Task from '../models/Task';
import {getPagination} from "../libs/getPagination";

export const findAllTask = async (req,res) =>{
    try {
        //cambiamos el find para mostrarlo con paginate como unas paginas
        //offset cantidad de paginas, limit cantidad de doc por paginas
        const{size, page, title} = req.query

        const condition = title ?  {
            title: {$regex: new RegExp(title), $options: "i"},
        } : {} ;

        const {limit, offset} = getPagination(page,size,)

        const data = await Task.paginate(condition ,{offset, limit})

        res.json({
            totalItems: data.totalDocs,
            tasks: data.docs,
            totalPages: data.totalPages,
            currentPage: data.page - 1
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Something goes wrong retrieving the task"
        })
    }
}

export const createTask = async (req,res) => {
    if(!req.body.title){
        return res.status(400).send({message: 'content cannot be empty'})
    }
    try {
    const newTask = new Task({title: req.body.title, description: req.body.description, done: req.body.done ? req.body.done : false});
    await newTask.save();
    console.log(newTask);
    res.json('New Task Created')
    } catch (error) {
        res.status(500).json({
            message: error.message || "Something goes wrong creating a task"
        })
    }
}

export const findOneTask = async(req,res) =>{
    const {id} = req.params
    try {
    const task = await Task.findById(id)
    if(!task) return res.status(400).json({message:`task ${id} does not exist`})
    res.json(task)
    } catch (error) {
        res.status(500).json({
            message: error.message || `Error retrieving task with id: ${id}`,
        })
    }
}

export const findAllDoneTask = async (req,res) =>{
    const tasks = await Task.find({done:true})
    res.json(tasks)
}

export const deleteTask = async(req,res) =>{
    const {id} = req.params
    try {
    const data = await Task.findByIdAndDelete(id)
    res.json({
        message: `${data.title} Task were deleted sucesfully`
    })
    } catch (error) {
        res.status(500).json({
            message: error.message || `Cannot delete task with id: ${id}`,
        })
    }
}

export const updateTask = async(req,res) =>{
    await Task.findByIdAndUpdate(req.params.id,req.body);
    res.json({message: 'Task was updated succesfully'})
}