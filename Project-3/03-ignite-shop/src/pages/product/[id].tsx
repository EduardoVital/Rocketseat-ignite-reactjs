import Image from "next/image"
import { GetStaticPaths, GetStaticProps } from "next"
import { useContext } from "react";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import Head from "next/head";
import { CartShoppingContext } from "../../contexts/CartShoppingContext";

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string
    defaultPriceId: string
  }
}
interface ProductOnCart {
  id: string
  name: string
  imageUrl: string
  price: number
  description: string
  defaultPriceId: string
}

export default function Product({ product }: ProductProps) {
  const { selectProduct } = useContext(CartShoppingContext)

  function formatPrice (price: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price / 100) 
  }

  function handleAddToCartShopping(item: ProductOnCart) {
    const randomId = Math.floor(Math.random() *100)
    const newProduct = {...item, generatedId: randomId}
    selectProduct(newProduct)
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{formatPrice(product.price)}</span>

          <p>{product.description}</p>

          <button onClick={() => handleAddToCartShopping(product)}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'prod_NBis7P0ca3Gk52' } },
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params?.id;

  const product = await stripe.products.retrieve(productId!, {
    expand: ['default_price']
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount!,
        description: product.description,
        defaultPriceId: price.id,
      }
    },
    revalidate: 60 * 60 * 1 // 1 hours
  }
}
