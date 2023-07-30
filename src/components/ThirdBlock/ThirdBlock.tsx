import { FC } from "react"
import Man from '/assets/images/man.png';
import Truck from '/assets/images/truck.png';
import './ThirdBlock.scss';

export const ThirdBlock: FC = (params) => {

  return (
    <div className="container container-trirdBlock">
      <div className="trirdBlock-context">
        <h2>Круто, ты дошел до третьего блока</h2>
        <div className="trirdBlock-par">
          <p>63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽. </p>
          <p>Доступ к заработанным деньгам помогает отказаться от кредитов <br /> и экономить деньги на процентах и штрафах.</p>
        </div>
      </div>
      <div className="trirdBlock-image">
        <img className="man" src={Man} alt="" />
        <img className="truck" src={Truck} alt="" />
      </div>
    </div>
  )
}


