import axios from 'axios'

export const getIssueList = async () => {
  const response = await axios.get(
    'https://api.github.com/repos/angular/angular-cli/issues'
  )
  return response.data
}

const fetchIssueList = async (owner: string, repo: string, token: string) => {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/issues`,
      {
        params: {
          state: 'open',
          sort: 'comments',
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    return response.data
  } catch (error) {
    console.error('API 요청 중 오류 발생: ', error)
    throw error
  }
}
