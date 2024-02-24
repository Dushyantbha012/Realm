import React from "react";
import Row from "./Row";

function Banner() {
  return (
    <div
      className="flex flex-nowrap flex-row overflow-hidden -mb-14"
      style={{ marginTop: "68px" }}
    >
     {(() => {
        const rows = [];
        for (let i = 0; i < 100; i++) {
          rows.push(<Row key={i} />);
        }
        return rows;
      })()}
    </div>
  );
}

export default Banner;
