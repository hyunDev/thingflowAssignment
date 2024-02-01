export interface requestType {
  owner: string
  repos: string
  page: number
  perPage: number
}

export interface issueType {
  title: string
  contents: string
}

export interface issueArray {
  issueList: issueType[]
}
