import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
const Footer = () => {
    return (
      <footer class="text-center text-lg-start bg-body-tertiary text-muted">
      {/* <!-- Section: Social media --> */}
      
      {/* <!-- Section: Social media -->
    
      <!-- Section: Links  --> */}
      <section class="">
        <div class="container text-center text-md-start mt-5">
          {/* <!-- Grid row --> */}
          <div class="row mt-3">
            {/* <!-- Grid column --> */}
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* <!-- Content --> */}
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            {/* <!-- Grid column --> */}
    
            {/* <!-- Grid column --> */}
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 class="text-uppercase fw-bold mb-4">
                Products
              </h6>
              {/* <p>
                <a href="/embed" class="text-reset">Embbed</a>
              </p>
              <p>
                <a href="/extract" class="text-reset">Extract</a>
              </p>
              <p>
                <a href="/image" class="text-reset">Images</a>
              </p> */}
              <p>
                <a href="/pricing" class="text-reset">Pricing</a>
              </p>
            </div>
            
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* <!-- Links --> */}
              <h6 class="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="/career" class="text-reset">Career</a>
              </p>
              <p>
                <a href="/about" class="text-reset">About</a>
              </p>
             
              <p>
                <a href="/help" class="text-reset">Help</a>
              </p>
            </div>
           
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i class="fas fa-home me-3"></i> Pune, PN 411007, IN</p>
              <p>
                <i class="fas fa-envelope me-3"></i>
                kakadeneha6990@gamil.com
              </p>
              <p><i class="fas fa-phone me-3"></i> +91 87677 56446</p>

            </div>
           
          </div>
         
        </div>
      </section>
      
      <div class="text-center p-4" >
        © 2024 Copyright:
        <a class="text-reset fw-bold" href="/">www.stegno.com</a>
      </div>
     
    </footer>
   
      );
    };
    

    
    export default Footer;
