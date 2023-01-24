export type FetchReposRequest = {
  page: number
  username: string
}

const TOKEN = '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'

export async function fetchRepos(req: FetchReposRequest): Promise<any> {
  const response = await fetch(`https://api.github.com/users/${req.username}/repos?page=${req.page}&per_page=10`, {
    method: 'GET',
    headers: {
      'Accept': 'application/vnd.github+json',
      'Authorization': `Bearer ${TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  })
  const result = await response.json()

  return result
}