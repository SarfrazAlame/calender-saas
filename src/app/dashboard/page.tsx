import requiredUser from "@/lib/hooks"
import { redirect } from "next/navigation"

export default async function DashBoardPage() {
    const session = await requiredUser()
    return (
        <div>
            <h1>Hello from DashBoardPage</h1>
        </div>
    )
}