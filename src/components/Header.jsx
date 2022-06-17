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
      <div
        className="planets-title"
      >
        <p className="letter">P</p>
        <p className="letter">L</p>
        <p className="letter">A</p>
        <p className="letter">N</p>
        <p className="letter">E</p>
        <p className="letter">T</p>
        <p className="letter">S</p>
      </div>
    </StyledHeader>
  );
}

export default Header;
