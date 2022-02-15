import _ from './C1.module.scss'
import Image from "next/image";
const C1 = ({...props}) => {
  return (
    <>
      <div className={_.main}>
        <a className={_.link} href="javascript:void(0)">
          <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869536.2a32.07 32.07 0 0 0 0-48.4z"/></svg>
        </a>

        <h2 style={{marginInlineStart: 'auto'}}>{props.title}</h2>
        <div className={_.avatar}>
          <Image
            src={props.img}
            width='100%'
            height='100%'
            layout='responsive'
            objectFit="contain"
            loading="lazy"
          />
        </div>
      </div>
    </>
  )
}

export default C1;