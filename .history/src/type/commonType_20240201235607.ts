export interface requestType {
  owner: string
  repos: string
  page: number
  perPage: number
}

export interface issue {
  title: string
  contents: string
}
