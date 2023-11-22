import { useMutation } from "@tanstack/react-query"
import { CarService } from "../../services/car.service";
import { useNavigate } from "react-router-dom";

const RemoveCar = ({carId}) => {

  const nav = useNavigate();

  const {mutate} = useMutation({
    mutationFn: id =>
        CarService.remove(id),
    onSuccess: () => {
        nav('/');
    }
  });

  const handleRemoveCar = (id) => {
    console.log(id);
    mutate(id);
  }

  return (
    <div>
      
        <button onClick={() => handleRemoveCar(carId)}>Remove Car</button>

    </div>
  )
}

export default RemoveCar
