"use client"

import { useState } from 'react';
import { Select, MultiSelectChip, MultiSelectSearch } from 'select-dropdown-tw'
import 'select-dropdown-tw/dist/styles.css'

const options = [
  { label: "Option 1", value: "option 1" },
  { label: "Option 2", value: "option 2" },
  { label: "Option 3", value: "option 3" },
  { label: "Hello 1", value: "Hello 1" },
];

export default function Home() {

  const [selectedValue, setSelectedValue] = useState("");
  console.log(selectedValue)

  return (
    <div>
    <Select options={options} id="basic" onSelect={(value: any) => setSelectedValue(value)} />
    <MultiSelectSearch id="multiselect" options={options} type="checkbox" label="Select an option" onSelect={(value: any) => setSelectedValue(value)} />
    <MultiSelectChip options={options} type="checkbox" label="Select an option" onSelect={(value: any) => setSelectedValue(value)} />
    </div>
  )
}
