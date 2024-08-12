import React from 'react'
import './Itemview.scss'
import Star from '../../img/별.png'
import { useNavigate } from 'react-router-dom'
import { setIcon } from '../../util/util'

const Itemveiw = ({data}) => {

    const nav = useNavigate();

    
    return (
        <div className='flex_row alldiv'>
            {data.length >0 && data.map((item, idx) => {
                if(idx>5)
                {
                    return;
                }
                return(
    
                    <div className='itemBox flex_col cursor' key={item.idx} onClick={() => nav('detailinfo/' + (idx + 1))}>
                        {/* 금메달, 은메달 등 rankingDic을 itemDic map 함수 돌린 거에 맞춰 꺼내옴 */}
                        <div className='rank_num' key={idx}>{setIcon(idx)}</div>
                        <img src={item.cos_img_src} alt="" style={{ width: 80, height: 80 }} className='rank_img' />
                        <div>
                            <div className='rank_name'>
                                <span className='rank_brand_name'>{item.brand_name} </span>
                            </div>
                                <span className='rank_cos_name'>{item.cos_name}</span>
                            <div className='rank_grade'>
                                <img className='star' src={Star} alt="" />
                                <span className='rank_cos_grade'>&nbsp;{item.grade}</span>
                                <span className='rank_cos_grade_cnt'> {"(" + item.grade_count + ")"}</span>
                            </div>
    
                            <div className='rank_price' >
                                <span className='rank_text'>정가&nbsp;</span>
                                <span className='rank_cos_price'>{item.price + "원"}</span>
                                <span className='rank_vol'>{"/" + item.vol + "ml"}</span>
                            </div>
                        </div>
                    </div>
            )})}
            
        </div>
    )
}

export default Itemveiw