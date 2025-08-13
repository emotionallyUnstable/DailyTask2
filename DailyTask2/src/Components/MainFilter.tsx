import { useState } from "react"

function MainFilter() {
const [inputValue, setInputValue] = useState("")



  const people = 
  [
    {name:"Yura"},
    {name:"Maria"},
    {name: "Anna"},
    {name: "Ivan"}
  ]

  const filteredList = people.filter(person => 
    person.name.toLowerCase().includes(inputValue.toLowerCase())
  )

  
  return (
    <>
    <div className="flex justify-center">
        <ul className="flex flex-col gap-1 border-1 w-[200px] mt-[200px]">
          <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="border-4" type="text" />

          {filteredList.map((person, index) => (
            <li className="border-1 flex justify-center"
             key={index}>{person.name}</li>
          ))}

        </ul>
    </div>
    </>
  )
}

export default MainFilter;