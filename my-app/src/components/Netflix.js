import React from "react";
import { ProviderSearch } from "./ProviderSearch";

function Netflix({buttonColor, btnText}) {
  return <ProviderSearch label={"Netflix"} provider={"netflix"} buttonColor={buttonColor} btnText={btnText}/>;
}

export default Netflix;
