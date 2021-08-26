import React from "react";
import { ProviderSearch } from "./ProviderSearch";

function Hulu({buttonColor, btnText}) {
  return <ProviderSearch label={"Hulu"} provider={"hulu"} buttonColor={buttonColor} btnText={btnText}/>;
}

export default Hulu;
