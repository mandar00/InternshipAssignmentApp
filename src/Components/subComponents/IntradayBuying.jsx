import React, { useState, useEffect } from "react";

const IntradayBuying = () => {
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
        {dataList.map((val) => {
          if (val.id === 2) {
            return(

            <section className="subSectionContentContainer">
                <div className="subSectionTitle">
                    <h1>{val.name}</h1>
                    <h4  style={{color:`${val.color}`}}>{val.tag}</h4>
                </div>
                <div className="subSectionContent">
                    {val.criteria.map((value,index)=>{
                        return(
                            <div key={index}>
                            <p>{value.text}</p>
                            {index===val.criteria.length-1?" ":<p style={{fontSize:".7rem"}}>and</p>}
                            
                            </div>
                        )
                    })}
                </div>
            </section>
            ) 
          }
        })}
      </main>
    </>
  );
};
export default IntradayBuying;
