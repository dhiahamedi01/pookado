import Style from "@/styles/Section.module.css";
import Image from "next/image";

export default function Section1(){
    return(
        <>
        <div className={Style.section2}>
          
              <div className={Style.block}>
                   <div className={Style.partie1}>
                       <img src="/img/section1.png"></img>
                       <img className={Style.round} src="/img/round.png"></img>
                       <img className={Style.round2} src="/img/round.png"></img>
                   </div>
                   <div className={Style.globale}>
                   <div className={Style.partie2}>
                    <div className={Style.titre}>
                        <h3 className={Style.h3}>About Us</h3>
                        <p>We Educate Knowledge & Essential Skills!</p>
                        <span className={Style.desc}>
                            Phasellus gravida lacus quis eros lobortis, nec dapibus quam gravida. 
                            Duis sed augue vitae felis pellentesque varius nec quis nunc. Morbi mauris augue,
                            pulvinar quis luctus eget, pretium sed massa.
                        </span>
                        <button className={Style.btn}>
                            Read more
                        </button>
                    </div>
                    <div className={Style.image}>
                         <img className={Style.rocket} src="/img/rocket.png"></img>
                         <img src="/img/play-b.png"></img>
                    </div>
                   </div>
                   <img className={Style.line}  src="/img/line.png"></img>
                   </div>

              </div>
              
        </div>
        
        </>
    );
}