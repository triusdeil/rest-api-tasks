import {Schema, model} from 'mongoose';
//paginate es para paginar los datos y mostrarlo
import mongoosePaginate from 'mongoose-paginate-v2';
const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type:String,
        trim:true
    },
    done:{
        type:Boolean,
        default:false
    }
},{
    versionKey: false,
    timestamps: true,
})

//antes de exportar a plugin
taskSchema.plugin(mongoosePaginate);
export default model('Task',taskSchema)