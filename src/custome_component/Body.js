import React from 'react'

export default function Body() {
  return (
    <>
     <section className="section-1">
      <div className="section-1-container">
        <div className="section-1-column">
          <h3>Top picks for your home</h3>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg"
            alt=""
          />
          <p>See more</p>
        </div>
        <div className="section-1-column">
          <h3>Top rated, premium quality | Amazon Brands & more</h3>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_Softlines_QC_2X_V2_5._SY232_CB636581721_.jpg"
            alt=""
          />
          <p>See more</p>
        </div>
        <div className="section-1-column">
          <h3>Shop & Pay | Earn rewards daily</h3>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_2x._SY608_CB628315133_.jpg"
            alt=""
          />
          <p>See more</p>
        </div>
        <div className="section-1-column">
          <h3>Sign in for your best experience</h3>
          <button>Sign in securely</button>
        </div>
      </div>
    </section>

    {/* <!-- SECTION 2 - Related Items --> */}
    <section className="section-2">
      <div className="section-2-container">
        <h3>Related to items you've viewed</h3>
        <div className="product-cards">
          <div className="product-card">
            <img
              src="https://m.media-amazon.com/images/I/61Y30DpqRVL._AC_SY400_.jpg"
              alt=""
            />
          </div>
          <div className="product-card">
            <img
              src="https://m.media-amazon.com/images/I/61LNnZPoKPS._AC_SY400_.jpg"
              alt=""
            />
          </div>
          <div className="product-card">
            <img
              src="https://m.media-amazon.com/images/I/71iiXU7HHkL._AC_SY400_.jpg"
              alt=""
            />
          </div>
          <div className="product-card">
            <img
              src="https://m.media-amazon.com/images/I/61XZQXFQeVL._AC_SY400_.jpg"
              alt=""
            />
          </div>
          <div className="product-card">
            <img
              src="https://m.media-amazon.com/images/I/712B4P3yOnL._AC_SY400_.jpg"
              alt=""
            />
          </div>
          <div className="product-card">
            <img
              src="https://m.media-amazon.com/images/I/51eTOVYRbTL._AC_SY400_.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
{/* 
    <!-- SECTION 2 - Groceries --> */}
    <section className="section-2">
      <div className="section-2-container">
        <h3>Best Sellers in Grocery & Gourmet Foods</h3>
        <div className="product-cards">
          <div className="product-card">
            <img
              src="https://m.media-amazon.com/images/I/617tvTiZLGL._AC_SY400_.jpg"
              alt=""
            />
          </div>
          <div className="product-card">
            <img
              src="https://m.media-amazon.com/images/I/51tNket0w8L._AC_SY400_.jpg"
              alt=""
            />
          </div>
          <div className="product-card">
            <img
              src="https://m.media-amazon.com/images/I/91oNY+gNzPL._AC_SY400_.jpg"
              alt=""
            />
          </div>
          <div className="product-card">
            <img
              src="https://m.media-amazon.com/images/I/81NrftYFxsL._AC_SY400_.jpg"
              alt=""
            />
          </div>
          <div className="product-card">
            <img
              src="https://m.media-amazon.com/images/I/61uohjMdfzL._AC_SY400_.jpg"
              alt=""
            />
          </div>
          <div className="product-card">
            <img
              src="https://m.media-amazon.com/images/I/61oagbcgAtS._AC_SY400_.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
{/* 
    <!-- SECTION 3 --> */}
    <section className="section-3">
      <section className="section-3-container">
        <h3>Inspired by your browsing history</h3>
        <div className="product-detail-cards">
          <div className="product-detail-card">
            <div className="product-detail-img">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/I/61aUBxqc5PL._AC_UL320_SR320,320_.jpg"
                alt=""
              />
            </div>
            <a className="product-detail-link" href="./product.html"
              >2021 Apple MacBook Pro (16-inch//41.05 cm, Apple M1 Max chip with
              10‑core CPU and 32‑core GPU, 32GB RAM, 1TB SSD) - Space Grey</a
            >
            <p>
              <strong className="product-price">₹ 3,99,999.00</strong>
            </p>
            <p className="product-deliver-by">
              Get it by <strong>Monday, August 22</strong>
              FREE Delivery over ₹499. Fulfilled by Amazon.
            </p>
          </div>
          <div className="product-detail-card">
            <div className="product-detail-img">
              <img
                src="https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY436_FMwebp_QL65_.jpg"
                alt=""
              />
            </div>
            <a className="product-detail-link" href="./product.html"
              >2021 Apple MacBook Pro (16-inch//41.05 cm, Apple M1 Max chip with
              10‑core CPU and 32‑core GPU, 32GB RAM, 1TB SSD) - Space Grey</a
            >
            <p>
              <strong className="product-price">₹ 3,99,999.00</strong>
            </p>
            <p className="product-deliver-by">
              Get it by <strong>Monday, August 22</strong>
              FREE Delivery over ₹499. Fulfilled by Amazon.
            </p>
          </div>
          <div className="product-detail-card">
            <div className="product-detail-img">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/I/61LNnZPoKPS._AC_UL320_SR320,320_.jpg"
                alt=""
              />
            </div>
            <a className="product-detail-link" href="./product.html"
              >2021 Apple MacBook Pro (16-inch//41.05 cm, Apple M1 Max chip with
              10‑core CPU and 32‑core GPU, 32GB RAM, 1TB SSD) - Space Grey</a
            >
            <p>
              <strong className="product-price">₹ 3,99,999.00</strong>
            </p>
            <p className="product-deliver-by">
              Get it by <strong>Monday, August 22</strong>
              FREE Delivery over ₹499. Fulfilled by Amazon.
            </p>
          </div>
          <div className="product-detail-card">
            <div className="product-detail-img">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/I/71hmqIQJFdL._AC_UL320_SR320,320_.jpg"
                alt=""
              />
            </div>
            <a className="product-detail-link" href="./product.html"
              >2021 Apple MacBook Pro (16-inch//41.05 cm, Apple M1 Max chip with
              10‑core CPU and 32‑core GPU, 32GB RAM, 1TB SSD) - Space Grey</a
            >
            <p>
              <strong className="product-price">₹ 3,99,999.00</strong>
            </p>
            <p className="product-deliver-by">
              Get it by <strong>Monday, August 22</strong>
              FREE Delivery over ₹499. Fulfilled by Amazon.
            </p>
          </div>
          <div className="product-detail-card">
            <div className="product-detail-img">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/I/71eknZxZLmL._AC_UL320_SR320,320_.jpg"
                alt=""
              />
            </div>
            <a className="product-detail-link" href="./product.html"
              >2021 Apple MacBook Pro (16-inch//41.05 cm, Apple M1 Max chip with
              10‑core CPU and 32‑core GPU, 32GB RAM, 1TB SSD) - Space Grey</a
            >
            <p>
              <strong className="product-price">₹ 3,99,999.00</strong>
            </p>
            <p className="product-deliver-by">
              Get it by <strong>Monday, August 22</strong>
              FREE Delivery over ₹499. Fulfilled by Amazon.
            </p>
          </div>
          <div className="product-detail-card">
            <div className="product-detail-img">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/I/91k86Cdp1uL._AC_UL320_SR320,320_.jpg"
                alt=""
              />
            </div>
            <a className="product-detail-link" href="./product.html"
              >2021 Apple MacBook Pro (16-inch//41.05 cm, Apple M1 Max chip with
              10‑core CPU and 32‑core GPU, 32GB RAM, 1TB SSD) - Space Grey</a
            >
            <p>
              <strong className="product-price">₹ 3,99,999.00</strong>
            </p>
            <p className="product-deliver-by">
              Get it by <strong>Monday, August 22</strong>
              FREE Delivery over ₹499. Fulfilled by Amazon.
            </p>
          </div>
        </div>
      </section>
    </section>
    
    </>
  )
}
