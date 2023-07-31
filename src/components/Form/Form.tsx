import Checkbox from "@mui/material/Checkbox";
import { FC } from "react"
import { useForm, SubmitHandler, Controller, DefaultValues } from "react-hook-form"
import { PatternFormat } from 'react-number-format';
import './Form.scss';
import TextField from "@mui/material/TextField";


interface IFormInputs {
  name: string,
  phone: number,
  checkbox: boolean
}

const defaultValues: DefaultValues<IFormInputs> = {
  name: '',
  phone: 9,
  checkbox: false,
}

export const Form: FC = () => {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
    } = useForm<IFormInputs>({defaultValues});

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data)

  return (
    <div className="container container-form">
      <div className='form-header' id='section-four'>
        <h2>Отправь форму</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="col">
          <section>
            <Controller
              name="name"
              control={control}
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) =>
                <TextField
                  aria-invalid={errors.name ? "true" : "false"}
                  id="demo-helper-text-aligned-no-helper"
                  label="Имя"
                  {...field} 
                />
            }
            />
            {errors.name?.type === "required" && (
              <p className="alert">Обязательное поле</p>
            )}
          </section>

            <section>
            <Controller
              name="phone"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, name, value } }) =>
                <PatternFormat
                  name={name}
                  // value={value}
                  onChange={onChange}
                  customInput={TextField}
                  label="Телефон"
                  id="demo-helper-text-aligned-no-helper"
                  format={"+7 (###) #### ###"}
                  mask="_"
                />
              }
            />
            {errors.phone && <p className="alert">Обязательное поле</p>}
          </section>  
        </div>

          <div className="col">
            <div className="block-checkbox">
              <Controller
                name="checkbox"
                rules={{
                  required: true
                }}
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
            <div className="checkbox">
                <label >Согласен, отказываюсь</label>
               
              </div>
 {errors.checkbox && <p className="alert">Обязательное поле</p>}

            </div>
            <input className="sbm" type="submit" />
          </div>
      </form>
    </div>
  )
}


