export interface requestType {
  owner: string
  repos: string
  page: number
  perPage: number
}

export interface userInfo {
  login: string
}

export interface issueData {
  id: string
  comments: string
  created_at: string
  number: string
  title: string
  user: userInfo
}

export interface issueType {
  id: string
  comments: string
  created_at: string
  number: string
  title: string
  user: string
}

export interface issueArray {
  issueList: issueType[]
}
