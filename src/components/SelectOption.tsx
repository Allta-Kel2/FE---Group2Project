import React from 'react'

interface SelectOptionProps{
    label: string;
    name: string;
    type?: string;
    value: string;
    placeholder:string
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}


const SelectOption: React.FC<SelectOptionProps> = ({
    label, 
    name,
    type,
    value,
    onChange,
    placeholder
}) => {
    return (
        <div className="mb-1">
            <label className="label" htmlFor={name}>
                <span className="label-text font-semibold text-xl">{label}</span>
            </label>
            <select name={name} onChange={onChange} className="select select-bordered select-sm  ">
                <option disabled selected>Select Team</option>
                <option value={1}>Placement</option>
                <option value={2}>Mentor</option>
            </select>
        </div>
    )
}

export default SelectOption