import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CarService } from '../../../services/car.service';
import CarItem from '../home/car-item/CarItem';
import styles from '../home/Home.module.css';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import RemoveCar from '../../ui/RemoveCar';

const CarDetail = () => {

  const {id} = useParams();

  const {data, isLoading, error} = useQuery({
    queryKey: ['carById'],
    queryFn: () => CarService.getCar(id)
  });

  const {user} = useContext(AuthContext);

  if(!user) return <p>You are not authorized to use this page.</p>

  if(isLoading) return <p>Loading...</p>

  if(!data) return <div>Car not found</div>;

  return (
    <div>
      <Link to='/'>Back</Link>
      <CarItem styles={styles} {...data} />
      <RemoveCar carId={id} />
    </div>
  )
}

export default CarDetail;
