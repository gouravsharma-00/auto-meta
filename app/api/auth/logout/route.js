import { cookies } from "next/headers";

export async function POST() {
    (await cookies()).delete('token')
    return new Response(
        JSON.stringify({message: "Logout success", ok: true}, {
            status: 200
        })
    )
}