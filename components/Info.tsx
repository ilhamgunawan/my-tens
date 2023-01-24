type Props = {
  message: string
}

export default function Info({ message }: Props) {
  return (
    <div className="flex items-center justify-center p-5">
      <p className="text-gray-500">{message}</p>
    </div>
  )
}
