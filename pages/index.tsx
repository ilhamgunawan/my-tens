/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import RepoCard from '@/components/RepoCard'
import Pagination from '@/components/Pagination'
import Info from '@/components/Info'
import InputUsername from '@/components/InputUsername'
import { GetServerSideProps } from 'next'
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/hooks'
import { selectRepoState, fetchStart, fetchSucceed, fetchFailed } from '@/features/repos/repoSlice'
import { fetchReposByUsername } from '@/lib/repo'

const title = 'Public GitHub Repository'
const defaultUsername = 'ilhamgunawan'

type Props = {
  page: number
  username: string
}

export default function Home({ page, username }: Props) {
  const dispatch = useAppDispatch()
  const state = useAppSelector(selectRepoState)

  useEffect(() => {
    dispatch(fetchStart())

    fetchReposByUsername({ page, username })
      .then(result => dispatch(fetchSucceed(result.data)))
      .catch(reason => dispatch(fetchFailed()))

  }, [page, username])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-2xl min-h-screen m-auto p-2">
        <h1 className="font-bold text-lg text-gray-700">{title}</h1>
        <InputUsername username={username} />
        {state.status === 'loading'
          ? <div className="flex items-center justify-center p-5">
              <img className="w-18 h-18" src='/spinner.svg' alt="Loading" />
            </div>
          : null
        }
        {state.status === 'success' && state.data.length > 0
          ? <div className="flex flex-col gap-3">
            {state.data.map((repo) => 
              <RepoCard key={repo.id} repo={repo} />
            )}
            </div>
          : null
        }
        {state.status === 'success' && state.data.length === 0
          ? <Info message="No records found." />
          : null
        }
        {state.status === 'failed'
          ? <Info message="Something went wrong. Please refresh the page." />
          : null
        }
        <Pagination currentPage={page} username={username} />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = context.query.page as string ?? '1'
  const username = context.query.username as string ?? defaultUsername

  return {
    props: {
      page: parseInt(page),
      username,
    }
  }
}
