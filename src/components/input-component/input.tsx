import React, { Component, useState } from 'react';

interface Props {
    type: string;
    index: number;
    value: string;
    data: string[];
    edit: React.Dispatch<React.SetStateAction<string[]>>;
}

const updateValue = (value: string, props: Props) => {
    let newList = [...props.data];
    newList[props.index] = value
    props.edit(newList);
}

export const UseInput = (props: Props) => {
    const value = props.value;
    const input = <input value={value} onChange={e => updateValue(e.target.value, props)} type={props.type} />;
    return input;
}