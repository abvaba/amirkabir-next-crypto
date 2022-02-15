import _ from './navbar.module.scss';
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className={_.nav}>
        <Link href='/'>
          <a className={_.link}>نمونه 1</a>
        </Link>
        <Link href='/case2'>
          <a className={_.link}>نمونه 2</a>
        </Link>
      </div>
    </>
  )
}

export default Navbar;