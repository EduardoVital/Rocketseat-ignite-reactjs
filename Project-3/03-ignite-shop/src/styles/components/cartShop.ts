import { relative } from "path";
import { styled } from "..";

export const CartShopBox = styled('div', {
  width: '48px',
  height: '48px',
  backgroundColor: '$gray800',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '6px',
  cursor: 'pointer',
  position: 'relative',
})

export const NumberOfItems = styled('span', {
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$green500',
  color: '$white',
  position: 'absolute',
  top: '-7px',
  right: '-7px',
  border: '2px solid $gray900'
})