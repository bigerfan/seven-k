import { auth } from "@/lib/auth";
import { Navbar } from "./navbar";

export default async function Header() {

    const session = await auth()


    return (
        <Navbar user={session} />
    );
}

