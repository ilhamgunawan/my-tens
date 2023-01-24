/* eslint-disable @next/next/no-img-element */
import { RepoItem } from "@/lib/repo"
import { User, Star } from "lucide-react"

type Props = {
  repo: RepoItem
}

export default function RepoCard({ repo }: Props) {
  return (
    <div className="card card-side bg-base-100 shadow-md">
      <figure className="py-4 pl-3">
        <div className="avatar">
          <div className="w-12 h-12 rounded-full">
            <img src={repo.owner.avatar_url} alt={repo.owner.login} />
          </div>
        </div>
      </figure>
      <div className="card-body p-3">
        <div className="flex flex-row justify-between">
          <a 
            href={repo.html_url} 
            target="_blank" 
            rel="noreferrer"
            className="text-md text-primary font-bold hover:underline"
          >
            {repo.name}
          </a>
          {repo.language && <div className="badge badge-neutral rounded text-xs">{repo.language}</div>}
        </div>
        <div className="flex flex-row justify-start gap-2">
          <div className="flex flex-row items-center justify-center gap-1">
            <User size={12} color="gray" fill="black" />
            <a 
              href={repo.owner.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-primary flex-1"
            >
              {repo.owner.login}
            </a>
          </div>
          <div className="flex flex-row items-center justify-center gap-1">
            <Star size={12} color="gray" fill="gold" />
            <p className="text-xs text-gray-500 flex-1">Star: {repo.stargazers_count}</p>
          </div>
        </div>
        <p className="text-xs text-secondary">{repo.description}</p>
      </div>
    </div>
  )
}
