import React from 'react';
import { StyledHeader } from '../styled/StyledHeader';

function Header() {
  return (
    <StyledHeader>
      <img
        className="star-img"
        src="https://cssanimation.rocks/demo/starwars/images/star.svg"
        alt="star"
      />
      <img
        className="wars-img"
        src="https://cssanimation.rocks/demo/starwars/images/wars.svg"
        alt="wars"
      />
    </StyledHeader>
  );
}

export default Header;
