// server.ts
import { Application, Router } from "https://deno.land/x/oak/mod.ts";

// these functions does not exist yet, we will create them later 
//import { getAllRooms, createRooms, getRoom, updateRoom, deleteRoom  } from './routes.ts'

const app = new Application();
const router = new Router(); 
const port = 8080;

router.get('/', (ctx) => {
    ctx.response.body = 'Hello from Deno'
})
// these functions does not exist yet, we will create them later 


// Here, we are telling our application to use the router
app.use(router.routes());
app.use(router.allowedMethods())
app.listen({ port })
console.log(`Server is running on port ${port}`);