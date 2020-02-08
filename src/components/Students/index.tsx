import React from 'react';
import {Props} from "@/containers/students";


export const Students:React.FC<Props> = (props: Props)  => {
    return <div>
        {props.items ? props.items.map(item=><div key={item.id}>{item.fullName}</div>) : ''}
    </div>;
};
