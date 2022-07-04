import React, { useState } from "react";

const FromTodo = (props) => {
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        type="text"
        className="text"
        value={description}
        onChange={(e) => setDescription(e.vañue)}
      />
      <button className="" disabled={description ? "" : "disabled"}>
        Agregar
      </button>
    </div>
  );
};

export default FromTodo;
