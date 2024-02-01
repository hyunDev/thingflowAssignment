//library
import styled from 'styled-components'
//component
import Header from '../components/Header'
// container
import IssueLoadBtnContainer from './IssueLoadBtnContainer'
import FooterContainer from './FooterContainer'

const HeaderLayout = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid lightgray;
`

const ListLayout = styled.div`
  width: 100%;
  height: calc(100% - 200px);
  overflow - y: auto;
  padding: 5px;
  border: 1px solid lightblue;
`

const FooterLayout = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid lightgreen;
`

const MainContainer: React.FC = () => {
  return (
    <div>
      <HeaderLayout>
        <Header title="Angular" subtitle="Angular-cli" />
      </HeaderLayout>
      <ListLayout>
        <IssueLoadBtnContainer />
      </ListLayout>
      <FooterLayout>
        <FooterContainer />
      </FooterLayout>
    </div>
  )
}

export default MainContainer
