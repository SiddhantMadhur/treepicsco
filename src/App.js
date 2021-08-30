import React from 'react';
import './App.css';


function App() {
  return (
    <div style={{
      padding: '20px'
    }}>
      <div class='text-center head' style={{
        padding: '70px'
      }}>
        <div style={{
          maxWidth: '60%',
          margin: 'auto',
          paddingLeft: 'auto',
          paddingRight: 'auto'
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M388.2 124.6C378.6 59.7 323.4 11 256 11c-67.4 0-122.6 48.7-132.2 113.6-40.9 11.6-70 48.9-70 92.9 0 53.2 43.3 96.6 96.6 96.6 19 0 37.2-5.5 52.8-15.8 9.9 6.5 20.9 11.1 32.4 13.6v168.7c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V311.8c11.5-2.5 22.5-7.1 32.4-13.6 15.6 10.3 33.8 15.8 52.8 15.8 53.2 0 96.6-43.3 96.6-96.6 0-43.9-29.1-81.3-70-92.8zm-26.5 148.6c-14.5 0-28.2-5.6-38.7-15.7-4-3.8-17.1-10.2-28.3 0-10.8 9.8-24.2 15.7-38.6 15.7-14.5 0-28.2-5.6-38.6-15.7-7.9-7.6-20.4-7.6-28.4 0-10.5 10.1-24.2 15.7-38.7 15.7-30.7 0-55.7-25-55.7-55.7 0-28.8 21.6-52.6 50.1-55.4 10.2-1 18.1-9.5 18.4-19.8 1.4-50.7 42.1-90.4 92.9-90.4 50.7 0 91.5 39.7 92.9 90.4.3 10.3 8.2 18.8 18.4 19.8 28.6 2.8 50.1 26.7 50.1 55.4-.1 30.7-25.1 55.7-55.8 55.7z"></path>
          </svg>

        </div>
        <h1>Tree Pics & Co</h1>
      </div>
      <br></br>
      <div style={{
        maxWidth: '800px',
        margin: 'auto',
        paddingLeft: 'auto',
        paddingRight: 'auto'
      }}>
        <h3 class='text-center' >
          Welcome to the official site for TreePicsCo
        </h3>
        <h4 class='text-center '>
          The website is a work in progress. Please visit later.
        </h4>
      </div>


      <FooterNav />
    </div>

  );
}


const FooterNav = () => {
  return (
    <div id="foot" class='navbar fixed-bottom navbar-text'  style={{
      fontSize: '0.9rem'
    }}>
      <footer class="page-footer font-small blue pt-4">


        <div class="container-fluid text-center text-md-left">


          <div class="row">

            <div class="col-md-6 mt-md-0 mt-3">

              <h5 class="text-uppercase">About Us</h5>
              <p>TreePicsCo is the world's leading news publication, offering highly acclaimed, universally revered coverage of breaking nation, internation and local tree related news events.Rising from its humble beginnings as a print newspaper in 1756, TreePicsCo now enjoys a daily readership of 4.3 trillion and has grown into the single most powerful and influential organization in human history.</p>

            </div>


            <hr class="clearfix w-100 d-md-none pb-3" />


            <div class="col-md-3 mb-md-0 mb-3">


              <h5 class="text-uppercase">Siddhant Madhur</h5>

              <ul class="list-unstyled link-dark ">
                <li>
                  <a href="https://www.linkedin.com/in/siddhant-madhur-b437241ba/">LinkedIn</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/siddhantmadhur/">Instagram</a>
                </li>
                <li>
                  <a href="https://thelanshow.gq/">TheLanShow</a>
                </li>
              </ul>

            </div>



            <div class="col-md-3 mb-md-0 mb-3">


              <h5 class="text-uppercase">Raghav Bhatia</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="https://www.linkedin.com/in/raghavbhatia0611/">LinkedIn</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/bhatia_bhai_jr/">Instagram</a>
                </li>
                <li>
                  <a href="https://linktr.ee/TurbanTalks">TurbanTalks</a>
                </li>
              </ul>

            </div>


          </div>


        </div>



        <div class="footer-copyright text-center py-3">Website designed by Siddhant Madhur </div>


      </footer>
    </div>
  )
}



export default App;
