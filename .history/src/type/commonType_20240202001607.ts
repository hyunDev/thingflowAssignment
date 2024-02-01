export interface requestType {
  owner: string
  repos: string
  page: number
  perPage: number
}

export interface issueType {
  comments: string
  created_at: string
  number: string
  title: string
  user: string
}

export interface issueArray {
  issueList: issueType[]
}
