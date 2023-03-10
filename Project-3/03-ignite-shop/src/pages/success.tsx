import { GetServerSideProps } from "next";
import Image from "next/image"
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer, ImageSection } from "../styles/pages/success";
import Head from "next/head";

interface SuccessProps {
  costumerName: string;
  product: {
    imageUrl: string[];
  }
}

export default function Success({ costumerName, product }: SuccessProps) {
  const totalItems = product.imageUrl.length

  const camisetaText = product.imageUrl.length > 1 ? 'camisetas' : 'camiseta'

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ImageSection>
          {product.imageUrl.map(images => (
            <ImageContainer key={images}>
              <Image src={images} width={120} height={110} alt="" />
            </ImageContainer>
          ))}
        </ImageSection>

        <h1>Compra efetuada</h1>

        <p>
          Uhuul <strong>{costumerName}</strong>, sua compra de {totalItems} {camisetaText} já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
  
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const costumerName = session.customer_details?.name;
  const items = session.line_items?.data.map(items => items.price?.product as Stripe.Product);
  const images = items?.map(items => items.images[0])
  

  return {
    props: {
      costumerName,
      product: {
        imageUrl: images,
      }
    }
  }
}