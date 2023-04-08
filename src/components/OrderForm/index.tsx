import { useForm } from 'react-hook-form';
import './form.scss';
import { useState } from 'react';


type FormData = {
  clientName: string;
  phone: string;
  comment: string | null;
};

interface IFormProps {
  additionalFunc?: () => void;
}


function OrderForm({additionalFunc}: IFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formReady, setFormReady] = useState(false);

  const onSubmit = handleSubmit(data => {
    setFormReady(true);
    additionalFunc && additionalFunc();
  })



  return ( 
    <div className='formWrap' onSubmit={onSubmit}>
      {
        !formReady ? 
        <>
          <h2 className='title formTitle'>Форма обратной связи</h2>
          <form className='form'>
            <label className='label'>
              <span className='field-err'>
                {errors.clientName?.message?.toString()}
              </span>
              <input className='input' type='text' placeholder='Ваше имя' {
                ...register('clientName', {
                  required: 'Обязательное поле',
                })
              }
              aria-invalid={errors.clientName ? 'true' : undefined} 
              />
            </label>
            <label className='label'>
              <span className='field-err'>
                {errors.phone?.message?.toString()}
              </span>
              <input className='input' type='tel' autoComplete='on' placeholder='Номер телефона' {
                ...register('phone', {
                  required: 'Обязательное поле'
                })
              } 
              aria-invalid={errors.phone ? 'true' : undefined} 
              />
            </label>
            <label className='label'>
              <span className='field-err'>
                {errors.comment?.message?.toString()}
              </span>
              <textarea className='input' placeholder='Пожелания к заказу' rows={5} {...register('comment', {
              
              })}
              aria-invalid={errors.comment ? 'true' : undefined} 
              />
            </label>
            <span className='form__main-err'></span>
            <button type='submit' className='button'>Отправить</button>
          </form>
        </> :
        <div className='formReply'>
          Спасибо 🙂
          <span>Ваш заказ принят в работу</span>
          <span>Оператор свяжется с Вами в течение 15 минут <br />для обсуждения деталей доставки</span>
        </div>
      }
    </div>
   );
}

export default OrderForm;