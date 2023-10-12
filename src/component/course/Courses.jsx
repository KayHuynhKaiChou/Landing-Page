import style from './Courses.module.scss'
import Card from '../../component/card/Card';
import { courses } from '../../data/course';

export default function Courses() {
  return (
    <div>
        <div className={style['courses-header']}>
            <div className={style['title']}>Most Popular courses</div>
            <div className={style['sort']}>
                <i class="fa-solid fa-chevron-down"></i>
                <div>Sort by</div>
            </div>
        </div>
        <div className='row g-5'>
            {courses.map(course => (
                <div className='col-md-4 col-sm-6'>
                    <Card 
                        urlImg = {course.image}
                        title = {course.title}
                        rating = {course.rate}
                        numWeek = {course.weeks}
                        numStudent = {course.students}
                        price = {course.price}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}
