import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { SendToMonday } from '@lib/monday_rsvp'

import cn from 'classnames'
const MAX_STEPS = 5
const FinishSectionButton = ({ onClick, isdisabled, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={isdisabled}
      type='button'
      className='inline-block px-10 py-2 mt-4 text-lg font-semibold text-center duration-300 ease-in-out bg-black rounded-md cursor-pointer font-cormorant text-cream-light drop-shadow-sm hover:scale-95 disabled:hover:scale-100 disabled:bg-opacity-30 '
    >
      {children}
    </button>
  )
}

function RSVP() {
  const [formStep, setFormStep] = useState(0)
  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)
  const [kids, setKids] = useState(0)
  const [password, setPassword] = useState(0)
  const [passwordError, setPasswordError] = useState('')
  const [isPasswordValid, setValidPassword] = useState(false)

  const {
    register,
    resetField,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
  })

  const handleStepCompletion = () => {
    setFormStep((cur) => cur + 1)
  }

  const handleGoBackToPreviousStep = () => {
    setFormStep((cur) => cur - 1)
  }

  const checkPassword = () => {
    if (process.env.NEXT_PUBLIC_RSVP_PASSWORD === password) {
      setValidPassword(true)
      setPasswordError('')
    } else { 
      setPasswordError('Incorrect Password')
    }
  }

  ///////////
  // SENDGRID
  ///////////
  async function SendToSendgrid(data) {
    console.log('sendgrid')
    await fetch('/api/mail-rsvp-confirmation', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => res.json())
    await fetch('/api/mail-rsvp-notification', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => res.json())
  }
  const onSubmit = (data) => {
    SendToMonday(data)
    handleStepCompletion()
    // SendToSendgrid(data)
    resetField('firstguest_address')
    resetField('firstguest_attending')
    resetField('firstguest_name')
    resetField('firstguest_phone')
    resetField('firstguest_email')
    resetField('adult_count')
    resetField('children_count')
    resetField('kids_count')
    resetField('notes')
    reset()
  }

  const resetForm = () => {
    reset()
    setFormStep(0)
  }

  return (
    <div className='z-10 w-full max-w-xl mx-auto my-12 overflow-hidden border-2 border-black rounded-md bg-cream'>
      {formStep < 6 && (
        <div className='w-full h-2 bg-white'>
          <div
            style={{ width: `${((formStep + 1) / (MAX_STEPS + 1)) * 100}%` }}
            className='h-full bg-black'
          ></div>
        </div>
      )}
      <div className='px-10 py-10 lg:px-16 bg-cream-light'>
        {formStep < 5 && (
          <div
            className={`flex ${formStep === 0 ? 'justify-end' : 'justify-between'
              } items-center mb-6 font-medium text-sm`}
          >
            {formStep > 0 && (
              <button
                onClick={handleGoBackToPreviousStep}
                className='flex items-center font-semibold text-gray-400 font-cormorant hover:text-gray-500 focus:outline-none'
              >
                <span> &larr; Previous</span>
              </button>
            )}
            <p className={cn('font-cormorant font-semibold')}>
              Step {formStep + 1} of {MAX_STEPS}
            </p>
          </div>
        )}

{ isPasswordValid ? (
    <form onSubmit={handleSubmit(onSubmit)}>
    {/* FIRST GUEST – NAME & RSVP */}
    {formStep >= 0 && (
      <section className={formStep === 0 ? 'block' : 'hidden'}>
        <h2 className='mb-8 text-3xl font-medium text-black font-cormorant'>First Guest</h2>
        <input
          type='text'
          placeholder='Full Name'
          name='firstguest_name'
          id='firstguest_name'
          className='font-cormorant font-semibold text-xl text-black text-opacity-75 max-w-3xl mb-3 mt-3 leading-relaxed
          bg-cream-light
              block
              w-full
              px-0.5
              border-0 border-b-2 border-gray-200
              focus:ring-0 focus:border-black'
          {...register('firstguest_name', {
            required: { message: 'Please enter your name.', value: true },
            minLength: { message: "c'mon that's not your name", value: 3 },
          })}
        />
        <div className='flex justify-end font-cormorant semi-bold'>
          <FinishSectionButton onClick={handleStepCompletion} isdisabled={!isValid}>
            Next &rarr;
          </FinishSectionButton>
        </div>
      </section>
    )}

    {formStep >= 1 && (
      <section className={formStep === 1 ? 'block' : 'hidden'}>
        <h2 className='mb-8 text-3xl font-medium text-black font-cormorant'>
        </h2>
          <div className={cn('flex flex-col gap-y-3')}>
            <input
              type='text'
              placeholder='Home Address'
              id='firstguest_address'
              required
              name='firstguest_address'
              className='font-cormorant font-semibold text-xl text-black text-opacity-75 max-w-3xl mb-3 mt-3 leading-relaxed bg-cream-light
              block
              w-full
              px-0.5
              border-0 border-b-2 border-gray-200
              focus:ring-0 focus:border-black'
              {...register('firstguest_address', {
                required: { message: 'Please enter your name.', value: true },
                minLength: { message: "c'mon that's not your name", value: 3 },
              })}
            />
            <input
              type='tel'
              placeholder='Phone Number'
              id='firstguest_phone'
              required
              name='firstguest_phone'
              className='font-cormorant font-semibold lg:w-1/2 text-xl text-black text-opacity-75 max-w-3xl mb-3 mt-3 leading-relaxed bg-cream-light block px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
              {...register('firstguest_phone', {
                required: { message: 'Please enter your phone number.', value: true },
              })}
            />
            <input
              type='email'
              placeholder='Email'
              id='firstguest_email'
              required
              name='firstguest_email'
              className='font-cormorant font-semibold text-xl text-black text-opacity-75 max-w-3xl mb-3 mt-3 leading-relaxed bg-cream-light
              block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
              {...register('firstguest_email', {
                required: { message: 'Please enter your email.', value: true },
                minLength: { message: 'Not long enough', value: 3 },
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Invalid email address',
                },
              })}
            />
          </div>

        <div className='flex justify-end'>
          <FinishSectionButton onClick={handleStepCompletion} isdisabled={!isValid}>
            Next &rarr;
          </FinishSectionButton>
        </div>
      </section>
    )}
    {formStep === 2 && (
      <section>
        <h2 className='mb-8 text-3xl font-semibold text-black font-cormorant'>Additional Guests</h2>
        <div className='flex-col w-full my-8'>
          {/* Adults */}
          <div className='flex items-center justify-between w-full'>
            <p className='text-2xl font-semibold font-cormorant'>Adults (17+)</p>
            <div className='flex justify-center gap-1 my-3 lg:justify-start'>
              <input
                {...register('adult_count')}
                min='0'
                type='number'
                id='adult_count'
                name='adult_count'
                value={adults}
                className='font-cormorant font-semibold text-3xl text-black text-opacity-75 my-3 leading-relaxed bg-cream-light w-14 mx-1 text-center px-0.5 border-0 border-b-2 border-black focus:ring-0 focus:border-black'
                onChange={evt => setAdults(evt.target.value)}
              />
            </div>
          </div>
          {/* Children between 5-16 */}
          <div className='flex items-center justify-between'>
            <p className='text-2xl font-semibold font-cormorant'>Children (5-16 years)</p>
            <div className='flex justify-center gap-1 my-3 lg:justify-start'>
              <input
                {...register('children_count')}
                min='0'
                type='number'
                id='children_count'
                name='children_count'
                value={children}
                className='font-cormorant font-semibold text-3xl text-black text-opacity-75 my-3 leading-relaxed bg-cream-light w-14 mx-1 text-center px-0.5 border-0 border-b-2 border-black focus:ring-0 focus:border-black'
                onChange={evt => setChildren(evt.target.value)}
              />
            </div>
          </div>
          {/* Kids */}
          <div className='flex items-center justify-between w-full'>
            <p className='text-2xl font-semibold font-cormorant'>Kids (4 years under):</p>
            <div className='flex justify-center gap-1 my-3 lg:justify-start'>
              <input
                {...register('kids_count')}
                min='0'
                type='number'
                id='kids_count'
                name='kids_count'
                value={kids}
                className='font-cormorant font-semibold text-3xl text-black text-opacity-75 my-3 leading-relaxed bg-cream-light w-14 mx-1 text-center px-0.5 border-0 border-b-2 border-black focus:ring-0 focus:border-black'
                onChange={evt => setKids(evt.target.value)}
              />
            </div>
          </div>
        </div>
        <div className='flex justify-end'>
          <FinishSectionButton onClick={handleStepCompletion}>
            Next &rarr;
          </FinishSectionButton>
        </div>
      </section>
    )}
    {formStep === 3 && (
      <section>
        <h2 className='mb-8 text-3xl font-semibold text-black font-cormorant'>Any Notes?</h2>
        <textarea
          placeholder='Optional'
          name='notes'
          id='notes'
          rows={5}
          className='block w-full max-w-3xl px-6 py-3 mt-3 mb-3 text-xl font-semibold leading-relaxed text-black text-opacity-75 border-2 border-gray-200 rounded-md font-cormorant bg-cream-light focus:ring-0 focus:border-black'
          {...register('notes', {})}
        />
        <ErrorMessage
          errors={errors}
          name="singleErrorInput"
          render={({ message }) => <p>{message}</p>}
        />
        <div className='flex justify-end'>
          <button
            type={'submit'}
            className='inline-block px-10 py-2 mt-4 text-lg font-semibold text-center duration-300 ease-in-out bg-black rounded-md cursor-pointer font-cormorant text-cream-light drop-shadow-sm hover:scale-95 disabled:hover:scale-100'
          >
            <span>Submit &rarr;</span>
          </button>
        </div>
      </section>
    )}
    {formStep >= 4 && (
      <section>
        <h2 className='mb-8 text-3xl font-semibold text-black font-cormorant'>Thank you for RSVPing!</h2>
        <div>
          <p className='inline-block p-2 px-6 py-2 text-lg font-semibold duration-300 ease-in-out bg-black rounded-md text-cream-light drop-shadow-sm hover:scale-95 font-cormorant'>
            <a href='/CarlosandSeannasHappilyEverAfter.ics' download>
              Add to iCal (Apple Calendar)
            </a>
          </p>
          <br />
          <p className='inline-block p-2 px-6 py-2 text-lg font-semibold duration-300 ease-in-out bg-black rounded-md text-cream-light drop-shadow-sm hover:scale-95 font-cormorant'>
          <a 
            target="_blank" 
            href="https://calendar.google.com/event?action=TEMPLATE&tmeid=M3JxYW1vMm9mdnVpbnA0NHJqcTdlOWowMGMgY2FybG9zLmRlbGdhZG8uZGV2QG0&tmsrc=carlos.delgado.dev%40gmail.com">
              Add to Google Calendar
          </a>
          </p>
        </div>
      </section>
    )}
  </form>
    ) : (
      <section className={formStep === 0 ? 'block' : 'hidden'}>
      <h2 className='mb-8 text-3xl font-medium text-black font-cormorant'>Password</h2>
      <input
        type='number'
        placeholder='Password'
        name='password'
        id='password'
        onChange={(e) => setPassword(e.target.value)}
        className='font-cormorant font-semibold text-xl text-black text-opacity-75 max-w-3xl mb-3 mt-3 leading-relaxed bg-cream-light block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
      />
      <div className='flex justify-end font-cormorant semi-bold'>
        <FinishSectionButton onClick={checkPassword} isdisabled={password === (0 || '')}>
          Next &rarr;
        </FinishSectionButton>
      </div>
    </section>
        
            )}
      </div>
    </div>
  )
}

export default RSVP
