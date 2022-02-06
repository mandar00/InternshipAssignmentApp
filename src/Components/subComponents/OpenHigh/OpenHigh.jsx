import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const OpenHigh=() =>{
    const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetch("https://mobile-app-challenge.herokuapp.com/data")
      .then((result) => result.json())
      .then((result) => {
        setDataList(result);
      });
  }, []);
return(
    <>
      <main role='main' className="mainSubSectionContainer">

            {dataList.map((val)=>{
                if(val.id===3){
                return(
                    <section key={val.id} className='subSectionContentContainer'>
                    <div className='subSectionTitle'>
                        <h1>{val.name}</h1>
                        <h4 style={{color:`${val.color}`}}>{val.tag}</h4>
                    </div>
                    <div className='subSectionContent'>
                        {val.criteria.map((value,index)=>{
                            const replace=value.variable.$1.values[0]
                            const result = value.text.split('$1').map((t,ind) => {return <h5
                             >
                             {ind===1?<NavLink to="/page/open_high_params">({replace})</NavLink>:" "}
                             {t}
                            </h5>;});
                            return(
                                <div key={index}>
                                    <p>{result}</p>
                                </div>
                            )
                           
                        })}
                    </div>
            </section>
                )
                }
            })}
          
      </main>
    </>)
}
export default OpenHigh