import Style from "@/styles/Carrousel.module.css";

const images = [
  "/img/1.webp",
  "/img/2.avif",
  "/img/2.webp",
  "/img/3.avif",
];

export default function Carousel() {
  return (
    <div className={Style.carousel_container}>
      <div className={Style.carousel}>
        {[...images, ...images].map((src, i) => (
          <img key={i} src={src} alt={`Slide ${i}`} className={Style.carousel_image} />
        ))}
      </div>
    </div>
  );
}
