import { Header } from '../../../widgets/Header'
import { Container } from '@mui/material'
import { VisitCard } from '../../../widgets/VisitCard/ui/VisitCard'

function MainPage() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <VisitCard />
      </Container>
    </>
  )
}

export default MainPage
