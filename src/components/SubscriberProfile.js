export default function SubscriberProfile(props){
    return(
        <div>
        <div className="w-20 h-20 rounded-full border">
         <img src={props.path} alt="" className="w-full h-full rounded-full"/>
        </div>
        <p className="mt-2 text-center">
          {props.name}
        </p>
        </div>
    )
}