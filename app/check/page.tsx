"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
function DataPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "http://188.166.2.188/api/users/dashboard"
      );
      const result = response.data;
      setData(result);
      console.log(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from API</h1>
      {/* <ul>
        {data.map((item) => (
          <li>{item}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataPage;
