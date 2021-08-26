import React from "react";
import { ProviderSearch } from "./ProviderSearch";

function AppleTV({buttonColor, btnText}) {
  return <ProviderSearch label={"AppleTV+"} provider={"apple"} buttonColor={buttonColor} btnText={btnText} />;
}

export default AppleTV;
