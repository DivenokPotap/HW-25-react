import { Link } from "react-router";
import styles from "./NotFound.module.css"

const NotFound = () => {
  
return(
   <div className={styles.wrap}>
   <h1>Помилка 404</h1>
    <h1>Такої сторінки нема!</h1>
    <Link to="/"><h2>Назад до домашньої сторінки</h2></Link>
   </div>
)
}

export default NotFound;