
interface Props {
    toggleGradient: () => void;
}

export default function GetStartedButton({ toggleGradient }: Props) {
    return (
        <div className="relative inline-flex  group">
            <div
                className="absolute transitiona-all duration-1000 opacity-0 -inset-px bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
            </div>
            <button
                aria-label='get started'
                onClick={() => toggleGradient()}
                className="relative hover:scale-110 ease-in-out inline-flex items-center justify-center px-8 py-2 text-lg font-bold text-black transition-all duration-200 bg-white font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                GET STARTED
            </button>
        </div>
    )
}