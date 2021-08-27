import React from "react";
import { ProviderSearch } from "./ProviderSearch";

function Disney({ buttonColor, btnText }) {
  return (
    <ProviderSearch
      label={"Disney+"}
      provider={"disney"}
      buttonColor={buttonColor}
      btnText={btnText}
    />
  );
}

export default Disney;
