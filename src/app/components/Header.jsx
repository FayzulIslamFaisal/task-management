
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <nav className="py-3 md:py-3  w-full !bg-[#ecedf2] z-50">
            <div className="container mx-auto flex items-center justify-between ">
                <Link href="/">
                    <Image src={`/images/logo.png`} alt="Lws" width={50} height={120} />
                </Link>
            </div>
        </nav>
    )
}

export default Header