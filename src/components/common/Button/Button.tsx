import "./Button.css";

interface ButtonProps {
    text: string;
    type?: "submit";
    className: string;
}

export const Button = (props: ButtonProps) => {
    return <button className={props.className} type={props.type}>{props.text}</button>
}