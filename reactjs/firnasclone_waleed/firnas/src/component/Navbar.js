function Navbar(){
    return(



        <div className="navbar">
        <div className="logo">
          <img
            src={`${process.env.PUBLIC_URL}/img/Firnas-Logo.png`}
            alt="Firnas Logo"
          />
        </div>
        <ul>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>Service</li>
            </a>
            <a href="#">
              <li>Work</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
            <a href="#">
              <li>Bootcamp</li>
            </a>
          </ul>
          <div class="buttondisplay">
          <button class="button button1" id="btn">+923115157058</button>
          <button class="button button1" id="btn"> Estimated Project </button>
          </div>
      </div>
    );
}

export default Navbar;