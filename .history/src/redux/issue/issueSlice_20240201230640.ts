// library
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// service
import { getIssueList } from '../../service/issueService'

interface issueType {
  title: string
}
const initialState: issueType = {
  title: '',
}
export const fetchIssueList = createAsyncThunk('issue/list', async () => {
  const issueList = await getIssueList()
  return issueList
})

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
