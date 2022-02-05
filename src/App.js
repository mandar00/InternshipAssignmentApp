import React,{useEffect,useState} from 'react'
import {Route , Routes} from "react-router-dom"
import Home from './Components/Home';
import CCIParams from './Components/subComponents/CCIParams';
import CCIPeriodParams from './Components/subComponents/CCIPeriodParams';
import CSIReversal from './Components/subComponents/CSIReversal';
import IntradayBuying from './Components/subComponents/IntradayBuying';
import OpenHigh from './Components/subComponents/OpenHigh';
import OpenHighParams from './Components/subComponents/OpenHighParams';
import RSIOverbought from './Components/subComponents/RSIOverbought';
import RSIParams from './Components/subComponents/RSIParams';
import RSIParamsThree from './Components/subComponents/RSIParamsThree';
import RSIParamsTwo from './Components/subComponents/RSIParamsTwo';
import RSIPeriodParams from './Components/subComponents/RSIPeriodParams';
import TopGainer from './Components/subComponents/TopGainer';


function App() {
  const [dataList, setDataList] = useState([]);
    
  useEffect(() => {
    fetch("https://mobile-app-challenge.herokuapp.com/data")
      .then((result) => result.json())
      .then((result) => {
        setDataList(result)
      });
  },[]);



  return (
    <>

        <Routes>
          <Route exact path="/" element={<Home dataList={dataList}/>} ></Route>
          <Route exact path="/page/Top_gainers" element={<TopGainer/>} ></Route>
          <Route exact path="/page/Intraday_buying_seen_in_last_15_minutes" element={<IntradayBuying/>} ></Route>
          <Route exact path="/page/Open_=_High" element={<OpenHigh />} ></Route>
          <Route exact path="/page/open_high_params" element={<OpenHighParams />} ></Route>
          <Route exact path="/page/CCI_Reversal" element={<CSIReversal/>} ></Route>
          <Route exact path="/page/cci_array_params" element={<CCIParams/>} ></Route>
          <Route exact path="/page/cci_period_params" element={<CCIPeriodParams/>} ></Route>
          <Route exact path="/page/RSI_Overbought" element={<RSIOverbought/>} ></Route>
          <Route exact path="/page/rsi_params_one" element={<RSIParams/>} ></Route>
          <Route exact path="/page/rsi_params_two" element={<RSIParamsTwo/>} ></Route>
          <Route exact path="/page/rsi_params_three" element={<RSIParamsThree/>} ></Route>
          <Route exact path="/page/rsi_period_params" element={<RSIPeriodParams/>} ></Route>
        </Routes>
    </>
  );
}

export default App;
