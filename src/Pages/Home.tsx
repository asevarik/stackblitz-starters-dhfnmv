
import {useState} from "react";
import { ProfileCard, SearchBar } from "../Components";
import Apimanager from "../Manager/Apimanager";
import { GitHubUserModel } from "../Models/GithubUserModel";
import { GithubUserStore } from "../Store/GithubUserStore";
import { GithubSearchResultModel } from "../Models/GithubSearchResultModel";
function Home() {
  const [searchTerm,setSearchTerm] = useState<string>("");
  const [users,setUsers] = useState<[GitHubUserModel]>();
  const {getGithubResults,saveGithubResult} = GithubUserStore()
  const handleSubmit = ()=>{
    Apimanager(searchTerm).then((response)=>{
      if(response){
        const githubResult:GithubSearchResultModel ={searchTerm:searchTerm,
          results:response
        } 
        saveGithubResult(githubResult)
        setUsers(response)
      }  
    })

  }
  return (
    <div className='h-screen w-screen gap-10 flex flex-col justify-center items-center'>
    <section className="flex flex-col w-1/4 gap-4 items-start">   
       <h1 className="text-2xl font-bold text">Github Explorer</h1>
       <SearchBar onChange={setSearchTerm}/>
       <button className="btn w-full btn-neutral rounded-full" onClick={handleSubmit}>Search</button>
    </section>
    <section className="flex gap-5 flex-wrap">
      {users?.length && <>
        {users.map(user=><ProfileCard key={user.id} imgurl={user.avatar_url} username={user.login} userId={user.id.toString()} type={user.type} score={user.score}/> )}
      </>}
       </section>
    </div>
  )
}

export default Home