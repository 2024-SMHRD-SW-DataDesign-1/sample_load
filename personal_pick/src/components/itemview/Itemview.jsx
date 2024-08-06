import React from 'react'
import './Itemview.scss'
import Star from '../../img/별.png'
import { useNavigate } from 'react-router-dom'

const Itemveiw = () => {

        let itemDic = [
                {
                        idx: 1,
                        brand_name: '브랜드이름1',
                        cos_name: '코스네임일',
                        cos_img_src: 'https://img.hwahae.co.kr/products/2107141/2107141_20240715175717.jpg?format=webp&size=600x600',
                        grade: 4.74,
                        grade_count: 2456,
                        price: 4000,
                        vol: 40,
                        ranking: '1'
                },
                {
                        idx: 2,
                        brand_name: '브랜드이름2',
                        cos_name: '코스네임이',
                        cos_img_src: 'https://img.hwahae.co.kr/products/1993475/1993475_20240312112855.jpg?format=webp&size=600x600',
                        grade: 4.74,
                        grade_count: 2456,
                        price: 4000,
                        vol: 40,
                        ranking: '34'
                },
                {
                        idx: 3,
                        brand_name: '브랜드이름3',
                        cos_name: '코스네임삼',
                        cos_img_src: 'https://img.hwahae.co.kr/products/1993475/1993475_20240312112855.jpg?format=webp&size=600x600',
                        grade: 4.74,
                        grade_count: 2456,
                        price: 4000,
                        vol: 40,
                        ranking: '34'
                },
                {
                        idx: 4,
                        brand_name: '브랜드이름4',
                        cos_name: '코스네임사',
                        cos_img_src: 'https://img.hwahae.co.kr/products/1832892/1832892_20220801000000.jpg?format=webp&size=600x600',
                        grade: 4.74,
                        grade_count: 2456,
                        price: 4000,
                        vol: 40,
                        ranking: '34'
                },
                {
                        idx: 5,
                        brand_name: '브랜드이름5',
                        cos_name: '코스네임오',
                        cos_img_src: "https://img.hwahae.co.kr/products/1897092/1897092_20220801000000.jpg?format=webp&size=600x600",
                        grade: 4.74,
                        grade_count: 2456,
                        price: 4000,
                        vol: 40,
                        ranking: '34'
                },
                {
                        idx: 6,
                        brand_name: '브랜드이름6',
                        cos_name: '코스네임육',
                        cos_img_src: 'https://img.hwahae.co.kr/products/2058047/2058047_20230808102719.jpg?format=webp&size=600x600',
                        grade: 4.74,
                        grade_count: 2456,
                        price: 4000,
                        vol: 40,
                        ranking: '34'
                }
        ]

        let rankingDic = [
                {id:1, rank:<svg xmlns="http://www.w3.org/2000/svg" width="30" height="37" fill="none" viewBox="0 0 30 36" class="mb-2" aria-label="[object Object]등"><path fill="#FA0" d="m23.34 10.75-8 2.94c-.22.08-.47.08-.69 0l-7.99-2.94c-.39-.14-.66-.52-.66-.94V4.75c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v5.06c0 .42-.26.79-.66.94"></path><path fill="#FFCD28" d="M15 32.25c6.351 0 11.5-5.149 11.5-11.5S21.351 9.25 15 9.25 3.5 14.399 3.5 20.75s5.149 11.5 11.5 11.5"></path><path fill="#FF961E" d="m15.34 13.68 6.3-2.31a11.464 11.464 0 0 0-13.28 0l6.3 2.31c.22.08.47.08.69 0z"></path><path fill="#fff" d="M14.945 16.75H16.5v9h-1.893v-7.104l-2.107.911v-1.746l2.445-1.05z"></path></svg>},
                {id:2, rank:<svg xmlns="http://www.w3.org/2000/svg" width="30" height="37" fill="none" viewBox="0 0 30 36" class="mb-2" aria-label="[object Object]등"><path fill="#999" d="m23.34 10.75-8 2.94c-.22.08-.47.08-.69 0l-7.99-2.94c-.39-.14-.66-.52-.66-.94V4.75c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v5.06c0 .42-.26.79-.66.94"></path><path fill="#C4C4C4" d="M15 32.25c6.351 0 11.5-5.149 11.5-11.5S21.351 9.25 15 9.25 3.5 14.399 3.5 20.75s5.149 11.5 11.5 11.5"></path><path fill="#AAA" d="m15.34 13.68 6.3-2.31a11.464 11.464 0 0 0-13.28 0l6.3 2.31c.22.08.47.08.69 0z"></path><path fill="#fff" d="M14.9 22.69h3.3v1.62h-5.98v-1.07l3.17-3.31c.7-.73.91-1.15.91-1.61 0-.56-.47-1-1.17-1-.79 0-1.24.54-1.24 1.09h-1.72c.11-1.64 1.28-2.65 2.96-2.65s2.88.88 2.88 2.49c0 .88-.33 1.56-1.26 2.51l-1.85 1.92z"></path></svg>},
                {id:3, rank:<svg xmlns="http://www.w3.org/2000/svg" width="30" height="37" fill="none" viewBox="0 0 30 36" class="mb-2" aria-label="[object Object]등"><path fill="#B96928" d="m23.34 10.75-8 2.94c-.22.08-.47.08-.69 0l-7.99-2.94c-.39-.14-.66-.52-.66-.94V4.75c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v5.06c0 .42-.26.79-.66.94"></path><path fill="#BF9A67" d="M15 32.25c6.351 0 11.5-5.149 11.5-11.5S21.351 9.25 15 9.25 3.5 14.399 3.5 20.75s5.149 11.5 11.5 11.5"></path><path fill="#A86127" d="m15.34 13.67 6.3-2.305a11.481 11.481 0 0 0-13.28 0l6.3 2.305c.22.08.47.08.69 0z"></path><path fill="#fff" d="M18.25 21.92c0 1.44-1.14 2.53-3 2.53-1.7 0-3.01-1-3.09-2.74h1.71c.05.77.55 1.24 1.38 1.24.7 0 1.28-.43 1.28-1.12 0-.69-.59-1.12-1.28-1.12h-.79v-1.44h.73c.64 0 1.1-.42 1.1-1.01 0-.59-.47-1.01-1.1-1.01-.8 0-1.15.5-1.16 1.06h-1.71c.02-1.64 1.4-2.55 2.89-2.55 1.61 0 2.81.97 2.81 2.39 0 .84-.46 1.43-1.14 1.78.86.36 1.38 1.07 1.38 1.99z"></path></svg>},
                {id:4, rank:4},
                {id:5, rank:5},
                {id:6, rank:6}
        ]


        // 데이터 6개만 받아올 예정!

        const nav = useNavigate();


        return (
                <div className='flex_row alldiv'>
                        {itemDic.map((item, idx) => (
                                <div className='itemBox flex_col' key={item.idx} onClick={()=> nav('detailinfo/'+idx)}>
                                      
                                        <div className='rank_num'  key={rankingDic[idx].id}>{rankingDic[idx].rank}</div>
                                        
                                        <img src={item.cos_img_src} alt="" style={{ width: 80, height: 80 }} className='rank_img' />
                                        <br />
                                        <div>
                                                <div className='rank_brand_name'>
                                                        {item.brand_name}
                                                </div>
                                                <div className='rank_cos_name'><span>&nbsp;{item.cos_name}</span></div>


                                                <div className='rank_grade'>
                                                        <img className='star' src={Star} alt="" />
                                                        <span className='rank_cos_grade'>&nbsp;{item.grade}</span>
                                                        <span className='rank_cos_grade_cnt'>   {"(" + item.grade_count + ")"}</span></div>

                                                <div className='rank_price' >
                                                        <span className='rank_text'>정가&nbsp;</span>
                                                        <span className='rank_cos_price'>{item.price + "원"}</span> 
                                                        <span className='rank_vol'>{"/" + item.vol + "ml"}</span>
                                                        </div>
                                                < br />
                                        </div>

                                </div>

                        ))}
                </div>
        )
}

export default Itemveiw