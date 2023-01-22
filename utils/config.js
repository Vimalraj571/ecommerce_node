import dotenv from 'dotenv'

dotenv.config()

const URL = process.env.MONGODB_URI

const PASS = process.env.MONGODB_PASS
const { PORT } = process.env

export default { URL, PASS, PORT }
