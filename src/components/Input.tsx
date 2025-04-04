import React from 'react'
import { CiSearch } from "react-icons/ci";
import '../styles/components/_input.scss'

interface InputProps {
    type: string;
    placeholder?: string;
    value?: string; 
    id?: string; 
    title?:string;
    onchange?: React.ChangeEventHandler<HTMLInputElement>
    onclick?: React.MouseEventHandler<HTMLButtonElement>;
    onsubmit?: React.FormEventHandler<HTMLFormElement>;
    onkeydown?: React.KeyboardEventHandler<HTMLInputElement>;
  }

const Input: React.FC<InputProps> = ({type, placeholder,value, id, title, onchange, onclick, onsubmit, onkeydown}) => {
  return (
    <form className='input-group' onSubmit={onsubmit}>
        <input className='input-area' onKeyDown={onkeydown} type={type}   onChange={onchange} placeholder={placeholder} value={value} id={id} title={title} />
        <button className='input-avatar' onClick={onclick} ><CiSearch type='typebtn'  /></button>
    </form>
  )
}

export default Input

