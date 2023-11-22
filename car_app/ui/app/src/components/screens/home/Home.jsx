import styles from './Home.module.css';
import CarItem from './car-item/CarItem';
import { useState, useEffect, useContext } from 'react';
import CreateCarForm from './create-car-form/CreateCarForm';
import { CarService } from '../../../services/car.service';
import Player from '../../VideoPlayer/Player';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Nav from '../../ui/Nav';

function Home() {

  const { data, isLoading, error } = useQuery({
    queryKey: ['cars'],
    queryFn: () => CarService.getAll(),
  });
  

  const {user, setUser} = useContext(AuthContext);
  const [userName, setUserName] = useState('');

  if(isLoading) return <p>Loading...</p>

  return (
    <div>

      <Nav/>

      <Player/>

      <div>
        {
          !user ? 
          (
            <>
              <button onClick={() => {if(userName.trim().length) setUser(userName)}}>Log In</button>
              <input onChange={e => setUserName(e.target.value)} />
            </>
          )
          :
          (
            <>
              <p>Hello { user.name }!</p>
              <button onClick={() => {setUserName(''); setUser(null);}}>Log Out</button>
            </>
          )
        }
      </div>

      <h1>Cars catalog</h1>

      <CreateCarForm/>

      <div>
        {
          data.length ?
          (data.map(car => (
            <CarItem key={car.id} styles={styles} {...car} />
          )))

          :

          (
            <p>There are no cars</p>
          )
        }
      </div>
    </div>
  );
};

export default Home;
