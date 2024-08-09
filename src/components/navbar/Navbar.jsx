import './Navbar.css'
const Navbar = () => {
  return (
    <>
      <nav class="navbar">
        <ul class="menu">
          <li style={{color:"crimson"}}>INDIA</li>
          <li class="north-location">
            <h3>NORTH INDIA</h3>
            <div>
              <h4 style={{color:"blue"}}>ALL OF NORTH INDIA</h4>
              <ul class="my-flex">
                <ul>
                  <h5 class="location">Himachal Pradesh</h5>
                  <li>
                    <a href="#">Shimla</a>
                  </li>
                  <li>
                    <a href="#">Manali</a>
                  </li>
                  <li>
                    <a href="#">Spity valley</a>
                  </li>
                  <li>
                    <a href="#">Chandrataal</a>
                  </li>
                  <li>
                    <a href="#">Dalhoushi</a>
                  </li>
                  <li>
                    <a href="#">dharmashala</a>
                  </li>
                  <li>
                    <a href="#">Kaza</a>
                  </li>
                </ul>
                <ul>
                  <h5 class="location">Kashmir</h5>
                  <li>
                    <a href="#">Gulmarg</a>
                  </li>
                  <li>
                    <a href="#">Sonamarg</a>
                  </li>
                  <li>
                    <a href="#">Pahelgram</a>
                  </li>
                  <li>
                    <a href="#">Srinagar</a>
                  </li>
                </ul>
                <ul>
                  <h5 class="location">Leh-Ladakh</h5>
                  <li>
                    <a href="#">Kargil</a>
                  </li>
                  <li>
                    <a href="#">Leh</a>
                  </li>
                  <li>
                    <a href="#">Pangong Tso</a>
                  </li>
                  <li>
                    <a href="#">Turtuk</a>
                  </li>
                </ul>
              </ul>
            </div>
          </li>
          <li class="north-location">
            <h3>SOUTH INDIA</h3>
            <div>
              <h4>ALL OF SOUTH INDIA</h4>
              <ul class="my-flex">
                <ul>
                  <h5 class="location">Andaman & Nicobar Islands</h5>
                  <li>
                    <a href="#">Havelock</a>
                  </li>
                  <li>
                    <a href="#">Neil Island</a>
                  </li>
                  <li>
                    <a href="#">Port Blair</a>
                  </li>
                </ul>
                <ul>
                  <h5 class="location">Karnataka</h5>
                  <li>
                    <a href="#">Badami</a>
                  </li>
                  <li>
                    <a href="#">Bengaluru</a>
                  </li>
                  <li>
                    <a href="#">Belur</a>
                  </li>
                  <li>
                    <a href="#">Dandeli</a>
                  </li>
                  <li>
                    <a href="#">Chitradurga</a>
                  </li>
                  <li>
                    <a href="#">Gokarna</a>
                  </li>
                </ul>
                <ul>
                  <h5 class="location">Kerala</h5>
                  <li>
                    <a href="#">Kargil</a>
                  </li>
                  <li>
                    <a href="#">Leh</a>
                  </li>
                  <li>
                    <a href="#">Pangong Tso</a>
                  </li>
                  <li>
                    <a href="#">Turtuk</a>
                  </li>
                </ul>
              </ul>
            </div>
          </li>

          <li>
            <h3>East & North East India</h3>
            <div>
              <h4>Brands</h4>
            </div>
          </li>
          <li>
            <h3>Rajasthan, West & Central India</h3>
            <div>
              <h4>Sport</h4>
            </div>
          </li>
          <li>
            <h3>Home & Cooking</h3>
            <div>
              <h4>Cooking</h4>
            </div>
          </li>
        </ul>
        <ul class="temp">
        </ul>
      </nav>
    </>
  );
}

export default Navbar