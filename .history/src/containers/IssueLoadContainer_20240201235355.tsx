// library
import { useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

//component
import BasicButton from '../components/BasicButton'
import { RootState } from '../redux/store'
// slice
import { fetchIssueList } from '../redux/issue/issueSlice'
// type
import { requestType } from '../type/commonType'

const IssueLoadContainer: React.FC = () => {
  const dispatch = useDispatch()
  const { issueList } = useSelector((state: RootState) => state.issue)
  const owner = 'angular'
  const repos = 'angular-cli'
  let page = useRef<number>(1)
  const perPage = 10

  const onClick = () => {
    dispatch(fetchIssueList({ owner, repos, page: page.current, perPage }))
    page.current++
  }

  return (
    <div>
      <BasicButton title="issue 10개 로딩 시작" onClick={onClick} />
    </div>
  )
}

export default IssueLoadContainer
