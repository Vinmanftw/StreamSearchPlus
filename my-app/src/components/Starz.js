import React from "react";
import { ProviderSearch } from "./ProviderSearch";

function Starz({buttonColor , btnText}) {
  return <ProviderSearch label={"Starz"} provider={"starz"} buttonColor={buttonColor} btnText={btnText}/>;
}

export default Starz;
