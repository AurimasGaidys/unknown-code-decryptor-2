import React, { Component } from 'react';
import { mostCommonWordsFilteredByLetters } from '../../data/most-comon-words';

export const encodedDataView = (data: string, dataset: string[]) => {
   return <div style={{ display: "flex" }}>{data.split("-").map(x =>
      <div style={{ display: "flex", padding: 10, flexDirection: "column" }}>
         <select key={x} name="cars" id="cars" onChange={a => alert(a.target.value)}>
            {mostCommonWordsFilteredByLetters(x.split(" ").length, x.split(" ").map(y => dataset[parseInt(y)])).map(x => <option value={x}>{x}</option>)}
         </select>
         <input />
         <div style={{ display: "flex" }}>{x.split(" ").map(y =>
            <div style={{ padding: 3 }}>{dataset[parseInt(y)] == "" ? y : dataset[parseInt(y)]}</div>
         )}</div>
      </div>)}</div>
}

export const overrideLetters = (newValue: string, data: string, dataset: string[]) => {

}