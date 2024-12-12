
import React, { useState } from 'react'
import Form1 from '../components/Form1';
import Form2 from '../components/Form2';
import Form3 from '../components/Form3';

export default function CreateChallan() {
  let [currentPage,setCurrentPage] = useState(1);
  let selectedColor = "text-blue-600 dark:text-blue-500";
  let selectedBorder = "dark:border-blue-500 border-blue-600";
  let unselectedBorder = "dark:border-gray-400 border-gray-500";

  let forms = [<Form1/>,<Form2/>,<Form3/>]

  return (
    <div>
      
<ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
    <li className={"flex items-center "+ selectedColor}>
        <span className={"flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0 "+selectedBorder}>
            1
        </span>
        Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
        <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
        </svg>
    </li>
    <li className={"flex items-center "+ (currentPage>=2? selectedColor:"")}>
        <span className={"flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0 "+(currentPage>=2 ? selectedBorder : unselectedBorder)}>
            2
        </span>
        Account <span className="hidden sm:inline-flex sm:ms-2">Info</span>
        <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
        </svg>
    </li>
    <li className={"flex items-center "+ (currentPage==3? selectedColor:"")}>
        <span className={"flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0 "+(currentPage==3 ? selectedBorder : unselectedBorder)}>
            3
        </span>
        Review
    </li>
</ol>


<div className='h-80'>
  {forms[currentPage-1]}
</div>


<button onClick={()=>{
  let count = (currentPage+1)%4;
  if(count==0)count++;
  setCurrentPage(count);
  console.log(count);
}} className='mt-10 ml-10 border px-5 py-2 rounded-xl bg-blue-400 text-white hover:bg-blue-500'>
  Next
</button>

    </div>
  )
}
