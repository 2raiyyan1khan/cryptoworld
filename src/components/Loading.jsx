import React from "react";
import Spinner from "react-spinkit";
import { StyledLoading } from "./styles/Loading";
const Loading = ({ home }) => {
  return (
    <StyledLoading home={home}>
      <Spinner name="ball-scale-ripple-multiple" color="#6f6bfa" />
    </StyledLoading>
  );
};

export default Loading;
// style={{ marginTop: !home ? "90px" : "" }}
