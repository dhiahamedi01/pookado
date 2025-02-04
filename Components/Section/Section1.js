import Style from "@/styles/Section.module.css";
import Carrousel from"../Carrousel/index";
export default function Section1(){
    return(
        <>
        <div className={Style.section}>
          <Carrousel></Carrousel>
        </div>
        </>
    );
}