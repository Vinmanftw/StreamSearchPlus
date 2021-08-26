import React from "react";
import { ProviderSearch } from "./ProviderSearch";

function Showtime({buttonColor , btnText}) {
  return <ProviderSearch label={"Showtime"} provider={"showtime"} buttonColor={buttonColor} btnText={btnText}/>;
}

export default Showtime;
