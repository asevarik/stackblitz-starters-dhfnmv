import { create } from "zustand";
import { GithubSearchResultModel } from "../Models/GithubSearchResultModel";
import { GITHUB_RESULTS } from "../utils/contstants";


export const getGithubUserResults = (): GithubSearchResultModel[] => {
    let result = localStorage.getItem(GITHUB_RESULTS)
    if (result) {
        return JSON.parse(result)
    }
    return []
}


interface IGithubUserStore {
    getGithubResults: GithubSearchResultModel[]
    saveGithubResult: (newContent: GithubSearchResultModel) => void;
}
export const GithubUserStore = create<IGithubUserStore>()((set) => ({
    getGithubResults: getGithubUserResults(),
    saveGithubResult: (newSearchResult: GithubSearchResultModel) => {
        set((state) => {
            const result = [...state.getGithubResults,newSearchResult]
            localStorage.setItem(GITHUB_RESULTS,JSON.stringify(result))
            return {
                getGithubResults: [...state.getGithubResults, newSearchResult]
            }
        })
    }
}
)
)