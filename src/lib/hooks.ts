import { redirect } from "next/navigation";
import { auth } from "./auth";

export default async function requiredUser(){
    const session = await auth()

    if(!session?.user){
        return redirect('/')
    }

    return session
}