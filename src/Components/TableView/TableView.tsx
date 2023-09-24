import React from 'react'
import { GitHubUserModel } from '../../Models/GithubUserModel';
import ProfileCard from '../ProfileCard';
import { GithubSearchResultModel } from '../../Models/GithubSearchResultModel';
interface ITableViewProps{
   searchResults:GithubSearchResultModel[]
}
function TableView({searchResults}:ITableViewProps) {
  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table table-pin-rows">
    {/* head */}
    <thead>
      <tr>
        <th className='text-2xl table-pin-rows'>Search Term</th>
        <th className='text-2xl table-pin-rows'>Search Reults</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
        {searchResults.map((searchResult,index)=>{
            return <tr key={index}>
                <td className='text-xl capitalize'>{searchResult.searchTerm}</td>
                {searchResult.results.map((user)=>
                <td>
                <div className='flex gap-2 '>
                    <ProfileCard key={user.id} imgurl={user.avatar_url} username={user.login} userId={user.id.toString()} type={user.type} score={user.score}/>
                </div>
                </td>
                )}
            </tr>
        })}
    </tbody>
  </table>
</div>
    </div>
  )
}

export default TableView
