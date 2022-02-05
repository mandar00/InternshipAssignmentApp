import React, { useState, useEffect } from "react";

const RSIParams = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetch("https://mobile-app-challenge.herokuapp.com/data")
      .then((result) => result.json())
      .then((result) => {
        setDataList(result);
      });
  }, []);
  return (
    <>
      <main role="main" className="mainSubSectionContainer">
        <section className="subSectionContentContainer">
          {dataList.map((val) => {
            if (val.id === 5) {
              const data = val.criteria[0].variable.$1.values;
              return data.map((value) => {
                return (
                  <div className="openParams">
                    <p>{value}</p>
                  </div>
                );
              });
            }
          })}
        </section>
      </main>
    </>
  );
};
export default RSIParams;
