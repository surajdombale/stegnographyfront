import React from 'react'
import "./Pricing.css"
import { useSelector } from 'react-redux';
const Pricing = () => {
  const isLoggedIn = useSelector((state) => state);
    const myStyles = {
        visibility: 'visible',
        animationDelay: '0.2s',
        animationName: 'fadeInUp',
      };
  return (
    <body2>
      <link rel="stylesheet" href="https://cdn.lineicons.com/3.0/lineicons.css"/> 
<section class="price_plan_area section_padding_130_80" id="pricing">
      <div class="containe">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-8 col-lg-6">
            {/* <!-- Section Heading--> */}
            <div class="section-heading text-center wow fadeInUp" data-wow-delay="0.2s" style={myStyles}>
              <h6>Subscription Plans</h6>
              <h3>Let's find a way together</h3>
              {/* <p>Appland is completely creative, lightweight, clean &amp; super responsive app landing page.</p> */}
              <div class="line"></div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          {/* <!-- Single Price Plan Area--> */}
          <div class="col-12 col-sm-8 col-md-6 col-lg-4">
            <div class="single_price_plan wow fadeInUp" data-wow-delay="0.2s" style={myStyles}>
              <div class="title">
                <h3>Start Up</h3>
                <p>Start a trial</p>
                <div class="line"></div>
              </div>
              <div class="price">
                <h4>$0</h4>
              </div>
              <div class="description">
                <p><i class="lni lni-checkmark-circle"></i>Duration: Unlimited</p>
                
                <p><i class="lni lni-close"></i>6 Embed per week</p>
                <p><i class="lni lni-close"></i>6 Etract per week</p>
                <p><i class="lni lni-close"></i>No Seen feature</p>
              </div>
              <div ><a class="btn btn-success btn-2" href="/">Get Started</a></div>
            </div>
          </div>
          {/* <!-- Single Price Plan Area--> */}
          <div class="col-12 col-sm-8 col-md-6 col-lg-4">
            <div class="single_price_plan active wow fadeInUp" data-wow-delay="0.2s" style={myStyles}>
              {/* <!-- Side Shape--> */}
              <div class="side-shape"><img src="https://bootdey.com/img/popular-pricing.png" alt=""/></div>
              <div class="title"><span>Popular</span>
                <h3>Small Business</h3>
                <p>For Small Business Team</p>
                <div class="line"></div>
              </div>
              <div class="price">
                <h4>$9.99</h4>
              </div>
              <div class="description">
                <p><i class="lni lni-checkmark-circle"></i>Duration: 1 Month</p>
                <p><i class="lni lni-checkmark-circle"></i>Unlimited Embed</p>
               
                <p><i class="lni lni-checkmark-circle"></i>Unlimited Extract</p>
                <p><i class="lni lni-checkmark-circle"></i>Seen Feature</p>
              
              </div>
              <div >{isLoggedIn.subscribe?<a class="btn btn-warning" href="/">Get Started</a>:<a class="btn btn-warning" href="/payment">Get Started</a>}
            </div></div>
          </div>
          
        </div> 
      </div>
    </section>
    </body2>
  )
}

export default Pricing
