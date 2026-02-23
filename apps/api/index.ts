import { Elysia } from 'elysia'
import {prisma} from '@repo/db'
const app = new Elysia()

app.get('/', () => 'API running 🚀')

app.listen(3001)



console.log('API running on http://localhost:3001')