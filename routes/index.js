import axios from 'axios'
import { Router } from 'express'
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
            return res.status(401).send({ error })
        }
    }

    // if (req.query)
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
            return res.status(401).send({ error })
        }
    }
    //get user by email. params: email={email}
    if (req.query.hasOwnProperty('/api/v2/get_user_by_email')) {
        try {

            if (!req.query.email) {
                return res.status(400).send({ error: "email are required" })
            }

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
            return res.status(401).send({ error })
        }
    }
    // index.php?/api/v2/get_attachment/{attachment_id}
    if (Object.getOwnPropertyNames(req.query).find(apiPath => apiPath.match(/\/api\/v2\/get_attachment\/\d{1,9}/))) {
        try {

            const token = req.headers.authorization

            if (!token) {
                return res.status(401).send({ error: "token does not exist" })
            }

            const apiPath = Object.getOwnPropertyNames(req.query).find(apiPath => apiPath.match(/\/api\/v2\/get_attachment\/\d{1,9}/))
            console.log(apiPath)
            const attachmentId = getId(apiPath)
            console.log(attachmentId)

            const response = await axios.get(`https://${process.env.server}/index.php?/api/v2/get_attachment/${attachmentId}`, {
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                }
            })

            return res.send(response.data)
        } catch (error) {
            return res.status(401).send({ error })
        }
    }

    // index.php?/api/v2/get_project/{project_id}
    if (Object.getOwnPropertyNames(req.query).find(apiPath => apiPath.match(/\/api\/v2\/get_project\/\d{1,9}/))) {
        try {

            const token = req.headers.authorization

            if (!token) {
                return res.status(401).send({ error: "token does not exist" })
            }

            const apiPath = Object.getOwnPropertyNames(req.query).find(apiPath => apiPath.match(/\/api\/v2\/get_project\/\d{1,9}/))
            const projectId = getId(apiPath)

            const response = await axios.get(`https://${process.env.server}/index.php?/api/v2/get_project/${projectId}`, {
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                }
            })

            return res.send(response.data)
        } catch (error) {
            console.log(error)
            return res.status(401).send({ error })
        }
    }

    // index.php?/api/v2/get_user/{user_id}
    if (Object.getOwnPropertyNames(req.query).find(apiPath => apiPath.match(/\/api\/v2\/get_user\/\d{1,9}/))) {
        try {

            const token = req.headers.authorization

            if (!token) {
                return res.status(401).send({ error: "token does not exist" })
            }

            const apiPath = Object.getOwnPropertyNames(req.query).find(apiPath => apiPath.match(/\/api\/v2\/get_user\/\d{1,9}/))
            const userId = getId(apiPath)

            const response = await axios.get(`https://${process.env.server}/index.php?/api/v2/get_user/${userId}`, {
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                }
            })

            return res.send(response.data)
        } catch (error) {
            console.log(error)
            return res.status(401).send({ error })
        }
    }

    // index.php?/api/v2/get_run/{run_id}
    if (Object.getOwnPropertyNames(req.query).find(apiPath => apiPath.match(/\/api\/v2\/get_run\/\d{1,9}/))) {
        try {

            const token = req.headers.authorization

            if (!token) {
                return res.status(401).send({ error: "token does not exist" })
            }

            const apiPath = Object.getOwnPropertyNames(req.query).find(apiPath => apiPath.match(/\/api\/v2\/get_run\/\d{1,9}/))
            const userId = getId(apiPath)

            const response = await axios.get(`https://${process.env.server}/index.php?/api/v2/get_run/${userId}`, {
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                }
            })

            return res.send(response.data)
        } catch (error) {
            console.log(error)
            return res.status(401).send({ error })
        }
    }

    // index.php?/api/v2/get_test/{test_id}
    if (Object.getOwnPropertyNames(req.query).find(apiPath => apiPath.match(/\/api\/v2\/get_test\/\d{1,9}/))) {
        try {

            const token = req.headers.authorization

            if (!token) {
                return res.status(401).send({ error: "token does not exist" })
            }

            const apiPath = Object.getOwnPropertyNames(req.query).find(apiPath => apiPath.match(/\/api\/v2\/get_test\/\d{1,9}/))
            const userId = getId(apiPath)

            const response = await axios.get(`https://${process.env.server}/index.php?/api/v2/get_test/${userId}`, {
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                }
            })

            return res.send(response.data)
        } catch (error) {
            console.log(error)
            return res.status(401).send({ error })
        }
    }

    // index.php?/api/v2/get_case/{case_id}
    if (Object.getOwnPropertyNames(req.query).find(apiPath => apiPath.match(/\/api\/v2\/get_case\/\d{1,9}/))) {
        try {

            const token = req.headers.authorization

            if (!token) {
                return res.status(401).send({ error: "token does not exist" })
            }

            const apiPath = Object.getOwnPropertyNames(req.query).find(apiPath => apiPath.match(/\/api\/v2\/get_case\/\d{1,9}/))
            const userId = getId(apiPath)

            const response = await axios.get(`https://${process.env.server}/index.php?/api/v2/get_case/${userId}`, {
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                }
            })

            return res.send(response.data)
        } catch (error) {
            console.log(error)
            return res.status(401).send({ error })
        }
    }

    return res.status(500).send({ error: "server error" })

    function getId(apiLink) {
        const id = []
        for (let index = apiLink.length; index >= 0; index--) {
            const element = apiLink[index]
            if (element !== '/') {
                id.push(element)
            } else if (element === '/') {
                return id.reverse().join('')
            }
        }
    }
})

export default router