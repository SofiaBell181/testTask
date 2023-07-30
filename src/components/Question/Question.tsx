import { FC } from "react"
import './Question.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

export const Question: FC = () => {
  return (
    <div className="container container-question">
      <div className='question-header'>
        <h2>Вопросы и ответы</h2>
      </div>

      <div className="block-accordion">
        <Accordion>
         
          <AccordionSummary>
            
            <Typography>Подтверждено: сознание наших соотечественников не замутнено пропагандой?</Typography>
            <div className="icon"></div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary>
            <Typography>Прототип нового сервиса - это как трубный призыв?</Typography>
            <div className="icon"></div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary>
            <Typography>Частокол на границе продолжает удивлять?</Typography>
            <div className="icon"></div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.
            </Typography>
          </AccordionDetails>
        </Accordion>

         <Accordion>
          <AccordionSummary>
            <Typography>Очевидцы сообщают, что слышали грохот грома градущих изменений?</Typography>
            <div className="icon"></div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary>
            <Typography>И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?</Typography>
            <div className="icon"></div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary>
            <Typography>Нынче никто не может себе позволить инициировать треск разлетающихся скреп?</Typography>
            <div className="icon"></div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary>
            <Typography>Высококачественный прототип будущего проекта обнадёживает?</Typography>
            <div className="icon"></div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  )
}


