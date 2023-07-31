import { FC } from "react"
import Waiting from '/assets/images/waiting.png';
import Delivery from '/assets/images/delivery-truck.png';
import Secure from '/assets/images/secure.png';
import MoneyBag from '/assets/images/money-bags.png';
import './Card.scss'

export const Card: FC = () => {
  return (
    <div className="container container-card">

      <div className="card-header" id="section-one">
        <h2>Как это работает</h2>
      </div>

      <div className="block-card">
        <div className="card">
          <img src={Waiting} alt="" />
          <div>
            <h3>Прочитай задание внимательно</h3>
            <p>Думаю у тебя не займет это больше двух-трех минут</p>
          </div>
        </div>

        <div className="card">
          <img src={Delivery} alt="" />
          <div>
            <h3>Изучи весь макет заранее</h3>
            <p>Подумай как это будет работать на разных разрешениях и при скролле</p>
          </div>
        </div>

        <div className="card">
          <img src={Secure} alt="" />
          <div>
            <h3>Сделай хорошо</h3>
            <p>Чтобы мы могли тебе доверить подобные задачи в будущем</p>
          </div>
        </div>

        <div className="card">
          <img src={MoneyBag} alt="" />
          <div>
            <h3>Получи предложение</h3>
            <p>Ну тут все просто, не я придумал правила, но думаю так и будет)))</p>
          </div>
        </div>

      </div>
    </div>
  )
}


