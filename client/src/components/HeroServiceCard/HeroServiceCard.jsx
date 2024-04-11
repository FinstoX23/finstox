export default function HeroServiceCard({title,body,translate}){
    return(
        <div className={`backdrop-blur-sm flex flex-col items-center justify-center gap-10 min-h-[400px] max-h-[400px] min-w-[300px] max-w-[300px] p-5 border-[1px] border-gray-500 rounded-lg italic card ${translate && "-translate-y-60 mx-10"}`}>
            <h1 className="uppercase w-full space-crus-italic text-lg text-center bg-gradient-to-r from-[#9A9A9A] via-[#AEAEAE] to-white bg-clip-text text-transparent">{title}</h1>
            <div className="flex flex-col items-center gap-5">
                {body.map((item,idx)=>(
                    <h1 key={idx} className=" uppercase space-crus-italic text-sm text-center bg-gradient-to-r from-[#9A9A9A] via-[#AEAEAE] to-white bg-clip-text text-transparent">{item}</h1>
                ))}
            </div>
        </div>
    )
}