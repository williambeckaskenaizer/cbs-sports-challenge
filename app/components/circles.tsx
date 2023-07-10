import { useEffect, useState } from "react";


interface Props {
    circleCount: number;
}

export default function Circles({ circleCount }: Props) {

    const [circles, setCircles] = useState([]);

    function getCircles() {
        let newCircles: any = [];
        for (let i = 0; i < circleCount; i++) {
            let randomHeight = Math.floor(Math.random() * 200).toString();
            let randomTop = Math.floor(Math.random() * window.innerHeight).toString();
            let randomLeft = Math.floor(Math.random() * (window.innerWidth)).toString();
            newCircles.push(<span style={{ marginTop: randomTop + 'px', marginLeft: randomLeft + 'px', position: 'absolute', height: `${randomHeight}px`, width: `${randomHeight}px`, backgroundColor: '#FFF', borderRadius: '100px', zIndex: 0, opacity: '20%' }} />)
        }
        setCircles(newCircles);
    }

    useEffect(() => {
        getCircles();
    }, [circleCount]);

    return (
        <div className='fixed flex bg-red-00 z-0 w-screen h-screen pointer-events-none'>
            {circles.map((circle, index) => <div key={index}>{circle}</div>)}
        </div >
    )
}