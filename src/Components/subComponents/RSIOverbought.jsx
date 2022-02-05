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
                        console.log(value.variable)
                        const result=value.text.split(/\$\d/).map((t,ind)=>{return (<h5>
                        {index===0 && ind===1?<NavLink to="/page/rsi_params_one">(2)</NavLink>:" "}
                        {index===1 && ind===1?<NavLink to="/page/rsi_params_two">(10)</NavLink>:" "}
                        {index===2 && ind===1?<NavLink to="/page/rsi_period_params">(14)</NavLink>:" "}
                        {t}
                        {index===1 && ind===2?<NavLink to="/page/rsi_params_three">(1.5)</NavLink>:" "}
                        
                        </h5>)})
                        return(
                            <div key={index}>
                                    <p>{result}</p>
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
