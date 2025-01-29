import jwt from 'jsonwebtoken'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default async function Page() {
    const token = (await cookies()).get('token')?.value
    if (!token) {
        redirect('/auth/login')
    }
    let user = null;
    try {
      user = jwt.verify(token, process.env.JWT_SECRET);
      console.log(user);
    } catch (error) {
      redirect("/auth/login"); // Redirect if token is invalid
    }
  
    return (
      <div>
        <h1>Welcome to Dashboard</h1>
        <p>Hello, {user.email}!</p>
      </div>
    );
}