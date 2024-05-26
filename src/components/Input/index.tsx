import { InputProps } from "../../types/Input";
import styles from "./Input.module.css"

export default function InputComponent(props: InputProps) {

  const type = props.type || "text"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleChange({ ...props.user, [props.id]: e.target.value });
  };

  return (
    <div>
      <label htmlFor={props.id} className={styles.label}>{props.label}</label>
      <input
        type={type}
        id={props.id}
        required
        value={props.value}
        className={styles.input}
        onChange={handleChange} />
    </div>
  )
}