import React, { useState } from "react";
import classes from "./Card.module.scss";
import DividerDesktop from "../../images/pattern-divider-desktop.svg";
import DividerMobile from "../../images/pattern-divider-mobile.svg";
import IconDice from "../../images//icon-dice.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
import Button from "../Button/Button";
import Spinner from "../Spinner/Spinner";

// https://api.adviceslip.com
const Card = () => {
  const media = useMediaQuery("only screen and (max-width:400px)");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchAdvice = () => {
    setLoading(true);
    fetch("https://api.adviceslip.com/advice")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching the advice", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className={classes.card}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className={classes.card__heading}>
            Advice #{data ? data.slip.id : "117"}
          </h1>
          <p className={classes.card__text}>
          &ldquo;
            {data
              ? data.slip.advice
              : "It is easy to sit up and take notice, what's difficult is getting up and taking action."}
            &rdquo;
          </p>
        </>
      )}
      {error && <p className={classes.card__text}>{error}</p>}
      <img
        src={media ? DividerMobile : DividerDesktop}
        alt="Divider"
        className={classes.card__divider}
      />
      <Button onClick={fetchAdvice} className={classes.card__button}>
        <img src={IconDice} alt="Icon of a dice" />
      </Button>
    </div>
  );
};

export default Card;
