// library
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// service
import { getIssueList } from '../../service/issueService'
// type
import { requestType } from '../../type/commonType'
interface issueType {
  title: string
}

const initialState: issueType = {
  title: '',
}
export const fetchIssueList = createAsyncThunk(
  'issue/list',
  async ({ owner, repos }: requestType) => {
    const issueList = await getIssueList(owner, repo)
    return issueList
  }
)

const citySlice = createSlice({
  name: 'issue',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIssueList.fulfilled, (state, action) => {
      state.title = action.payload
    })
  },
})

export default citySlice.reducer
