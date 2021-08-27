import React from 'react'

const Menucard = (props) => {
    
    return (
        <>
        <section className="main-card--container">
           
    { props.menuData.map((curele)=>{
        return(
            <>
      <div className="card-container">
          <div className="card">
              <div className="card-body">
                  <span className="card-number card-circle subtle">{curele.id}</span>
                  <span className="card-author subtle">{curele.category}</span>
                  <h2 className="card-title">{curele.name} </h2>
                    <span className="card-description subtle">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, nobis?
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={curele.image} alt="images" className="card-media" />

                  <span className="card-tag  subtle">Order Now</span>
              </div>
          </div>
            </>
        )
        
    })
}
    </section>
    </>
    )
}

export default Menucard
