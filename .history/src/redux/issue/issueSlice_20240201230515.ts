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
export const fetchFirstSelectOptions = createAsyncThunk(
  'issue/list',
  async () => {
    const issueList = await getIssueList()
    return issueList
  }
)

const citySlice = createSlice({
  name: 'issue',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFirstSelectOptions.fulfilled, (state, action) => {
      state.firstSelectOptions = action.payload
    })
  },
})

export default citySlice.reducer
