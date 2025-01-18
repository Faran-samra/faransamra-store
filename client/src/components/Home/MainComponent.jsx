import React, { useEffect } from 'react'
import Banner from "./Banner"
import "./MainComponent.css"
import { getProducts } from '../redux/action/action'
import {useDispatch,useSelector} from 'react-redux';

const MainComponent = () => {
  const {products} = useSelector(state => state.getProductdata);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
  

  return (
    <div className='home-section'>
      <div className='banner-part'>
        <Banner/>
      </div>
    </div>
  )
}

export default MainComponent