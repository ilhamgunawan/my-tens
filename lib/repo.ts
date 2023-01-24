import { Octokit } from "octokit";
import { OctokitResponse } from '@octokit/types'

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

const octokit = new Octokit({ auth: process.env.NEXT_PUBLIC_TOKEN });

export type FetchReposResponse = RepoItem[]

export async function fetchReposByUsername(request: FetchReposByUsernameRequest): Promise<OctokitResponse<FetchReposResponse, number>> {
  return octokit.request(`GET /users/${request.username}/repos?page=${request.page}&per_page=10`, {
    username: request.username
  })
}
