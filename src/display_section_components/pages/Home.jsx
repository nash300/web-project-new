import img from "../../images/background.jpg";

const Home = () => {
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return <img id="img" src={img} style={imageStyle} alt="Background" />;
};

export default Home;
