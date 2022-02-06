import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


const RSIOverbought = () => {
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
        {dataList.map((val,DataIndex) => {
          if (val.id === 5) {
            return (
              <section key={val.id} className="subSectionContentContainer">
                <div className="subSectionTitle">
                <h1>{val.name}</h1>
                  <h4 style={{color:`${val.color}`}}>{val.tag}</h4>
                </div>
                <div className="subSectionContent">
                    {val.criteria.map((value,index)=>{
                        const link1=val.criteria[0].variable.$1.values[0]
                        const link2=val.criteria[1].variable.$2.values[0]
                        const link3=val.criteria[1].variable.$3.values[0]
                        const result=value.text.split(/\$\d/).map((t,ind)=>{return (<h5 key={ind}>
                        {index===0 && ind===1?<NavLink to="/page/rsi_params_one">({link1})</NavLink>:" "}
                        {index===1 && ind===1?<NavLink to="/page/rsi_params_two">({link2})</NavLink>:" "}
                        {index===2 && ind===1?<NavLink to="/page/rsi_period_params">(14)</NavLink>:" "}
                        {t}
                        {index===1 && ind===2?<NavLink to="/page/rsi_params_three">({link3})</NavLink>:" "}
                        
                        </h5>)})
                        return(
                            <div key={index}>
                                    <span className="cciResults">{result}</span>
                                    {index===val.criteria.length-1?" ":<h4 style={{color:"white"}}>and</h4>}
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
export default RSIOverbought;
