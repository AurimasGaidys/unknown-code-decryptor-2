import React, { Component } from 'react';

export const encodedDataView = (data: string, dataset: string[]) => {
   return <div style={{display: "flex"}}>{data.split("-").map(x => <div style={{display: "flex", padding: 10}}>{ x.split(" ").map(y => <div style={{padding: 3}}>{dataset[parseInt(y)]}</div>)}</div>)}</div>
}