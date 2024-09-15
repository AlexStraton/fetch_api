import React, { useState } from "react";

function Dropdown() {
  const [sort, setSort] = useState("");

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSort(selectedValue);
  };

  return (
    <select value={sort} onChange={handleChange}>
      <option value='Ascending'>Ascending</option>
      <option value='Descending'>Descending</option>
    </select>
  );
}

export default Dropdown;
