import React from "react";
import { ProviderSearch } from "./ProviderSearch";

function Paramount({buttonColor , btnText}) {
  return <ProviderSearch label={"Paramount+"} provider={"paramount"} buttonColor={buttonColor} btnText={btnText}/>;
}

export default Paramount;
