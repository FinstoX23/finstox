export default function HowItWorksCard({stepNumber,title}){
    return (
        <div className="bg-gradient-to-br from-[#2A7F26] to-[#223F21] rounded-2xl p-5 w-[320px] h-[400px]">
            <div className="mb-10">
                <img src={`card-image-${stepNumber}.png`}/>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="space-crus-italic">Step {stepNumber}:</h1>
                <h1 className="space-crus-italic">{title}</h1>
            </div>
        </div>
    )
}