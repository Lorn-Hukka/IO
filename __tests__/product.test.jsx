import { render, screen } from '@testing-library/react'
import ProductCard from '@components/products/ProductCard'

describe('ProductCard', () => {

  const dummy_product = { 
    "id":1,
    "title":"Zestaw Kości do gry - HELLMAN",
    "description":"Zestaw Kości do gry marki HELLMAN. Wszystko czego możesz potrzebować, aby rozpocząć swoją przygodę z grami RPF.",
    "price":30,
    "slug":"zestaw-kosci-do-gry-hellman",
    "on_sale":true,
    "sale_price":10,
    "published_at":"2021-12-19T17:03:14.040Z",
    "created_at":"2021-12-19T16:59:36.102Z",
    "updated_at":"2022-01-02T02:12:14.554Z",
    "opinion":[],
    "images":[
      {
        "id":1, 
        "name":"0-1200x900-ffffff.jpg",
        "alternativeText":"",
        "caption":"",
        "width":900,
        "height":900,
        "formats":{ 
          "thumbnail":{
            "name":"thumbnail_0-1200x900-ffffff.jpg",
            "hash":"thumbnail_0_1200x900_ffffff_52e8e5f6b2",
            "ext":".jpg",
            "mime":"image/jpeg",
            "width":156,
            "height":156,
            "size":6.52,
            "path":null,
            "url":"/uploads/thumbnail_0_1200x900_ffffff_52e8e5f6b2.jpg"
          },
        },
        "hash":"0_1200x900_ffffff_52e8e5f6b2",
        "ext":".jpg",
        "mime":"image/jpeg",
        "size":92.63,
        "url":"/uploads/0_1200x900_ffffff_52e8e5f6b2.jpg",
        "previewUrl":null,
        "provider":"local",
        "provider_metadata":null,
        "created_at":"2021-12-19T17:00:21.586Z",
        "updated_at":"2021-12-19T17:00:21.595Z"
      }
    ]
  }

  it('Powinna posiadać heading który jest tytułem/nazwą produktu', () => {
    render(<ProductCard product={dummy_product} />)

    const heading = screen.getByRole('heading', {
      name: dummy_product.title,
    })

    expect(heading).toBeInTheDocument()
  });
  
})