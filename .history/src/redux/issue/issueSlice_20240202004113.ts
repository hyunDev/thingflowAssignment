// library
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// service
import { getIssueList } from '../../service/issueService'
// type
import {
  requestType,
  issueType,
  issueData,
  issueArray,
} from '../../type/commonType'

const initialState: issueArray = {
  issueList: [],
}

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
    builder.addCase(fetchIssueList.fulfilled, (state, action) => {
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
