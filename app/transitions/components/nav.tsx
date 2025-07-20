import Link from "next/link"


const Nav = () => {
    return(
    <nav className="nav">
        <div className="logo">
            <div className="link">
                <Link href={"/transitions"}>Home</Link>
            </div>
        </div>
        <div className="links">
            <div className="link">
                <Link href="/transitions/project">Projects</Link>
            </div>
            <div className="link">
                <Link href="/transitions/info">Info</Link>
            </div>
        </div>
    </nav>
    )
}

export default Nav