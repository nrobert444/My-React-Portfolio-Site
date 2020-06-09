import React from 'react'
import { ContainerStyle } from './Container.style'

export const Container = props => {
  return <ContainerStyle>{props.children}</ContainerStyle>
}
