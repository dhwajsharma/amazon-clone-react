import React from 'react'
import Product from '../Product/Product'
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

            <div className="home_row">
                <Product
                    id={12321341}
                    title="Morning Berries"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41i7sZXMySL.__AC_SY400_.jpg"
                />
                <Product
                    id={12321342}
                    title="Morning Berries"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41i7sZXMySL.__AC_SY400_.jpg"
                />
            </div>

            <div className="home_row">
                <Product
                    id={12321343}
                    title="Morning Berries"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41i7sZXMySL.__AC_SY400_.jpg"
                />
                <Product
                    id={12321344}
                    title="Morning Berries"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41i7sZXMySL.__AC_SY400_.jpg"
                />
                <Product
                    id={12321345}
                    title="Morning Berries"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41i7sZXMySL.__AC_SY400_.jpg"
                />
            </div>

            <div className="home_row">
                <Product
                    id={12321346}
                    title="Morning Berries"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41i7sZXMySL.__AC_SY400_.jpg"
                />
            </div>

        </div>
    )
}

export default Home
