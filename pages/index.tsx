import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/hooks'
import { selectRepoState, fetchStart, fetchSucceed, fetchFailed } from '@/features/repos/repoSlice'
import { fetchReposByUsername } from '@/lib/repo'

const username = 'ilhamgunawan'

type Props = {
  page: number
}

export default function Home({ page }: Props) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchStart())

    fetchReposByUsername({ page, username })
      .then(result => dispatch(fetchSucceed(result.data)))
      .catch(reason => dispatch(fetchFailed()))

  }, [page])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello wordl!</h1>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = context.query.page as string ?? '1'

  return {
    props: {
      page: parseInt(page)
    }
  }
}
