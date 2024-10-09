import React from 'react'; 
import avatar1x from './avatar@1x.png';
import avatar2x from './avatar@2x.png';
import avatar3x from './avatar@3x.png';
import congratulations from './congratulations.gif';

function Avatar ({completedTodosCount,totalTodosCount}){
 
    const [ showGif, setShowGif]= React.useState(false);
    React.useEffect(() => {
        if (completedTodosCount > 0 && completedTodosCount === totalTodosCount) {
            setShowGif(true);
            const timer = setTimeout(() => {
                setShowGif(false);
            }, 1100); 
            return () => clearTimeout(timer);
        }
    }, [completedTodosCount, totalTodosCount]);

    return (

        <div className="relative mb-4">
            
            
            <div className=" absolute top-[-10px] right-[-37px]">
                <img 
                    src={congratulations} 
                    className={`w-16 ${!showGif ? 'hidden':'block'}`}
                    alt="Felicitaciones" 
                    />
            </div>
        
             
            <img 
                src={avatar1x} 
                srcSet={`${avatar1x} 1x, ${avatar2x} 2x, ${avatar3x} 3x`} 
                sizes="(max-width: 600px) 100vw, 50vw"
                className="block z" alt="Maia Aizner" 
            />

            <p className={`flex items-center justify-center rounded-full text-white w-[15px] h-[15px] text-[10px] font-bold absolute z-20 right-0 bottom-[-3px] 
                ${totalTodosCount === 0|| completedTodosCount === totalTodosCount ? 'bg-green-500' : 'bg-td-warning'}`}>
                {totalTodosCount}
            </p>
        </div>

    );
}

export{ Avatar };