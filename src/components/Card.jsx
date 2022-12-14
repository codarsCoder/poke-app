import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Colors from '../helper/Colors';


const Card = ({ name, base_experience, height, id, weight, types,abilities,sprites,species,stats,pokemon,crsl,allLikeList }) => {
  
  const dispatch = useDispatch()
    // const getAllLikeList = useSelector((state) => state.database.allLikes);
    const navigate = useNavigate()
    const color =Colors[types[0].type.name];
    const whist = allLikeList?.filter(item => item.pName == name).length;


    return (
        
            <div  className={`nft-card-wrapper ${crsl ? "" : "col-10 col-md-6 col-xl-3 p-3"}`}>
                <div className="nft-card-content">
                    <div onClick={()=>navigate(`/pokemon/${name}`,{state:{ name, base_experience, height, id, weight, types,abilities,sprites,species,stats,pokemon,allLikeList}})}  className="nft-card-media rounded">
                        <img style={{backgroundColor:`${color}`}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="axies" />

                       
                    </div>
                    <div className="nft-card-title"><h3 className='text-truncate'>{name} </h3><div className="tags" title='Type'>{types[0].type.name}</div></div>
                    <div className="meta-info">
                      
                        <div className="price"><span>Weight</span>
                            <p>{weight / 10}kg</p></div>
                        <div className="price"><span>Height</span>
                            <p>{height * 10}cm</p></div>
                             <div className="whislist"><FaRegHeart className='text-white fs-5 me-1' />{whist ? whist : 0}</div>
                    </div>
                </div>
            </div>
      
    )
}

export default Card