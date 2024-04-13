export default function RevenueCards(props){
    return(
        <div className="h-40 w-[25%] rounded-lg border-2 border-gray-100  flex justify-center items-center
                  ">
                    <div>
                    <p className="text-zinc-400 text-sm tracking-wide">{props.head}</p>
                  <div className="flex gap-3 mt-2"> <p className="text-2xl font-bold tracking-wider">{props.amount}</p> <div className={props.style1}>{props.percent}</div></div>  
                  <p className="text-zinc-400 text-sm mt-2 tracking-wide"><span className={props.style2}>{props.diff}</span>than last <br/>month</p> 
                    </div>
      </div>
    )
}