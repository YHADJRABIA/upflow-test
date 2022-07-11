import { websiteUrl } from "@/utilities/general"
import Head from "next/head"
import { FC, ReactNode } from "react"

interface PropTypes {
  title: string
  description: string
  keywords?: string
  author?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  children?: ReactNode
}

const SEO: FC<PropTypes> = ({
  title,
  description,
  keywords,
  author,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  children,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author ?? "Yacine Hadj Rabia"} />

      {/* Open Graph */}

      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={
          ogImage ??
          "https://images.prismic.io/gocardless/00d748d8-ec98-4769-96c7-a78b4d0ec3a8_logo%406x.png?auto=compress,format"
        }
      />
      <meta property="og:url" content={ogUrl ?? websiteUrl} />
      {children}
    </Head>
  )
}

export default SEO
