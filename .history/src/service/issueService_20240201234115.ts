import axios from 'axios'

export const getIssueList = async (
  owner: string,
  repos: string,
  page: number,
  perPage: number
) => {
  const token = ''
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${owner}/${repos}/issues`,
      {
        params: {
          state: 'open',
          sort: 'comments',
          page: page,
          per_page: perPage,
        },
        /* headers: {
          Authorization: `Bearer ${token}`,
        }, */
      }
    )

    return response.data
  } catch (error) {
    console.error('API 요청 중 오류 발생: ', error)
    throw error
  }
}
