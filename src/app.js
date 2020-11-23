import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'
import cors from 'cors'

import dbConfig from './config/db'

class App {

    constructor() {
        this.server = express()

        // mongoose.connect(dbConfig.url, dbConfig.opt, dbConfig.callback)

        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.server.use(cors())
        this.server.use(express.json())
    }

    routes() {
        this.server.use(routes)
    }

}

export default new App().server