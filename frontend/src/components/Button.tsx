
export const Button=({children,onClick,className=""}:{
    children:String;
    onClick:()=>void;
    className?:string;
})=>{
    return (<button onClick={onClick} className={`px-1 py-1 text-xl cursor-pointer hover:scale-105 text-white font-bold rounded ${className}`}>{children}</button>
    );
    }