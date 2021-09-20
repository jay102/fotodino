import React from "react";
import "./style.scss";
import Button from "react-bootstrap/Button";
import { BsArrowLeft } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const Card = ({
  back,
  title,
  buttonOneLabel,
  buttonOneHandler,
  buttonTwoLabel,
  buttonTwoHandler,
  children,
}) => {
  let history = useHistory();
  return (
    <div className="card__area">
      <div className="title-area">
        <h3 className="title">
          {back && (
            <BsArrowLeft className="back" onClick={() => history.goBack()} />
          )}{" "}
          {title}
        </h3>
        <div className="btn-area">
          <Button size="sm" onClick={buttonOneHandler} variant="dark">
            {buttonOneLabel}
          </Button>
          {buttonTwoLabel && (
            <Button size="sm" onClick={buttonTwoHandler}>
              {buttonTwoLabel}
            </Button>
          )}
        </div>
      </div>
      <hr className="separator" />
      <div className="content">{children}</div>
    </div>
  );
};
export default Card;
