import { useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Link({ Lhref }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (location.pathname !== "/") {
      // If the user is not on the home page, redirect to home and then scroll
      navigate("/", { replace: true });
      setTimeout(() => {
        scrollToSection();
      }, 100); // Small delay to ensure page has loaded before scroll
    } else {
      scrollToSection();
    }
  };

  const scrollToSection = () => {
    scroll.scrollTo(
      document.getElementById(Lhref.toLowerCase()).offsetTop - 70, // offset for header
      {
        smooth: true,
        duration: 500,
      }
    );
  };

  return (
    <li onClick={handleClick}>
      <a>{Lhref}</a>
    </li>
  );
}

export default Link;
