import {Router} from "express"
import * as TaskCtrl from '../controllers/task.controller';

//Initizalition
const router = Router()

router.get('/', TaskCtrl.findAllTask)

router.post('/', TaskCtrl.createTask)

router.get('/done',TaskCtrl.findAllDoneTask)

router.get('/:id', TaskCtrl.findOneTask);

router.delete('/:id', TaskCtrl.deleteTask);

router.put('/:id', TaskCtrl.updateTask);
export default router;