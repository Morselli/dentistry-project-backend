import * as express from "express"
import { AppDataSource } from "./database/data-source"
import { router } from "./routes"

AppDataSource.initialize().then(async () => {
    const app = express()
    const port = 3333

    app.use(express.json())

    app.use('/api/v1', router)

    app.listen(port, () => console.log(`Server listening on port ${port}`))
}).catch(error => console.log(error))
