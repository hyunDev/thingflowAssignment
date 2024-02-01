export interface requestType {
  owner: string
  repos: string
  page: number
  perPage: number
}

export interface userInfo {
  login: string
}
export interface issueType {
  comments: string
  created_at: string
  number: string
  title: string
  user: userInfo
}

export interface issueArray {
  issueList: issueType[]
}
