
export default function ProgressBar(props){
 
    return(
        <div>
        <div className="flex gap-2 mt-4">
            
             <img className="w-6 h-6" src={props.img}/>
            <div>
        <div className='bg-zinc-500/20 h-2 rounded-full overflow-hidden w-80 mt-2'>
            <div className={props.style1}></div>
        </div>
    </div>
    <p >{props.percent}</p>

  </div>
  <p className="ms-10 text-sm">{props.sub}</p>
  </div>
    )
}