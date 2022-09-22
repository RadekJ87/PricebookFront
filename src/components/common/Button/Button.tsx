import "./Button.css";
import {MouseEventHandler} from "react";

interface ButtonProps {
    text: string;
    type?: "submit";
    className: string;
    onClick?: MouseEventHandler;
}

export const Button = (props: ButtonProps) => {
    return <button className={props.className} type={props.type} onClick={props.onClick}>{props.text}</button>
}