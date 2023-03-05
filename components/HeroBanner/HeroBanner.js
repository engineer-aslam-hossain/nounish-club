import { Container } from "@mui/material";
import Image from "next/image";
import classes from "./HeroBanner.module.scss";

import { Link } from "react-scroll";

const HeroBanner = () => {
  return (
    <Container id="hero">
      <div className={classes.hero_container}>
        <h1>
          Spread the culture.
          <br />
          Join the <span>Nounish Club.</span>
        </h1>
        <p>
          The Nounish Club includes all the NNS numbers from 0 to 9999. 10k
          names which will be distributed to anyone, for free.
        </p>
        <button className={classes.claim}>Claim</button>
        <h6>Claims available: x</h6>
        <Link
          to="footer"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
          className={classes.scroll_down}
        >
          <Image
            src="/Subtract.svg"
            alt="keyboard_arrow_down"
            width={40}
            height={26}
          />
        </Link>
      </div>
    </Container>
  );
};

export default HeroBanner;
