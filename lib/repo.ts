export interface RepoItem {
  id: number
  name: string
  owner: Owner
  html_url: string
  description: string | null
  stargazers_count: number
  language: string | null
}

export interface Owner {
  id: number
  login: string
  avatar_url: string
  html_url: string
}

export type FetchReposByUsernameRequest = {
  page: number
  username: string
}

export async function fetchReposByUsername(request: FetchReposByUsernameRequest): Promise<RepoItem[]> {
  const response = await fetch(`https://api.github.com/users/${request.username}/repos?page=${request.page}&per_page=10`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github+json',
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })
  const result = await response.json()

  return result
}
