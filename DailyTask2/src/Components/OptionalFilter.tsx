import { useState } from "react";


function OptionalFilter() {
  const [characters, setCharacters] = useState("")
  const [age, setAge] = useState("")

  const people = 
  [
    {id:1, name:"Anna", age:24},
    {id:2, name:"Victoria", age:22},
    {id:3, name:"Yura", age:20},
    {id:4, name:"Ivan", age:28},
    {id:5, name:"Alice", age:19}
  ]

  
  const filteredListByNameAndAge = people.filter(person => {
    const matchesName = person.name.toLowerCase().includes(characters.toLowerCase());
    const matchesAge = age === "" || person.age === Number(age);
    return matchesName && matchesAge;
  })
  
  

  return (
    <>
     <div className="h-screen flex justify-center">
      <ul className="flex flex-col gap-1 w-[200px] mt-[200px]">
        <input value={characters} onChange={(e) => setCharacters(e.target.value)} className="border-3" type="text" placeholder="Type a name of person..." />
        <input value={age} onChange={(e) => setAge(e.target.value)} className="border-3" type="text" placeholder="Type a age of person..." />
        {filteredListByNameAndAge.map((person) => (
          <li className="border-1 flex justify-center"
           key={person.id}>{person.name}, {person.age}</li>
        ))}
      </ul>
     </div>
    </>
  )
}

export default OptionalFilter;