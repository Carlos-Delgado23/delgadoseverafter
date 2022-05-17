import React from 'react'
import { NextSeo } from 'next-seo'

const Meta = () => {
  return (
    <>
      <NextSeo
        title='Carlos & Seanna'
        description='Carlos Delgado and Seanna M. Libby are getting Married on November 21, 2022!'
        openGraph={{
          url: 'https://www.opeweeloped.us',
          type: 'website',
          locale: 'en_IE',
          site_name: 'Carlos & Seanna',
          title: 'Home',
          description:
            'Carlos Delgado and Seanna M. Libby are getting Married on November 21, 2022!',
          images: [
            {
              url: '/img/kiss-trees.jpg',
              width: 1080,
              height: 1080,
              alt: 'Carlos Delgado and Seanna M. Libby',
              type: 'image/jpeg',
            },
          ],
          site_name: 'Delgado Wedding',
        }}
      />
    </>
  )
}
export default Meta
