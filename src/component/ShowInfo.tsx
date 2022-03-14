import React from 'react'
import {Product} from '../type/product'


    type ShowInfoProps = {
        person:Product
    }

    const ShowInfo = (props: ShowInfoProps) => {
       console.log(props);
       
        return (
            <div>ShowInfo</div>
        )
    }
    


export default ShowInfo;