import React from 'react';
import Form from "./_form";
import {Redirect, useParams} from "react-router";

type RouterParams = {
    id?: string
};

export function Update() {
    const params: RouterParams = useParams();
    const id = params.id ? parseInt(params.id) : 0;

    if(id) {
        return <Form studentId={id} />;
    } else {
        return <Redirect to={'/'} />;
    }
}
