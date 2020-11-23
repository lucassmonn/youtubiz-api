const { Router } = require('express')
const YoutubeController = require('./controllers/YoutubeController')

const routes = new Router()


routes.get('/mp4', YoutubeController.mp4)
routes.get('/mp3', YoutubeController.mp3)


module.exports = routes;