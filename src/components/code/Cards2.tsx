import React from "react";
import styled from "styled-components";

const Card2 = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="img" />
        <span>Evènements</span>
        <p className="info">Retrouvez nos prochaines participations.</p>

        {/* Conteneur des icônes */}
        <div className="share">
          <a href="https://github.com/tonProfil">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a href="https://twitter.com/tonProfil">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </a>
          {/* Ajoute les autres icônes ici */}
        </div>

        <button>Resume</button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 90%;
    max-width: 17em;
    height: 22.5em;
    background: #403e41;
    transition: 0.4s ease-in-out;
    clip-path: polygon(
      30px 0%,
      100% 0,
      100% calc(100% - 30px),
      calc(100% - 30px) 100%,
      0 100%,
      0% 30px
    );
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;

    &:hover {
      transform: translateY(-5px) scale(1.03);
      box-shadow: 0 15px 25px rgba(0, 0, 0, 0.4);
    }
  }

  .card span {
    font-weight: bold;
    color: white;
    text-align: center;
    font-size: 1em;
    margin-top: 0.5em;
  }

  .card .info {
    font-weight: 400;
    color: white;
    text-align: center;
    font-size: 0.72em;
    margin: 0.5em 0 1em 0;
  }

  .card .img {
  width: 4.8em;
  height: 4.8em;
  background: url("/images/calendrier.png") no-repeat center center/cover;
  border-radius: 15px;
  margin: 0.5em auto;
}

  .card .share {
    margin-top: auto;
    display: flex;
    justify-content: center;
    gap: 1em;
    flex-wrap: wrap;
  }

  .card a {
    color: white;
    transition: 0.3s ease-in-out;
  }

  .card a:hover {
    color: #ff4d4f;
    transform: scale(1.2);
  }

  .card button {
    padding: 0.7em 1.5em;
    margin: 1em auto 0 auto;
    border-radius: 25px;
    border: none;
    font-weight: bold;
    background: #ffffff;
    color: #000000;
    transition: 0.3s ease-in-out;
  }

  .card button:hover {
    background: #ff4d4f;
    color: white;
    cursor: pointer;
    transform: scale(1.05);
  }

  @media (min-width: 640px) {
    .card {
      width: 16em;
    }
  }

  @media (min-width: 1024px) {
    .card {
      width: 17em;
    }
  }
`;

export default Card2;
