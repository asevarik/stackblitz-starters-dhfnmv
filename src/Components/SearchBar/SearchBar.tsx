import React, { ChangeEvent, useState } from 'react'
import debounce from 'lodash.debounce';
interface ISearchBarProps{
    onChange:(eventReact:string)=>void;
}
function SearchBar({onChange}:ISearchBarProps) {
    const debouncedOnChange = debounce((newValue: string) => {
        onChange(newValue);
      }, 500);
    
    const handleInputChange = (event:ChangeEvent<HTMLInputElement>)=>{
        debouncedOnChange(event.target.value)
    }
  return (
    <div className='w-full'>
     <input type="text" placeholder="Type here" className="input input-bordered	focus:border-transparent w-full" onChange={handleInputChange}/>
    </div>
  )
}

export default SearchBar
