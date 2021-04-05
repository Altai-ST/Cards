
import React, {useState} from 'react'
import css from './Style.module.css'
import image1 from '../images/cola.jpg'
import image2 from '../images/burger.jpg'
import image3 from '../images/nout.png'
import image4 from '../images/Pen.png'
import image5 from '../images/apple.jpg'

export const Product = ()=>{
    const mainProduct = [
        {
            id: 1,
            name: 'Cola',
            cost: '1$',
            },
         {
            id: 2,
            name: 'Burger',
            cost: '2$',
        },
        {
            id: 3,
            name: 'NoteBook',
            cost: '500$',
        },
        {
            id: 4,
            name: 'Pen',
            cost:'0.2$',
        },
        {
            id: 5,
            name: 'Apple',
            cost: '2$',
        }
    ]
    const [mainName, inputName] = useState({
        mainName: 'name',
        mainCost: '0',
        show: false,
    })

    
    const onCola = ()=>{
        if (mainName.show == false){
            inputName({mainName:mainProduct[0].name,mainCost: mainProduct[0].cost, show: true})    
            
        }else{
            inputName({mainName:mainProduct[0].name,mainCost: mainProduct[0].cost, show: false})   
        }
        
    }

    const onBurger = ()=>{
        if (mainName.show === false){
            inputName({mainName:mainProduct[1].name,mainCost: mainProduct[1].cost, show: true})   
        }else{
            inputName({mainName:mainProduct[1].name,mainCost: mainProduct[1].cost, show: false})    
        }
    }

    const onNote = ()=>{
        if (mainName.show === false){
            inputName({mainName:mainProduct[2].name,mainCost: mainProduct[2].cost, show: true})   
        }else{
            inputName({mainName:mainProduct[2].name,mainCost: mainProduct[2].cost, show: false})    
        }
    }

    const onPen = ()=>{
        if (mainName.show === false){
            inputName({mainName:mainProduct[3].name,mainCost: mainProduct[3].cost, show: true})   
        }else{
            inputName({mainName:mainProduct[3].name,mainCost: mainProduct[3].cost, show: false})    
        }
    }

    const onApple = ()=>{
        if (mainName.show === false){
            inputName({mainName:mainProduct[4].name,mainCost: mainProduct[4].cost, show: true})   
        }else{
            inputName({mainName:mainProduct[4].name,mainCost: mainProduct[4].cost, show: false})    
        }
    }

    
    return <div>
        <div className="box">
            <button onClick={onCola} className={css.btn} name='cola'>
                <div>Name:{mainProduct[0].name}</div> 
                <div>Cost:{mainProduct[0].cost}</div>
                <img src={image1} width='100px' alt=''/>
            </button>
            <button onClick={onBurger} className={css.btn}> 
                <div>Name:{mainProduct[1].name}</div>
                <div>Cost:{mainProduct[1].cost}</div>
                <img src={image2} width='100px' alt=''/>
            </button>

            <button onClick={onNote} className={css.btn}>
                <div>Name:{mainProduct[2].name}</div>
                <div>Cost:{mainProduct[2].cost}</div>
                <img src={image3} width='100px' alt=''/>
            </button>

            <button onClick={onPen} className={css.btn}>
                <div>Name:{mainProduct[3].name}</div>
                <div>Cost:{mainProduct[3].cost}</div>
                <img src={image4} width='100px' alt=''/>
            </button>

            <button onClick={onApple} className={css.btn}>
                <div>Name:{mainProduct[4].name}</div>
                <div>Cost:{mainProduct[4].cost}</div>
                <img src={image5} width='100px' alt=''/>
            </button>
        
            {mainName.show && <div><div>{mainName.mainName}{mainName.mainCost}</div></div>}
        </div>
    </div>
}

