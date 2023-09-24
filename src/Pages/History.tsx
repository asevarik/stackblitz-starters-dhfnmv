import React from 'react'
import { TableView } from '../Components'
import { GithubUserStore } from '../Store/GithubUserStore'

function History() {
  const {getGithubResults,saveGithubResult} = GithubUserStore()
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <TableView searchResults={getGithubResults} />
    </div>
  )
}

export default History