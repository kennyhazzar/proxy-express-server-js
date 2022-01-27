import axios from 'axios'
import { response, Router } from 'express'
const router = new Router()
import 'dotenv/config'

router.get('/index.php', async (req, res) => {

    // get_users    
    if (req.query.hasOwnProperty('/api/v2/get_users')) {
        try {
            const token = req.headers.authorization

            if (!token) {
                return res.status(401).send({ error: "token does not exist" })
            }

            const response = await axios.get(`https://${process.env.server}/index.php?/api/v2/get_users`, {
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                }
            })

            return res.send(response.data)
        } catch (error) {
            return res.status(401).send({ error: error.response.data.error })
        }
    }
    // get_statuses
    if (req.query.hasOwnProperty('/api/v2/get_statuses')) {
        try {
            const token = req.headers.authorization

            if (!token) {
                return res.status(401).send({ error: "token does not exist" })
            }

            const response = await axios.get(`https://${process.env.server}/index.php?/api/v2/get_statuses`, {
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                }
            })

            return res.send(response.data)
        } catch (error) {
            return res.status(401).send({ error: error.response.data.error })
        }
    }
    //get user by email. params: email={email}
    if (req.query.hasOwnProperty('/api/v2/get_user_by_email')) {
        try {

            const token = req.headers.authorization

            if (!token) {
                return res.status(401).send({ error: "token does not exist" })
            }

            const response = await axios.get(`https://${process.env.server}/index.php?/api/v2/get_user_by_email&email=${req.query.email}`, {
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                }
            })

            return res.send(response.data)
        } catch (error) {
            return res.status(401).send({ error: error.response.data.error })
        }
    }

    return res.status(500).send({ error: "server error" })
})

export default router