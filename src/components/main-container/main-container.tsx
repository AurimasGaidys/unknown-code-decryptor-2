import React, { Component, useState } from 'react';
import { encodedDataView } from '../encoded-text-component/encoded-text-view';
import { UseInput } from '../input-component/input';
import { GetValueCounts } from '../../helpers/count-freqancy';

export const MainContainer = () => {

  const [dataset, setDataset] = useState(Array(27).fill(0).map((x, i) => ""));
  const data = "0-19 1 2 3 4 5 6-7 8 9-5 4 2 1-10 11 2 11 8-12 13 14 5 16 17 1 8 6-18 19 9 20 9-10 14 8 21 9 14 19 9 22";
  const data2 = "5 11 18 18 1-2 22 11 26-7 14 5 3 17";
  const data3 = "23 2 3 5 6-23 1 24 14 25 13 9 22 1 19 16-10 14 8 21 9 14 19 16-19 1-7 3 13 19 16 14-2 3 19 6-19 9 18 3 13";

  // Get total for most frequent repeats
  const total = data + " " + data2 + " " + data3;
  const totalsArray = total.split("-").join(" ").split(" ");
  const result = GetValueCounts(totalsArray);

  return (
    <div className="App">
      <div>
        Decoder
        Encoded sentences:
        {encodedDataView(data, dataset)}
        {encodedDataView(data2, dataset)}
        {encodedDataView(data3, dataset)}
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>{dataset.map((x, i) => <div style={{fontSize: 16, padding: 3}}>{i}({result[i]}) <UseInput type="text" data={dataset} edit={setDataset} index={i} value={x} /><input></input></div>)}</div>
      {/* <p>{JSON.stringify(totalsArray)}</p> */}
      {/* <p style={{fontSize: 16}}>{JSON.stringify(result)}</p>  */}
    </div>)
}

