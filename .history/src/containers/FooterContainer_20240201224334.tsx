// library
import styled from 'styled-components'
// component
import BasicButton from '../components/BasicButton'

const Layout = styled.div`
  display: flex;
`
const FooterContainer: React.FC = () => {
  return (
    <Layout>
      <BasicButton title="load" />
      <BasicButton title="초기화" />
    </Layout>
  )
}

export default FooterContainer
