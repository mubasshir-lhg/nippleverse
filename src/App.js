import "./App.css";

// Header
import Img1 from "./assets/image/img1.png";
import Img2 from "./assets/image/img2.png";
import Text1 from "./assets/image/text1.png";
import toggle from "./assets/image/toggle.svg";
import ridet from "./assets/image/ridet.svg";
import Vector from "./assets/image/Vector.svg";
import Union from "./assets/image/Union.svg";
// Section One
import Slice1 from "./assets/image/Slice 1.png";
import oundshap from "./assets/image/ound-shap.png";
import digitbg from "./assets/image/digitbg.png";
// Section Two
import Camera from "./assets/image/camera.png";
import Particles from "./assets/image/Particles.png";
import Eye from "./assets/image/3A 2.png";
import Featured from "./assets/image/Featured.png";
// Setion Three
import Multiple from "./assets/image/multiple.png";
// Section Four
import _Mult from "./assets/image/3_mult.png";
import Nipple from "./assets/image/nipple.png";
import posts from "./assets/image/posts.png";
// Section Five
import Four_4 from "./assets/image/four4.png";
import Circle from "./assets/image/circle.png";
// Section Six
import Disk from "./assets/image/vinyl-disc-removebg-preview-modified.png";
import dj from "./assets/image/dj.png";

import BackDisk from "./assets/image/vinyl-disc.png";
import Stick from "./assets/image/vinyl-stick.png";
import makec from "./assets/image/8c.png";
// Section Eight
import Bomb from "./assets/image/bomb.png";
// Team Section
import Mem1 from "./assets/image/mem1.png";
import Mem2 from "./assets/image/mem2.png";
import Mem3 from "./assets/image/mem3.png";
import Mem4 from "./assets/image/mem4.png";
import Mem5 from "./assets/image/mem5.png";
import Mem6 from "./assets/image/mem6.png";

function App() {
  return (
    <div>
      <header>
         <div className="container">
           <div className="row">
              <div className="col6">
                <div className="toggle">
                <img src={toggle} alt="" />
                </div>
                <div className="menu">
                  {/* <a href="javascript:void(0)" className="closee">X</a> */}
                    <ul>
                      <div className="logo">
                        <a href="#">NippleVer</a>
                        </div>
                      <li><a href="#">About</a></li>
                      <li><a href="#">Featured</a></li>
                      <li><a href="#">Roadmap</a></li>
                      <li><a href="#">Team</a></li>
                      <li><a href="#">Connect Wallet</a></li>
                    </ul>

                  </div>
              </div>
              <div className="col6">
                <ul>
                  <li><a href="#"><img src={ridet} alt="" /></a></li>
                  <li><a href="#"><img src={Vector} alt="" /></a></li>
                  <li><a href="#"><img src={Union} alt="" /></a></li>
                </ul>
                
              </div>
           </div>
         </div>
      </header>
      
      <div className="main">
        <div className="container">
          <div className="image1    welcome">
            <img src={Img1} alt="" />
          </div>
          <div className="image1">
            <img src={Img2} alt="" />
          </div>
          <div className="text1">
            <img src={Text1} alt="" />
            <h2>The world has chastised them from public view.</h2>
            <p>They belong to all of us yet we are ashamed of them because society taught us so. However their power is too hard to contain, they found refuge on the Ethereum blockchain and now they are ready to break free. With about 8.000.000.000 people in the world and only 4444 unique entitties, only a few will be able to claim they were brave enough to #freethenipple and wear them as badges of honour.</p>
          </div>
        </div>
      </div>
      {/* Header End  */}
      {/* section_one */}
      <div className="section_one">
        <img className="mob" src={digitbg} alt="" />
        <div className="container  form">
          <div className="row">
            <div className="col-md-6   inner_one">
              <div className="form_image_1">
                <div className="inn_one">
                  <img src={Slice1} alt="" />
                  <img className="mob" src={oundshap} alt="" />
                </div>
                <div className="inn_two">
                  <p>
                    Enter the amount of nipples you would like to buy (5 max.):
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form_count">
                    <form>
                      <input type="text" placeholder={3} className="three" />
                      <button className="mint">Mint</button>
                    </form>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="count">
                    <p>
                      <span>Total</span>
                      <span className="eth"> 12 ETH</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="featured">FEATURED</div>
          </div>
        </div>
      </div>
      {/*  section_one  */}
      {/* section_two */}
      <div className="section_two">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="cam">
              <img className="mob" src={Featured} alt="" />
                <img src={Camera} alt="" />
              </div>
            </div>
            <div className="col-md-6 cam_2">
              <div className="particle">
                <img src={Particles} alt="" />
              </div>
              <div className="comb">
                <img src={Eye} alt="" className="eye" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section_two -end*/}
      {/* section_three */}
      <div className="section_three">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="mul_col">
                <img src={Multiple} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section_three_end */}
      {/* section_four */}
      <div className="section_four">
        <div className="row">
          <div className="col-md-6" />
          <div className="col-md-6">
            <div className="three-image">
              <img src={_Mult} alt="" />
              <img className="mob" src={posts} alt="" />
            </div>
            <div className="nipple">
              <img src={Nipple} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* section_four_end */}
      {/* section_five */}
      <div className="section-five">
        <div className="container">
          <div className="four">
            <img src={Four_4} alt="" />
          </div>
          <div className="circle">
            <img src={Circle} alt="" />
          </div>
        </div>
      </div>
      {/* section_five_end */}
      {/* section_six */}
      <div className="section_six">
      <img className="mob" src={dj} alt="" />
        <div className="container">
          <div className="speaker">
            <div
              style={{
                width: "507px",
                height: "550px",
                backgroundImage: `url(${BackDisk})`,
                backgroundRepeat: "no-repeat",
                margin: "auto",
                position: "relative",
              }}
            >
              <img src={Disk} alt="" className="disk" />
              <img src={Stick} alt="" className="stick" />
            </div>
          </div>
        </div>
      </div>
      {/* section_six_end */}
      {/* section_seven */}
      <div className="section-seven">
        <div className="container   seven_row">
          <div className="road">ROADMAP</div>
          <div className="row   lorem_row">
            <div className="col-md-6">
              <p className="lorem">
                LOREM IPSUM
                <br />
                LOREM IPSUM
                <br />
                LOREM IPSUM
              </p>
            </div>
            <div className="col-md-6">
              <p className="lorem">
                LOREM IPSUM
                <br />
                LOREM IPSUM
                <br />
                LOREM IPSUM
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* section_seven_end */}
      {/* section_eight */}
      <div className="section_eight">
        <div className="container">
      <img className="mob" src={makec} alt="" />
          <div className="bomb">
            <img src={Bomb} alt="" />
          </div>
        </div>
      </div>
      {/* section_eight_end*/}
      {/* section_nine */}
      <div className="section_nine">
        <div className="container"></div>
      </div>
      {/* section_nine_end */}
      {/* Team section */}
      <div className="section_team">
        <div className="container">
          <div className="team">TEAM</div>
          <div className="row">
            <div className="col-sm-2 member">
              <img src={Mem1} alt="" />
            </div>
            <div className="col-sm-2 member">
              <img src={Mem2} alt="" />
            </div>
            <div className="col-sm-2 member">
              <img src={Mem3} alt="" />
            </div>
            <div className="col-sm-2 member">
              <img src={Mem4} alt="" />
            </div>
            <div className="col-sm-2 member">
              <img src={Mem5} alt="" />
            </div>
            <div className="col-sm-2 member">
              <img src={Mem6} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Team section-end  */}
    </div>
  );
}

export default App;
