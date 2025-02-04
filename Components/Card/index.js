import React, { useRef, useState, useEffect } from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styles from "@/styles/Card.module.css";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

const products = [
  {
    image: "/img/product2.png",
    category: "Châteaux Gonflables",
    name: "Ninja Obstacle Course for Kids",
    oldPrice: "1200 TND",
    newPrice: "999 TND"
  },
  {
    image: "/img/product.png",
    category: "Toboggans",
    name: "Backyard Discovery Belmont",
    oldPrice: "500 TND",
    newPrice: "399 TND"
  },
  {
    image: "/img/product1.png",
    category: "Balançoires",
    name: "Balançoire Double",
    oldPrice: "300 TND",
    newPrice: "249 TND"
  },

  {
    image: "/img/product3.png",
    category: "Aires de Jeux",
    name: "Step2 Game Time Sports",
    oldPrice: "800 TND",
    newPrice: "699 TND"
  },
  {
    image: "/img/product4.png",
    category: "Aires de Jeux",
    name: "PlayVibe Tree Swing",
    oldPrice: "420 TND",
    newPrice: "349 TND"
  }
];

const CardCarousel = () => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const cardWidthRef = useRef(0);

  useEffect(() => {
    calculateCardWidth();
    checkScrollPosition();
    window.addEventListener("resize", calculateCardWidth);
    return () => window.removeEventListener("resize", calculateCardWidth);
  }, []);

  const calculateCardWidth = () => {
    if (carouselRef.current && carouselRef.current.firstChild) {
      cardWidthRef.current = carouselRef.current.firstChild.offsetWidth;
      checkScrollPosition();
    }
  };

  const checkScrollPosition = () => {
    if (carouselRef.current) {
      setCanScrollLeft(carouselRef.current.scrollLeft > 0);
      setCanScrollRight(
        carouselRef.current.scrollLeft + carouselRef.current.clientWidth < carouselRef.current.scrollWidth
      );
    }
  };

  const scroll = (direction) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ 
        left: direction * cardWidthRef.current, 
        behavior: "smooth" 
      });
      setTimeout(checkScrollPosition, 500);
    }
  };

  return (
    <>
    <div className={styles.titre}>
      <div className={styles.titre2}>
      <h2>Les Produits plus populaires</h2>
      </div>
      <div className={styles.liste}>
        <div className={styles.active} >
            <span>Structures modulaires</span>
        </div>
        <div className={styles.active2} >
             <span>Piscines à balles</span>
        </div>
        <div className={styles.active2} >
             <span>Jeux sensoriels</span>
        </div>
        <div className={styles.active2} >
            <span>Trampolines</span>
        </div>
       
      </div>
    </div>
    <div className={styles.carouselContainer}>
      <button
        className={`${styles.prevButton} ${!canScrollLeft ? styles.disabled : ""}`}
        onClick={() => scroll(-1)}
        disabled={!canScrollLeft}
      >
        <ChevronLeftIcon size={24} />
      </button>
   
      <div className={styles.carouselWrapper}>
        <div className={styles.carousel} ref={carouselRef} onScroll={checkScrollPosition}>
          {products.map((product, index) => (
            <div key={index} className={styles.card}>
              <img src={product.image} className={styles.img} alt={product.name} />
              <div className={styles.text}>
                <span className={styles.span}>{product.category}</span>
              </div>
              <div className={styles.text}>
                <span className={styles.spani}>{product.name}</span>
              </div>
              <div className={styles.text}>
                <Box sx={{ width: 220, display: 'flex', marginTop: "10px" }}>
                  <Rating name="hover-feedback" sx={{ fontSize: "20px" }}/>
                </Box>
              </div>
              <div className={styles.text2}>
                <span className={styles.span2}>{product.oldPrice}</span>
                <span className={styles.span3}>{product.newPrice}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className={`${styles.nextButton} ${!canScrollRight ? styles.disabled : ""}`}
        onClick={() => scroll(1)}
        disabled={!canScrollRight}
      >
        <ChevronRightIcon size={24} />
      </button>
    </div>
    <div className={styles.test}>

    </div>
    </>
  );
};

export default CardCarousel;
