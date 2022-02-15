import _ from './home.module.scss'
import Gear from "../components/icons/gear";
import {useCallback, useEffect, useState} from "react";
import Image from 'next/image';

import Arrow from "../components/icons/arrow";

export default function Home() {
  const [gearColor, setGearColor] = useState('#171717');
  const [gearColor2, setGearColor2] = useState('#171717');
  const [bValue, setBValue] = useState(0);
  const [eValue, setEValue] = useState(0);
  const [bBalanceValue, setBBalanceValue] = useState(100);
  const [eBalanceValue, setEBalanceValue] = useState(100);
  const [state, setState] = useState(true);
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen(!open), [open, setOpen]);
  return (
    <>
      <div className={_.main}>
        <div
          className={_.top}
          onMouseEnter={() => {
            setGearColor('#A3A3A3')
          }}
          onMouseLeave={() => {
            setGearColor('#171717')
          }}
        >
          <Gear sColor={gearColor}/>
          Swap
        </div>
        <div className={_.valContainer} style={{order: state ? 2 : 4}}>
          <input
            value={bValue}
            onChange={e => {
              setBValue(e.target.value)
              setEValue(e.target.value * 10)
            }}
            name='bitcoin'
            className={_.valCInput}
            type="number"
            placeholder='0'
            min='0'
            disabled={!state}
          />
          <div className={_.valCAvatar}>
            <Image
              src='/logo.png'
              width='100%'
              height='100%'
              layout='responsive'
              objectFit="contain"
              loading="lazy"
            />
          </div>
          <button
            disabled={!state}
            onClick={() => {
              setBBalanceValue(bBalanceValue - 1)
              if (bBalanceValue <= 0) setBBalanceValue(0)
              if (bBalanceValue > 0) setEBalanceValue(eBalanceValue + 10)
            }}
            className={_.valCBtn}>
            بالانس :
            <span>
                {bBalanceValue}
          </span>
          </button>
        </div>
        <div className='w-full flex flex-row items-center justify-center' style={{order: 3}}>
          <button
            onClick={() => setState(!state)}
            onMouseEnter={() => {
              setGearColor2('#A3A3A3')
            }}
            onMouseLeave={() => {
              setGearColor2('#171717')
            }}
          >
            <Arrow stroke={gearColor2}/>
          </button>
        </div>
        <div className={_.valContainer} style={{order: state ? 4 : 2}}>
          <input
            value={eValue}
            onChange={e => {
              setEValue(e.target.value)
              setBValue(e.target.value / 10)
            }}
            name='ethereum'
            className={_.valCInput}
            type="number"
            placeholder='0'
            min='0'
            disabled={state}
          />
          <div className={_.valCAvatar}>
            <Image
              src='/ethereum.png'
              width='100%'
              height='100%'
              layout='responsive'
              objectFit="contain"
              loading="lazy"
            />
          </div>
          <button
            disabled={state}
            onClick={() => {
              setEBalanceValue(eBalanceValue - 10)
              if (eBalanceValue <= 0) setEBalanceValue(0)
              if (eBalanceValue > 0) setBBalanceValue(bBalanceValue + 1)
            }}
            className={_.valCBtn}>
            بالانس :
            <span>
                {eBalanceValue}
          </span>
          </button>
        </div>
        <button className={_.swapBtn} onClick={toggle}>
          swap
        </button>

      </div>
      <div className={open ? 'modal modal_open' : 'modal'}>
        <div className={_.modalInner}>
          <button className={_.closeModal} onClick={toggle}>X</button>
          <div style={{order: state ? 2 : 4}} className={_.swapItem}>
            <div className={_.valCAvatar} style={{marginInlineStart: 0}}>
              <Image
                src='/logo.png'
                width='100%'
                height='100%'
                layout='responsive'
                objectFit="contain"
                loading="lazy"
              />
            </div>
            <span>
            {bValue}
            </span>
          </div>
          <div style={{order: 3}} className='w-full flex flex-row items-center justify-center'>
            <Arrow stroke={gearColor2}/>
          </div>
          <div style={{order: state ? 4 : 2}} className={_.swapItem}>
            <div className={_.valCAvatar} style={{marginInlineStart: 0}}>
              <Image
                src='/ethereum.png'
                width='100%'
                height='100%'
                layout='responsive'
                objectFit="contain"
                loading="lazy"
              />
            </div>
            <span>
            {eValue}
            </span>
          </div>
          <div style={{order: 7}} className='w-full flex flex-row items-center justify-start'>
            <div className={_.valCAvatar} style={{marginInlineStart: 0}}>
              <Image
                src='/logo.png'
                width='100%'
                height='100%'
                layout='responsive'
                objectFit="contain"
                loading="lazy"
              />
            </div>
            <span className='px-1'>
            = 10
            </span>
            <div className={_.valCAvatar} style={{marginInlineStart: 0}}>
              <Image
                src='/ethereum.png'
                width='100%'
                height='100%'
                layout='responsive'
                objectFit="contain"
                loading="lazy"
              />
            </div>

          </div>
          <button className={_.swapBtn} onClick={() => {alert('swap confirmed!')}} style={{order: 9, marginBlock: '1rem'}}>
            confirm swap
          </button>
        </div>
      </div>
    </>
  )
}
