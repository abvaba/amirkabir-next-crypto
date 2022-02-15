import _ from "./sidebarLink.module.scss"
const SidebarLink = ({...props}) => {
  return (
    <>
      <li className={_.item}>
        <a className={_.link} href="#">
          <span className='px-2'>
          {props.txt}
          </span>
            <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="home" width="1em" height="1em"
               fill="currentColor" aria-hidden="true">
            <path d={props.d}/>
          </svg>
        </a>
      </li>
    </>
  )
}

export default SidebarLink;