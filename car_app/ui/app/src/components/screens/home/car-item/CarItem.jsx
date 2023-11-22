import { useNavigate } from "react-router-dom";
import Price from "./Price";

function CarItem({styles, name, price, image, id}) {

    const navigate = useNavigate();

    return(
        <div className={styles.item}>
            <div className={styles.image} style={{ backgroundImage: `url(${image})`}}/>
            <div className={styles.info}>
                <h2>{name}</h2>
                <Price price={price} />
                <button onClick={() => navigate('/car-detail/'+id)}>Read more</button>
            </div>
        </div> 
    );
}

export default CarItem;