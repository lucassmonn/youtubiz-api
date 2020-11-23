import User from '../models/User'

class UserController {
    store(req, res) {

        const user = new User(req.body)

        User.countDocuments({ email: req.body.email }).then(data => {
            if (data == 0) {
                User.create(user).then(data => {
                    data.password = undefined
                    return res.json(data)
                }).catch(err => {
                    return res.json(err)
                })
            } else {
                return res.status(400).json({ error: 'O e-mail já está cadastrado.' })

            }
        })
    }

    get(req, res) {
        return res.json({ ok: true })
    }
}

export default new UserController()