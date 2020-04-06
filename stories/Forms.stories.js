import React, { useState } from "react";
import {Forms} from "../src/components/Forms/Forms";
import {FormLoginData} from "../src/components/Forms/FormLoginData";
import {FormDisplayImage} from "../src/components/Forms/FormDisplayImage";
import {FormImages} from "../src/components/Forms/FormImages/FormImages";

export default {
    title: "Forms out of my head"
};

export function MyForms() {
   return <Forms/>
}

export function UserLogInData (){
    return <FormLoginData/>
}


export function DisplayImage (){
    return <FormDisplayImage/>
}

export function FormForImages() {
return <FormImages/>
}