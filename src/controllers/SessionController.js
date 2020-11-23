import jwt from 'jsonwebtoken'
import User from '../models/User'
import bcrypt from 'bcryptjs'
import authConfig from '../config/auth'

class SessionController {
    store(req, res) {
        const { email, password } = req.body

        User.findOne({ email: email }).then(data => {
            if (data) {
                bcrypt.compare(password, data.password).then(pass => {
                    if (!pass) {
                        res.status(400).json({ error: "Senha incorreta." })
                    }

                    data.password = undefined
                    res.status(200).json({ user: data, token: jwt.sign(data.id, authConfig.secret) })
                })
            } else {
                res.status(400).json({ error: "Usuário não foi encontrado." })
            }
        })

    }
}

export default new SessionController()