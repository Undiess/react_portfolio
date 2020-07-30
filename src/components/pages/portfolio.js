import React from 'react';
import lodafones from "../assets/lodafones.png"
import golfapp from "../assets/golfapp.png"


function Portfolio(){
    return(
        <div>
            <div className="container-fluid portfoliocontainer">
                <div className="row portfoliorow">
                    <div className="col-sm-12 textbox responsive ">
                        <div className= "portinnertextbox responsive">
                        <h1>Welcome to my<span id="namecolor"> Portfolio</span></h1>
                        <p> Here are some projects that i have worked on</p>
                        </div>
                    </div>
                </div>

                <div className="row myrow">
                    <div className="col-sm-8 responsive lodafones">
                        <div className= "responsive">
                            <img className= "lodafonesimg" src={lodafones} alt="loadafones"/>
                        </div>
                    </div>

                    <div className="col-sm-4 lodafone-textbox rightbox">
                            <div className="lodafonetext">
                                <h1> Lodafones</h1>
                                <br></br>
                                <p> A web application designed to help users buy a new phone without paying outright and also keep their plans with a third party plan provider. There is a selection of features which the users can select and compare.</p>
                                <br></br>
                                <br></br>
                                <br></br>
                                <a href="https://lodafoneproject.herokuapp.com/" target="blank"><button className="btn btn-primary " role="button"> Visit site</button></a>
                            </div>
                    </div>
                </div>
            </div>
        

            <div className="container-fluid portfoliocontainer ">

                <div className="row myrow">
                    <div className="col-sm-4 responsive golfapp">
                    <div className="golftext">
                                <h1> Golf App</h1>
                                <br></br>
                                <p> A mobile application designed for golfers to assist them on the golf course which includes compass direction, a score keeper, and current weather.
                                </p>
                                <br></br>
                                <br></br>
                                <br></br>
                                <a href="https://a1718367.github.io/GolfApp/" target="blank"><button className="btn btn-primary " role="button"> Visit site</button></a>
                            </div>
                    </div>

                    <div className="col-sm-8 golfapp rightbox">
                            
                            <div className= "responsive">
                                 <img className= "golfimg" src={golfapp} alt="loadafones"/>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>

    )
       
    }

export default Portfolio