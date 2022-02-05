import React, { useState, useEffect } from "react";

const CCIParams=() =>{
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
            <main role="main" className="mainSubSectionContainer">
            <section className='subSectionContentContainer'>
                    {dataList.map((val)=>{

                        if(val.id===4){
                            const data=val.criteria[0].variable.$2.values
                            return(
                                data.map((value,ind)=>{
                                    return(
                                        <div key={ind} className='openParams'>
                                            <p>{value}</p>
                                        </div>
                                    )
                                })
                               
                            )
                        }
                    })}
                    
            </section>
      </main>
    </>)
}
export default CCIParams