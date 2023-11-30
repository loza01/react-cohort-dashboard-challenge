import { useEffect, useState } from "react";
import React from "react";
import TitleHeader from "../../assets/title-header.svg";

import "./TitleLogo.css";

function TitleLogo() {
  return <img src={TitleHeader} alt="logo" />;
}

export default TitleLogo;