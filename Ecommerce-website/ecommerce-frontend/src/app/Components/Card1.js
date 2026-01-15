import React from 'react'

const Card1 = () => {
  return (
    <div>
        <div class="card border-0 w-25 "
        //  key={phone.id}
         >
 {/* <div className={styles.imageWrapper}>
                 
                  <img
  src={imageUrl}
  width={200}
  height={200}
  alt={name}
  className={styles.image}
/>
                </div>  */}
                 <div class="card-body d-flex justify-content-between">
    <h5 class="card-title"><a href="#">
        {/* {name} */}
        </a></h5>
    <p class="card-text"><i class="fa-regular fa-bookmark"></i></p>
  </div>
  <hr/>
  <div class="card-body">
  
   <ul class="list-unstyled d-flex justify-content-between ">
    <li><h4>
        {/* {price} */}
        </h4></li>
    <li>  <button class="btn btn-success">Buy Now</button></li>

   </ul>
  </div>
</div>
    </div>
  )
}

export default Card1