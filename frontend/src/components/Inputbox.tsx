
export default function Inputbox({label,placeholder,onChange}:{
    label:string,
    placeholder:string,
    onChange:(e: React.ChangeEvent<HTMLInputElement>) =>void
}){
    return(
        <div>
            <div className="text-md font-medium text-left py-2">
                {label}
            </div>
            <div>
                <input type="text" placeholder={placeholder} className="w-full px-2 bg-white py-1 border rounded border-slate-200" onChange={onChange}></input>
            </div>
        </div>
    )
}