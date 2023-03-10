/* eslint-disable @next/next/no-img-element */
import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import CartShop  from "../components/CartShop/index"

import logoImg from "../assets/logo.svg"
import { Container, Header } from "../styles/pages/app"
import CartShoppingCotext from '../contexts/CartShoppingContext'

import Image from "next/image"

globalStyles()

function App({ Component, pageProps }: AppProps) {
  return (
    <CartShoppingCotext>
      <Container>
        <Header>
          <Image src={logoImg} alt="" />
          <CartShop />
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartShoppingCotext>
  )
}

export default App