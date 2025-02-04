import Nav from "@/Components/Header/Nav";
import Navi from "@/Components/Header/Navi";
import Hero from "@/Components/Hero";
import Section from "@/Components/Section/Section1";
import Section2 from "@/Components/Section/Section2";
import Section3 from "@/Components/Section/Section3";

import Image from 'next/image';

export default function Home(){
  return(
    <>
    <Navi></Navi>
    <Nav></Nav>
    <Hero></Hero>
    <Section></Section>
    <Section2></Section2>
    <Section3></Section3>
    </>
  );
}