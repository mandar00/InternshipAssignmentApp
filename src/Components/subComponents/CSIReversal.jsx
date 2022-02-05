import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


const CSIReversal = () => {
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
          if (val.id === 4) {
            return (
              <section className="subSectionContentContainer">
                <div className="subSectionTitle">
                  <h1>{val.name}</h1>
                  <h4 style={{color:`${val.color}`}}>{val.tag}</h4>
                </div>
                <div className="subSectionContent">
                    {val.criteria.map((value,index)=>{
                        const result=value.text.split(/\$\d/).map((t,ind)=>{return (<h5>
                        {ind===1?<NavLink to="/page/cci_period_params">(20)</NavLink>:" "}
                        {t}
                        {ind===2?<NavLink to="/page/cci_array_params">(100)</NavLink>:" "}

                        </h5>)})
                        
                        console.log(result)
                        return(
                            <div key={index}>
                                    <p>{result}</p>
                                </div>
                        )
                    })}
                </div>
              </section>
            );
          }
        })}
      </main>
    </>
  );
};
export default CSIReversal;
