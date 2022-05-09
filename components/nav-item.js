import { Box, Link, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const StyledLink = styled(Link)`
  &.active {
    box-shadow: ${props =>
      props.darkMode ? '0px -2px #ffffff' : '0px -2px gray'};
  }
  box-shadow: 0px -1px #33333333;
`

export const NavItem = ({ children, href }) => {
  const router = useRouter()
  const { pathname } = router
  const active = pathname === href
  return (
    <Box cursor="pointer">
      <NextLink href={href}>
        <StyledLink
          colorScheme="whiteAlpha"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column-reverse"
          className={active ? 'active' : ''}
          py={4}
          darkMode={useColorModeValue(0, 1)}
        >
          {children}
        </StyledLink>
      </NextLink>
    </Box>
  )
}
