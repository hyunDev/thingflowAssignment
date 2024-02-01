// library
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// service
import { getIssueList } from '../../service/issueService'
// type
import { requestType, issue } from '../../type/commonType'
interface issueType {
  title: string
}

interface issueState {
  issueList: issue[]
}

const initialState: issueState = {
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
      state.issueList.push(action.payload)
    })
  },
})

export default citySlice.reducer
