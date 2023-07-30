import { ButtonHTMLAttributes, FC, useRef, useState } from 'react'
import './Header.scss'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className ?: string
}


export const Header:FC<IButtonProps> = (props) => {
  const [active, setActive] = useState<boolean>(false)
  const { 
    className,
    ...otherProps
  } = props

  const menuNavbar = useRef<HTMLInputElement>(null);
  const menuIcon = useRef<HTMLButtonElement>(null);

  const onHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setActive(!active);
    if (menuNavbar) menuNavbar.current.classList.toggle('_active');
    else return false;

    if (menuIcon) menuIcon.current.classList.toggle('_active');
    else return false;
  }

  return (
    <div className=' container-header'>
      <div className='container-blue'>
        <div className='container navbar'>
          <div className='logo'>
            <div className='logo-circle'></div>
            <p className={active ? 'logo-par black' : 'logo-par white '}>testLab</p>
          </div>
          <div className='links'>
            <a href="">Как это работает</a>
            <a href="">3-й блок</a>
            <a href="">Вопросы и ответы</a>
            <a href="">Форма</a>
          </div>
          <button className="menu-icon" onClick={onHandle} ref={menuIcon}>
            <span></span>
          </button>
        </div>

        <div className="container-head">
          <h1>Говорят, никогда не поздно <br /> сменить профессию</h1>
          <p>Сделай круто тестовое задание и у тебя получится</p>
          <button className='btn-head' {...otherProps}>Проще простого!</button>
        </div>
      </div>

      <div className="container-white" ref={menuNavbar}>
        <div className='links_mb'>
          <a href="">Как это работает</a>
          <a href="">3-й блок</a>
          <a href="">Вопросы и ответы</a>
          <a href="">Форма</a>
        </div>
      </div>
    </div>
  )
}


