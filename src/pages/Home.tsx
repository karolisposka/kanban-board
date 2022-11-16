import React, { useContext } from "react";
import { themeContext } from "../context";
import Button from "../components/button/Button";

const Home = () => {
  const [theme, setTheme] = useContext(themeContext);

  const changeTheme = () => {
    if (theme === "light") {
      return setTheme("dark");
    } else {
      return setTheme("light");
    }
  };

  return (
    <div>
      <Button
        text="theme toggler"
        handleClick={() => {
          changeTheme();
        }}
      />
    </div>
  );
};

export default Home;
