"use client"

import { useState } from "react";
import { Select, MultiSelect, MultiSelectChip } from "select-dropdown";
import 'select-dropdown/dist/index.css'

const options = [
  { label: "Option 1", value: "option 1" },
  { label: "Option 2", value: "option 2" },
  { label: "Option 3", value: "option 3" },
  { label: "Hello 1", value: "Hello 1" },
];

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("");
  console.log(selectedValue);

  return (
    <div>
      <Select options={options} id="basic" onSelect={(value: any) => setSelectedValue(value)} />
      <MultiSelect options={options} id="basic" onSelect={(value: any) => setSelectedValue(value)} />
      <MultiSelectChip options={options} id="basic" onSelect={(value: any) => setSelectedValue(value)} />
    </div>
  )
}

