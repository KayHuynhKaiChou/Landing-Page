import React from 'react'
import workImage from '../../asserts/image/workTogether.png'
import star from '../../asserts/icon/Vector.png'
import style from '../card/Card.module.scss'

export default function Card(props) {

    const {
        urlImg = workImage,
        title = 'Learn marketing From Top Instructors',
        rating = 4.5,
        numWeek = 6,
        numStudent = '1.5k',
        price = '30.5$'
    } = props

    return (
        <div className={style['card']}>
            <img className={style['image-main']} src={urlImg} alt='img-work'/>
            <div className={style['card-content']}>
                <div className={style['title']}>
                    <p>{title}</p>
                    <img src={star} alt='star'/>
                </div>

            </div>
        </div>
    )
}
