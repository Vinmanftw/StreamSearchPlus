import React from "react";
import { ProviderSearch } from "./ProviderSearch";

function HBOMax({buttonColor, btnText}) {
  return <ProviderSearch label={"HBOMax"} provider={"hbo"} buttonColor={buttonColor} btnText={btnText}/>;
}

export default HBOMax;
