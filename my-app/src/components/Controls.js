import React from "react";

export function Controls({
  children,
  buttonColor,
  btnText,
  totalPages,
  page,
  setPage,
  keyword,
  setKeyword,
  type,
  handleType,
}) {
  return (
    <React.Fragment>
      <div className="Buttons">
        <button
          style={{ backgroundColor: buttonColor, color: btnText }}
          id="back"
          onClick={() => {
            if (page === 1) {
              return;
            }
            setPage(page - 1);
          }}
        >
          Back
        </button>
        <button
          style={{ backgroundColor: buttonColor, color: btnText }}
          id="next"
          onClick={() => {
            if (totalPages === page) {
              return;
            }

            setPage(page + 1);
          }}
        >
          Next
        </button>
        <p id="page">
          Page: {page} of {totalPages}
        </p>
      </div>
      <div id="toggle">
        <button
          id="typebutton"
          style={{ backgroundColor: buttonColor, color: btnText }}
          onClick={handleType}
        >
          {type.charAt(0).toUpperCase() + type.substring(1)}
        </button>
        <input
          id="input"
          value={keyword}
          onChange={(e) => {
            const value = e.currentTarget.value;
            console.log(value);
            setKeyword(value);
            setPage(1);
          }}
          placeholder="Search by Name/Keyword"
        />
      </div>
      {children}
      <div className="Buttons Buttons-bottom">
        <button
          style={{ backgroundColor: buttonColor, color: btnText }}
          id="back"
          onClick={() => {
            if (page === 1) {
              return;
            }
            setPage(page - 1);
          }}
        >
          Back
        </button>
        <button
          style={{ backgroundColor: buttonColor, color: btnText }}
          id="next"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </React.Fragment>
  );
}
