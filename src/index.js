import app from "./app"
import "./database";

//Server
app.listen(app.get('port'), () =>{
    console.log(`server listening on port ${app.get('port')}`);
})