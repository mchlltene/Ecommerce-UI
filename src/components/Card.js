import React from 'react'
import '../assets/style.css'

const Card = (props) => {
    return (
        <div class="gap">
            <div className=" card border w-60 pt-3 border-2 rounded-3 container ">
                <div className="card-body">
                    <div class="head-card">
                        <div> <label class="new"><b>NEW</b></label></div>
                        <div class="icon"><i className="fas fa-bars"></i></div>
                        <div class="icon"> <i className="bi bi-heart"></i> </div>
                    </div>
                    <div className="">
                        <img class="img" src={props.image}></img>
                        <h5 className="card-title text-center pt-4 pb-4 " >Wooden Chair</h5>
                    </div>

                    <div className="head-card">
                        <div class="star"><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i></div>
                        <div class="star2"> <i class="fas fa-star"></i></div>
                        <div class='label'>
                            <label className="card w-20 pe-5 ps-3 pt-1 fs-6">RP. 12.000.000</label>
                            <label class="card p-2 "> <i class="fas fa-shopping-cart"></i></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

