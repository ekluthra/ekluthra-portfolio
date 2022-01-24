import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hey 👋 I'm Ekagra
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ekagra Luthra
          </Heading>
          <p> Computer Science @ University of Toronto </p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
