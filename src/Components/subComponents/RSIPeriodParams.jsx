import React from 'react'

const RSIPeriodParams=() =>{
return(
    <>
       <main role="main" className="mainSubSectionContainer">
                <section className='subSectionContentContainer'>
                    <div className='CCIPeriodparams'>
                            <p>RSI </p><br/>
                            <p>Set Parameters</p>
                    </div>
                    <div className='CCIPeriodParamIndicator'>
                        <p>Period</p>
                        <input type="text" defaultValue='14'></input>
                    </div>
                </section>
            </main>

    </>)
}
export default RSIPeriodParams