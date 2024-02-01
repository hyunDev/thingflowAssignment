// library
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// service
import { getIssueList, getIssue } from '../../service/issueService'
// type
import { requestType, issueType, issueData } from '../../type/commonType'

interface issueState {
  issueList: issueType[]
  issueInfo: string
}
const initialState: issueState = {
  issueList: [],
  issueInfo: '',
}

interface issueInfoType {
  owner: string
  repos: string
  id: string
}

export const fetchIssue = createAsyncThunk(
  'issue/info',
  async ({ owner, repos, id }: issueInfoType) => {
    const issue = await getIssue(owner, repos, id)
    return issue
  }
)

export const fetchIssueList = createAsyncThunk(
  'issue/list',
  async ({ owner, repos, page, perPage }: requestType) => {
    const issueList = await getIssueList(owner, repos, page, perPage)
    return issueList
  }
)

const citySlice = createSlice({
  name: 'issue',
  initialState,
  reducers: {
    setIssueList: (state, action) => {
      state.issueList = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIssue.fulfilled, (state, action) => {
        state.issueInfo = action.payload
      })
      .addCase(fetchIssueList.fulfilled, (state, action) => {
        const issueList = action.payload.map((data: issueData) => ({
          id: data.id,
          comments: data.comments,
          created_at: data.created_at,
          number: data.number,
          title: data.title,
          user: data.user.login,
        }))
        state.issueList = [...state.issueList, ...issueList]
      })
  },
})

export default citySlice.reducer
