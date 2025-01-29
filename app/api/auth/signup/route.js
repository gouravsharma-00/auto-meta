import dbConnect from '@utils/dbConnect'
import User from '@utils/models/User'
import bcrypt from 'bcryptjs'

export async function POST(req) {
    await dbConnect()

    try {
        const { name, email, password } = await req.json()

        const exist = await User.findOne({ email })
        if( exist ) {
            return new Response(JSON.stringify({ message: "User already exist" }), { status: 400 })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({ name, email, password: hashedPassword })
        return new Response(JSON.stringify({ message: "User created" }), { status: 201 })
    }catch(error) {
        return new Response(JSON.stringify({ message: `Something went wrong: , ${error.message}`}), { status: 500 })
    }
}
