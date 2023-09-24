import axios from "axios";
import { GitHubUserModel } from "../Models/GithubUserModel";

async function ApiManager(query:string) {
    try{
   const result = await axios.get(`${process.env.REACT_APP_BASE_URL}search/users?q=${query}&per_page=3`,{headers:{
    Accept:'application/vnd.github+json',
    Authorization: 'Bearer ' + process.env.REACT_APP_GITHUB_TOKEN,
    'X-GitHub-Api-Version':'2022-11-28'
   }})
   return result.data.items as [GitHubUserModel]
}catch(err){
  console.log("ERROR Occured",err);
  
}
}

export default ApiManager
