
//ui data
import { navItems } from "@/constants";

export default function Navbar() {
    return (
        <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
            {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="nav-link block px-5 py-4 lg:inline-flex">
                    {item}
                </a>
            ))}
        </nav>
    );
}