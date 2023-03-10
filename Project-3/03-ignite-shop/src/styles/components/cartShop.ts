import { relative } from "path";
import { styled } from "..";

export const CartShopBox = styled('button', {
  width: '48px',
  height: '48px',
  backgroundColor: '$gray800',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '6px',
  cursor: 'pointer',
  position: 'relative',
  border: 'unset',
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

export const DrawerContainer = styled('div', {
  width: '480px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100vh',

  '.container': {
    header: {
      display: 'flex',
      justifyContent: 'end',
      padding: '24px',
  
      img: {
        cursor: 'pointer',
      }
    },
  
    h2: {
      fontSize: '1.25rem',
      paddingLeft: '48px'
    },
  
    '.itemBox': {
      padding: '0 48px',
      margin: '32px 0 24px 0',
      display: 'flex',
  
      '&--image': {
        with: '100px',
        marginRight: '20px',
        background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
        borderRadius: 8,
  
        img: {
          width: '100px',
          height: '93px'
        },
      },
  
      '&--infos': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
  
        a: {
          color: '$green500',
          fontWeight: '700',
          cursor: 'pointer',
        },
      },
    }
  },

  footer: {
    padding: '48px',

    div: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '7px',

      '.strong-fontSize': {
        fontSize: '24px'
      }
    },

    button: {
      marginTop: '57px',
      backgroundColor: '$green500',
      width: '386px',
      padding: '20px 124px',
      border: 'unset',
      color: '$white',
      fontWeight: '700',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '18px',
    }
  }
})

export const CartShopContainer = styled('div', {
  '.EZDrawer .EZDrawer__container': {
    backgroundColor: '$gray800'
  }
})

export const ContainerItem = styled('div', {
  height: '560px',
  overflow: 'auto',

  '&::-webkit-scrollbar': {
    display: 'none'
  }
  
})