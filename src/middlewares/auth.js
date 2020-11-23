import jwt from 'jsonwebtoken'
import authConfig from '../config/auth'

export default (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ error: 'Token não existe.' })
    }

    const [, token] = authHeader.split(' ')

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Token não autenticado' });

        req.userId = decoded

        next();
    });

}