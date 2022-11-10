import "./App.css";

//* Slider *//
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/css/core";
// import "@splidejs/react-splide/css";

//* Images *//
import Banner from "./assets/Banner.png";

//* Icons *//
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function App() {
  return (
    <div className="App">
      <div className="slider-container">
        <Splide
          hasTrack={false}
          options={{ type: "loop", pagination: true, gap: 10}}
        >
          <SplideTrack>
            <SplideSlide>
              <img src={Banner} alt="Image slide" />
            </SplideSlide>
            <SplideSlide>
              <img src={Banner} alt="Image slide" />
            </SplideSlide>
          </SplideTrack>

          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">
              <IoIosArrowBack size={'30'} className='arrow-prev' />
            </button>
            <button className="splide__arrow splide__arrow--next">
              <IoIosArrowForward size={'30'} className='arrow-next' />
            </button>
          </div>
        </Splide>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo et
          dolorem saepe, ducimus facilis molestias. Commodi impedit voluptates
          fugiat et.
        </p>
      </div>
    </div>
  );
}

export default App;
