import propTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <h1 className="text-center" style={{ margin: 30, color: "white" }}>
        {title}
      </h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Kalambury",
};

Header.propTypes = {
  title: propTypes.string,
};

export default Header;
