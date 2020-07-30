import React from 'react';
import { Link } from "react-router-dom";
import photo from '../assets/IMG_1799.jpg';
import htmllogo from '../assets/html.png';
import csslogo from "../assets/css.png";
import jslogo from "../assets/javascipt.png";
import nodelogo from "../assets/node.png";
import cpplogo from "../assets/cpp.png";
import reactlogo from "../assets/reactlogo.png"
import vuelogo from "../assets/vuelogo.png"
import swiftlogo from "../assets/swiftlogo.png"


function Home(){ 

    return(
        <div>
            <div className="container-fluid ">
            <div className="row myrow">
              <div className="col-sm-8 textbox responsive ">
                <div className= "innertextbox responsive">
                  <h1>Hi, I'm <span id="namecolor">Andy Nguyen</span>.</h1>
                  <p> A full stack developer, specialising in back-end frameworks.</p>
                  <Link to="/portfolio"  className="btn btn-primary " role="button">View my work</Link>

                </div>
              </div>
              <div className="col-sm-3 photobox rightbox">
                <img className= "img-responsive" id="portrait" src={photo} alt="Andy Nguyen"/>
              </div>
            </div>

            <div className="row myrow">
              <div className="col-sm-6 bottombox">
                <img id="golfapp" src="https://picjumbo.com/wp-content/uploads/girl-with-watches-typing-on-macbook_free_stock_photos_picjumbo_IMG_5539-2210x1473.jpg" alt="golf app"/>
              </div>

              <div className="col-sm-6  ">
                <div className="row language-rows">
                  <div className="col"> 
                    <img className= "img-responsive center"  src={htmllogo} alt="html"/>
                  </div>
                   
                  <div className="col">
                    <img className= "img-responsive center cssimage"  src={csslogo} alt="html"/>
                  </div>
                  <div className="col">
                    <img className= "img-responsive center java"  src={jslogo} alt="javascript"/>
                  </div>
                </div>
                <div className="row language-rows">
                  <div className="col">
                    <img className= "img-responsive center node"  src={nodelogo} alt="node"/>
                  </div>
                  <div className="col">
                    <img className= "img-responsive center cpp"  src={cpplogo} alt="cpp"/>
                  </div>
                  <div className="col"> <img className= "img-responsive center react"  src={reactlogo} alt="react"/> </div>
                </div>
                <div className="row language-rows">
                  <div className="col"><img className= "img-responsive center vue"  src={vuelogo} alt="react"/></div>
                  <div className="col"><img className= "img-responsive center swift"  src={swiftlogo} alt="react"/></div>
                  <div className="col"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}


export default Home
