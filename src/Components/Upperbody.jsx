import Carousel from "../Carouselslides/Carousel";

const Upperbody = () => {
  let slides = [
    {
      id: 1,
      img: "./p1.png",
    },
    {
      id: 2,
      img: "./p2.png",
    },
    {
      id: 3,
      img: "./p3.png",
    },
    {
      id: 4,
      img: "./p4.png",
    },
  ];
  return (
    <div className="  m-auto ">
      <Carousel slides={slides} />
    </div>
  );
};
export default Upperbody;
