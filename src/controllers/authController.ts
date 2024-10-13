import { loginFromService }  from "../services/authService"

const login = async (req:any, res:any) => {
    try {
        const token = await loginFromService(req.body)
        res.cookie("token", token)
        res.json({
            token
            // msg: `welcome ${req.body.user_name}! good to see you!`
        })
    } catch (err:any) {
        res.status(400).send(err.message)
    }
}




export {
    login
}