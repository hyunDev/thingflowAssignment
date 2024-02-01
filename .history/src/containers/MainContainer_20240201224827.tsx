//library
import styled from 'styled-components'
//component
import Header from '../components/Header'
// container
import IssueLoadBtnContainer from './IssueLoadBtnContainer'
import FooterContainer from './FooterContainer'

const MainLayout = styled.div`
  display: block;
  position: relative;
`
const HeaderLayout = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
`

const ListLayout = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  overflow-y: auto;
  padding: 5px;
  border: 1px solid lightblue;
`

const FooterLayout = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgreen;
`

const MainContainer: React.FC = () => {
  return (
    <MainLayout>
      <HeaderLayout>
        <Header title="Angular" subtitle="Angular-cli" />
      </HeaderLayout>
      <ListLayout>
        <IssueLoadBtnContainer />
      </ListLayout>
      <FooterLayout>
        <FooterContainer />
      </FooterLayout>
    </MainLayout>
  )
}

export default MainContainer
