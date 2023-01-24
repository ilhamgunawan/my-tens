import { FormEvent, } from "react"
import { useRouter } from "next/router"

type Props = {
  username: string
}

export default function InputUsername({ username }: Props) {
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = new FormData(e.currentTarget)
    const inputUsername = data.get("username")

    if (inputUsername) router.push(`/?page=1&username=${inputUsername}`)
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="my-5 flex felx-row items-end gap-3"
    >
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Input GitHub username</span>
        </label>
        <input 
          type="text" 
          name="username"
          placeholder="Type here" 
          className="input input-bordered w-full max-w-xs"
          defaultValue={username}
        />
      </div>
      <button type="submit" className="btn">Search</button>
    </form>
  )
}