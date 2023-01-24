import { useRouter } from "next/router"

type Props = {
  currentPage: number
  username: string
}

export default function Pagination({ currentPage, username }: Props) {
  const router = useRouter()
  const handlePreviousPage = () => router.push(`/?page=${currentPage - 1}&username=${username}`)
  const handleNextPage = () => router.push(`/?page=${currentPage + 1}&username=${username}`)

  return (
    <div className="btn-group grid grid-cols-2 my-6 gap-2">
      <button 
        className="btn rounded"
        disabled={currentPage === 1}
        onClick={handlePreviousPage}
      >
        Previous
      </button>
      <button 
        className="btn rounded"
        onClick={handleNextPage}
      >
        Next
      </button>
    </div>
  )
}
