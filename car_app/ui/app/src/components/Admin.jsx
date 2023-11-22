import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthProvider";
import Nav from "./ui/Nav";

const Admin = () => {

  const { register, reset, handleSubmit } = useForm();

  const {admin, setAdmin, db} = useContext(AuthContext)

  const sendAdminAuthData = data => {
    if(data.login === db.login && data.password === db.password) {
        setAdmin(true);
    }



    reset();
  }

  return (
    <div>
        <Nav/>
        <div>Admin panel</div>

        {!admin && (
        <form onSubmit={handleSubmit(sendAdminAuthData)}>
            <input
                placeholder="Login..."
                {...register('login', {required: true})}
            />
            <input
                placeholder="Password..."
                {...register('password', {required: true})}
            />

            <button>Submit</button>
        </form>
        )}

    </div>
  )
}

export default Admin;