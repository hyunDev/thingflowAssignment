import axios from 'axios'

export const getIssueList = async (owner: string, repos: string) => {
  const token = ''
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${owner}/${repos}/issues`,
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
