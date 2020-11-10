import React, { Component } from 'react';
import { mostCommonWordsFilteredByLetters } from '../../data/most-comon-words';

export const encodedDataView = (data: string, dataset: string[], edit: React.Dispatch<React.SetStateAction<string[]>>) => {
   return <div style={{ display: "flex" }}>{data.split("-").map(x =>
      <div style={{ display: "flex", padding: 10, flexDirection: "column" }}>
         <select key={x} name="cars" id="cars" onChange={a => overrideLetters(a.target.value, x, dataset, edit)}>
            {mostCommonWordsFilteredByLetters(x.split(" ").length, x.split(" ").map(y => dataset[parseInt(y)])).map(x => <option value={x}>{x}</option>)}
         </select>
         <input value={x.split(" ").map(y => dataset[parseInt(y)]).join("")} onChange={a => overrideLetters(a.target.value, x, dataset, edit)}/>
         <div style={{ display: "flex" }}>{x.split(" ").map(y =>
            <div style={{ padding: 3 }}>{dataset[parseInt(y)] == "" ? y : dataset[parseInt(y)]}</div>
         )}</div>
      </div>)}</div>
}

export const overrideLetters = (newValue: string, wordData: string, dataset: string[], edit: React.Dispatch<React.SetStateAction<string[]>>) => {
   var letters = newValue.split("");
   var valueLetters = wordData.split(" ");
   var newDataSet = [...dataset];

   if (newValue == "") {
      valueLetters.forEach((element: string, i: number) => {
         var index = parseInt(element);
         newDataSet[index] = "";
      });
   } else {

      valueLetters.forEach((element: string, i: number) => {
         var index = parseInt(element);
         newDataSet[index] = letters[i];
      });
   }

   edit(newDataSet);
}