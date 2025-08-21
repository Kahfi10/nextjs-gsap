import Link from "next/link";

const Nav = () => {
  return (
    <div className="nav">
        <div className="col">
            <div className="nav-logo">
                <Link href="/">Kahfi</Link>
            </div>
        </div>
        <div className="col">
            <div className="nav-items"> 
                <div className="nav-item">
                    <Link href="/work">Work</Link>
                </div>
                <div className="nav-item">
                    <Link href="/about">About</Link>
                </div>
            </div>
            <div className="nav-copy">
                <p>Bulukumba, ind</p>
            </div>
        </div>
    </div>
  );
};

export default Nav;
