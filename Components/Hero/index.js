import Style from "@/styles/Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={Style.heroContainer}>
   
      <div className={Style.text}>
        <span className={Style.span}>The #1 soft play equipment</span>
        <span className={Style.span}>recommended by experts</span>
        <p className={Style.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non expedita accusantium iure corporis nulla doloribus 
          architecto optio dolorem error
        </p>
        <div className={Style.btn}>
        <button className={Style.button}>Acheter sans tarder</button>
        </div>
      </div>

    </div>
  );
}
