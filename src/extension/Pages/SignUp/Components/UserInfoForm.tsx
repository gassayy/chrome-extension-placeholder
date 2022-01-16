import { useForm } from 'react-hook-form'

type UserInfo = {
  username: string
  email: string
}

export default function UserInfoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInfo>()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <input type="text" {...register('username')} />
      <input type="email" {...register('email')} />
      <input type="submit" />
    </form>
  )
}
