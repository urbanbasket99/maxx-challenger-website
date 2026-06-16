import { useState } from "react";

function Product360() {
  const images = [
    "/360/helmet/1.png",
    "/360/helmet/2.png",
    "/360/helmet/3.png",
    "/360/helmet/4.png",
    "/360/helmet/5.png",
    "/360/helmet/6.png",
  ];

  const [current, setCurrent] = useState(0);

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        border: "3px solid red",
        textAlign: "center",
      }}
    >
      <h2>360 Viewer Test</h2>

      <img
        src={images[current]}
        alt="helmet"
        style={{
          width: "300px",
          margin: "auto",
          display: "block",
        }}
      />

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() =>
            setCurrent(
              current === 0
                ? images.length - 1
                : current - 1
            )
          }
        >
          Previous
        </button>

        <button
          onClick={() =>
            setCurrent(
              (current + 1) % images.length
            )
          }
          style={{ marginLeft: "20px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Product360;