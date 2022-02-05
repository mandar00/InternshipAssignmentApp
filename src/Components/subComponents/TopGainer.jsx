import React, { useState, useEffect } from "react";

const TopGainer = ({ mainData }) => {
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
          {dataList.map((val)=>{
            if (val.id === 1) {
              return (
        <section className="subSectionContentContainer">
                <div key={val.id} className="subSectionTitle">
                  <h1>{val.name}</h1>
                  <h4 style={{color:`${val.color}`}}>{val.tag}</h4>
                </div>
                <div className="subSectionContent">
                    <p> {val.criteria[0].text}</p>
                </div>
        </section>
              );
            } 
         
          })}
      </main>
    </>
  );
};
export default TopGainer;
