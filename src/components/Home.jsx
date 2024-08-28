import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";


const Home = () => {
  return (
    <div className="h-[80vh] flex w-full justify-between">
      <div className="h-full bg-red-600 flex flex-col justify-center gap-5">
        <Link to="https://github.com/milansap">
          <FaGithub size={"25px"} />
        </Link> 
        <Link to="https://www.linkedin.com/in/milan-sapkota-564294228/">
          <FaLinkedinIn size={"25px"} />
        </Link>
      </div>
      <div className="intro">
        hello
      </div>
      <div className="image">image here</div>
    </div>
  );
};

export default Home;
