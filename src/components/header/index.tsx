import { type FC } from "react"
import Link from "next/link"
import Image from "next/image"
import NavLink from "@/components/nav-link";

const Header: FC = () => {
    return (
        <header className="w-full bg-white border-b border-gray-200 py-4 px-8">
            <div className="max-w-4/5 mx-auto flex items-center justify-between">

                <Link href="/" className="flex items-center select-none" draggable="false">
                    <Image
                        src="/logoipsum-418.svg"
                        alt="Logo"
                        width={160}
                        height={40}
                        priority
                        draggable="false"
                        className="w-full h-auto pointer-events-none"
                    />
                </Link>

                <div className="flex grow"></div>

                <nav className="flex gap-8 text-lg font-medium text-gray-700">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/words">Words</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header