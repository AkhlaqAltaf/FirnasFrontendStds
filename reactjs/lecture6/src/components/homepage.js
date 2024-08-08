function HomePage(){


    return (
        <>

    <div class="banner">
    <h1>About us</h1>
    <p>Firnas.Tech is a software and mobile app development company with a world-class team of talented data scientists, developers, designers, mathematicians, engineers, and creative artists. We are motivated to build elegant and functional digital products that solve complex problems.</p>
    </div>
    <div class="container">
      <div class="about"  >
        <div class="left">
         <h2>Work with the Tech Leader</h2>
         <p>FirnasTech started its journey in 2020 with a team of seven. Today, it has grown into a full-cycle, first software development company, with the highest team satisfaction in the industry, independent analyst recognition, and an ever-growing list of delighted clients who work with us again and again. We are proud to have worked with Zara Construction Group, Your Own Melody, Sargenti, Martvers, Click Mechanics, and Octiga. We have helped dozens of startups with modern technologies</p>
        </div>
        
        <div class="right">
          <img src="../images/about.jpg" height="300px" alt=""/>
        </div>
      </div>

      <div class="about">
        <div class="left">
            <img src={`${process.env.PUBLIC_URL}/images/about.jpg`}   height="300px" width="500px" alt=""/>

        </div>
        <div class="right">
            <h2>Work with the Tech Leader</h2>
         <p>FirnasTech started its journey in 2020 with a team of seven. Today, it has grown into a full-cycle, first software development company, with the highest team satisfaction in the industry, independent analyst recognition, and an ever-growing list of delighted clients who work with us again and again. We are proud to have worked with Zara Construction Group, Your Own Melody, Sargenti, Martvers, Click Mechanics, and Octiga. We have helped dozens of startups with modern technologies</p>
        </div>
      </div>
</div>

</>

    )
}

export default HomePage;