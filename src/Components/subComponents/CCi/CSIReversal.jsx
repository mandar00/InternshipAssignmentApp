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
              <section key={val.id} className="subSectionContentContainer">
                <div className="subSectionTitle">
                  <h1>{val.name}</h1>
                  <h4 style={{color:`${val.color}`}}>{val.tag}</h4>
                </div>
                <div className="subSectionContent">
                    {val.criteria.map((value,index)=>{
                        const link1=value.variable.$2.values[0]
                        
                        const result=value.text.split(/\$\d/).map((t,ind)=>{return (<h5 key={ind}>
                        {ind===1?<NavLink   to="/page/cci_period_params">(20)</NavLink>:" "}
                        {t }
                        {ind===2?<NavLink to="/page/cci_array_params">({link1})</NavLink>:" "}

                        </h5>)})
                        
                        console.log(result)
                        return(
                            <div key={index}>
                                    <span className="cciResults" >{result}</span>
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
