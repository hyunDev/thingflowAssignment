//component
import Header from '../components/Header'
// container
import IssueLoadBtnContainer from './IssueLoadBtnContainer'

const MainContainer: React.FC = () => {
  return (
    <div>
      <Header title="Angular" subtitle="Angular-cli" />
      <IssueLoadBtnContainer />
    </div>
  )
}

export default MainContainer
