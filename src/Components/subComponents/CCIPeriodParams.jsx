import React from 'react'

const CCIPeriodParams=() =>{
return(
    <>
            <main role="main" className="mainSubSectionContainer">
                <section className='subSectionContentContainer'>
                    <div className='CCIPeriodparams'>
                            <p>CCI </p><br/>
                            <p>Set Parameters</p>
                    </div>
                    <div className='CCIPeriodParamIndicator'>
                        <p>Period</p>
                        <input type="text" defaultValue='20'></input>
                    </div>
                </section>
            </main>

    </>)
}
export default CCIPeriodParams