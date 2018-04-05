import styled from 'styled-components'

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fontFamilySansSerif};
  font-size: ${({ theme }) => theme.h1FontSize};
  text-align: center;
`

export default Title
