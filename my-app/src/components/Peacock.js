import React from "react";
import { ProviderSearch } from "./ProviderSearch";

function Peacock({buttonColor, btnText}) {
  return <ProviderSearch label={"Peacock"} provider={"peacock"} buttonColor={buttonColor} btnText={btnText}/>;
}

export default Peacock;
