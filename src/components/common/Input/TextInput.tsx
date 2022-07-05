interface InputProps {
    description: string,
    value?: string,
    onChange?: any,
    minLength: number,
    maxLength: number,
    name: string,
}

export const TextInput = (props: InputProps) => (
    <label>
        <p>
            {props.description}
        </p>
        <p>
            <input type="text" value={props.value} onChange={props.onChange} minLength={props.minLength} maxLength={props.maxLength}
                   name={props.name}/>
        </p>
    </label>
)