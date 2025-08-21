"use client";

import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { use } from "react";
import path from "path";

const Nav = () => {
    const router = useTransitionRouter();
    const pathname = usePathname();

    function triggerPageTransition() {
        document.documentElement.animate([
            {
                clipPath: "polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)"
            },
            {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"
            }
        ], {
            duration: 2000,
            easing: "cubic-bezier(0.9, 0, 0.1, 1)",
            pseudoElement: "::view-transition-new(root)",
        }
        );
    }

    const handleNavigation = (path) => (e) => {
        if (path === pathname) {
            e.preventDefault();
            return;
        }


        router.push(path, {
            onTransitionReady: triggerPageTransition
        })
    };

  return (
    <div className="nav">
        <div className="col">
            <div className="nav-logo">
                <Link href="/" onClick={handleNavigation("/")}>Kahfi</Link>
            </div>
        </div>
        <div className="col">
            <div className="nav-items"> 
                <div className="nav-item">
                    <Link href="/work" onClick={handleNavigation("/work")}>Work</Link>
                </div>
                <div className="nav-item">
                    <Link href="/about" onClick={handleNavigation("/about")}>About</Link>
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
