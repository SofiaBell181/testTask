import { ButtonHTMLAttributes, FC, useRef, useState } from 'react'
import './Header.scss'
import { HashLink } from 'react-router-hash-link';

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
          <div className='hashlink'>
            <div className='links'>
              <HashLink smooth to={"/#section-one"}>Как это работает</HashLink>
              <HashLink smooth to={"/#section-two"}>3-й блок</HashLink>
              <HashLink smooth to={"/#section-three"}>Вопросы и ответы</HashLink>
              <HashLink smooth to={"/#section-four"}>Форма</HashLink>
            </div>
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
          <HashLink smooth to={"/#section-one"}>Как это работает</HashLink>
          <HashLink smooth to={"/#section-two"}>3-й блок</HashLink>
          <HashLink smooth to={"/#section-three"}>Вопросы и ответы</HashLink>
          <HashLink smooth to={"/#section-four"}>Форма</HashLink>
        </div>
      </div>
    </div>
  )
}


