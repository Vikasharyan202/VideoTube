/* eslint-disable react/prop-types */

const Button = ({btnNames}) => {

    return(    
        <div>
            {btnNames.map((btn, index) => <button key={index} className="w-auto h-8 px-4 mx-2 rounded-md bg-slate-100 hover:bg-slate-200">{btn}</button>)}
        </div>          
    )
}
export default Button;