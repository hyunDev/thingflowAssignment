// library
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
  const owner = 'angular'
  const repos = 'angular-cli'
  const onClick = () => {
    dispatch(fetchIssueList({ owner, repos }))
  }

  return (
    <div>
      <BasicButton title="issue 10개 로딩 시작" onClick={onClick} />
    </div>
  )
}

export default IssueLoadContainer
