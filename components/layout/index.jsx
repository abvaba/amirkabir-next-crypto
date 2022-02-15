import Navbar from "../navbar";
import _ from './layout.module.scss'

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <main className={_.main}>
        {children}
      </main>
    </>
  )
}

export default Layout;