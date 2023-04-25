
import { ReactComponent as Logo } from "../assets/icons/logo.svg"
import { ReactComponent as Cart } from "../assets/icons/cart.svg"

const NavBar = function () {
    return (
        <nav>
            <ul>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <Logo />
            <Cart />
        </nav>
    )
}

export default NavBar