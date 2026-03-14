import React from 'react'

import Content from '../components/Content'
import Pricing from '../components/Pricing'
import Step from '../components/Step'
import Testimonial from '../components/Testimonial'

import Hero from '../components/Hero'
function Home() {
    return (
        <div>

            <Hero />
            <Testimonial />
            <Pricing />
            <Step />
            <Content />

        </div>
    )
}

export default Home
