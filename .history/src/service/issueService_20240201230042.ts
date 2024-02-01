import axios from 'axios'

export const getIssueList = async () => {
  const response = await axios.get(
    'https://api.github.com/repos/angular/angular-cli/issues'
  )
  return response.data
}
