import React from 'react'
import HeaderSub from '../../components/HeaderSub/HeaderSub'
import { Footer } from '../../components/Footer/Footer'
import { ItemsContainer, Item, ItemImage, ItemText, ItemTextWrap } from './Work.styles'
import { Container } from '../../components/Container/Container'
import {
  BottomLine,
  SectionTitle,
  Lead
} from '../../components/Container/Container.style'

export const Work = () => {
  return (
    <div>
      <HeaderSub />

      <section className='text-center py-3'>
        <Container>
          <SectionTitle>My Work</SectionTitle>
          <BottomLine />
          <Lead>Check out some of my projects</Lead>
          <ItemsContainer>
            <Item>
              <ItemImage>
                <img src='img/items/item1.png' alt='' />
              </ItemImage>
              <ItemText>
                <ItemTextWrap>
                  <p className='item-text-category'>Design</p>
                  <h2 className='item-text-title'>Great Gradients</h2>
                </ItemTextWrap>
              </ItemText>
            </Item>
            <Item>
              <ItemImage>
                <img src='img/items/item2.png' alt='' />
              </ItemImage>
              <ItemText>
                <ItemTextWrap>
                  <p className='item-text-category'>UI/UX</p>
                  <h2 className='item-text-title'>World Experience</h2>
                </ItemTextWrap>
              </ItemText>
            </Item>
            <Item>
              <ItemImage>
                <img src='img/items/item3.png' alt='' />
              </ItemImage>
              <ItemText>
                <ItemTextWrap>
                  <p className='item-text-category'>Photography & Design</p>
                  <h2 className='item-text-title'>Vanishing</h2>
                </ItemTextWrap>
              </ItemText>
            </Item>
            <Item>
              <ItemImage>
                <img src='img/items/item4.png' alt='' />
              </ItemImage>
              <ItemText>
                <ItemTextWrap>
                  <p className='item-text-category'>Design</p>
                  <h2 className='item-text-title'>Gap INC</h2>
                </ItemTextWrap>
              </ItemText>
            </Item>
            <Item>
              <ItemImage>
                <img src='img/items/item5.png' alt='' />
              </ItemImage>
              <ItemText>
                <ItemTextWrap>
                  <p className='item-text-category'>Mobile UI Design</p>
                  <h2 className='item-text-title'>Face THe Experience</h2>
                </ItemTextWrap>
              </ItemText>
            </Item>
            <Item>
              <ItemImage>
                <img src='img/items/item6.png' alt='' />
              </ItemImage>
              <ItemText>
                <ItemTextWrap>
                  <p className='item-text-category'>Design Concept</p>
                  <h2 className='item-text-title'>Bezier Curves</h2>
                </ItemTextWrap>
              </ItemText>
            </Item>
            <Item>
              <ItemImage>
                <img src='img/items/item7.png' alt='' />
              </ItemImage>
              <ItemText>
                <ItemTextWrap>
                  <p className='item-text-category'>Photography</p>
                  <h2 className='item-text-title'>Dock Ponder</h2>
                </ItemTextWrap>
              </ItemText>
            </Item>
            <Item>
              <ItemImage>
                <img src='img/items/item8.png' alt='' />
              </ItemImage>
              <ItemText>
                <ItemTextWrap>
                  <p className='item-text-category'>Web Applications</p>
                  <h2 className='item-text-title'>Restaurant App</h2>
                </ItemTextWrap>
              </ItemText>
            </Item>
            <Item>
              <ItemImage>
                <img src='img/items/item9.png' alt='' />
              </ItemImage>
              <ItemText>
                <ItemTextWrap>
                  <p className='item-text-category'>Social Network Concept</p>
                  <h2 className='item-text-title'>FriendFeed</h2>
                </ItemTextWrap>
              </ItemText>
            </Item>
          </ItemsContainer>
        </Container>
      </section>

      <Footer />
    </div>
  )
}
