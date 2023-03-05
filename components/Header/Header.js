import { Container } from "@mui/material";

import Image from "next/image";
import { useEffect, useState } from "react";
import classes from "./Header.module.scss";
import { Link } from "react-scroll";

const Header = () => {
  const [stickyClass, setStickyClass] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;

      windowHeight > 50 ? setStickyClass(true) : setStickyClass(false);
    }
  };

  return (
    // <Container>
    <div
      className={stickyClass ? classes.sticky_header : classes.navbar_header}
    >
      <div className={classes.header_toolbar}>
        <Link
          to="hero"
          spy={true}
          smooth={true}
          duration={1000}
          style={{ cursor: "pointer" }}
        >
          <Image
            className={classes.logo_img}
            src="/logo.svg"
            alt="logo"
            width={278}
            height={32}
          />
        </Link>

        <button className={classes.connect_button}>Connect Wallet</button>
      </div>
    </div>
    // </Container>
  );
};

export default Header;
