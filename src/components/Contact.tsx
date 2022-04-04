import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react'

interface FormInput {
  name: string
  email: string
  body: string
}

const Contact = () => {
  const [submit, setSubmit] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormInput>()

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    const { body, email, name } = data
  }

  return (
    <section className="container mx-auto px-6 mt-56 text-main_font_color">
      <h1 id="contact" className="section-title inline-block mb-32">
        Contact.
      </h1>
      <div className="flex justify-between">
        <div>
          <h1>This will be an image</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-2 border-red-200 flex flex-col max-w-2xl p-10 basis-full items-center"
        >
          <h1 className="block w-max-full w-full mb-11 font-bold">
            Let's keep in touch!
          </h1>
          <label htmlFor="name" className="mb-3 w-full max-w-full">
            <span>Name</span>
            <input
              {...register('name', { required: true })}
              type="text"
              id="name"
              placeholder="John Doe"
              className="text-gray-700 block w-full max-w-full rounded border py-2 px-3 shadow focus:ring focus:ring-main_accent"
            />
            <span className="h-5 w-full block text-second_accent text-sm">
              {errors.name && 'Name is required!'}
            </span>
          </label>
          <label htmlFor="email" className=" mb-3 max-w-full w-full">
            <span>Email</span>
            <input
              {...register('email', { required: true })}
              type="email"
              name="email"
              id="email"
              placeholder="John.Doe@gmail.com"
              className="text-gray-700 block w-full rounded border py-2 px-3 shadow focus:ring focus:ring-main_accent"
            />
            <span className="h-5 w-full block text-second_accent text-sm"></span>
          </label>
          <label htmlFor="body" className=" mb-3 w-full max-w-full">
            <span>Message</span>
            <textarea
              {...register('body', { required: true })}
              name="body"
              id="body"
              cols={30}
              rows={8}
              placeholder="Hello World!"
              className="text-gray-700 block w-full rounded border py-2 px-3 shadow focus:ring focus:ring-main_accent"
            ></textarea>
            <span className="h-5 w-full block text-second_accent text-sm">
              {errors.email && 'Email is required!'}
            </span>
          </label>
          <input
            type="submit"
            className="focus:ring cursor-pointer rounded bg-main_accent px-4 py-2 font-bold"
          />
          <span className="h-5 w-full block text-second_accent text-sm">
            {errors.body && 'Body is required!'}
          </span>
        </form>
      </div>
    </section>
  )
}

export default Contact
