import { GitHubUserModel } from "./GithubUserModel";

export interface GithubSearchResultModel{
    searchTerm: string;
    results:[GitHubUserModel]
}