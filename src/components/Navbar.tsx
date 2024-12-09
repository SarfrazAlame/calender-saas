import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png"

export default function Navbar() {
    return (
        <div>
            <Link href={'/'}>
                <Image src={Logo} alt="logo" className="size-10" width={50} height={50} />
            </Link>
        </div>
    )
}
