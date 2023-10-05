import Card from '../../component/card/Card';
import Menu from '../../component/menu/Menu';
import Banner from '../../component/banner/Banner';
import Feature from '../../component/features/Feature';

export default function HomePage() {
  return (
      <div>
          <div className='container'>
              <Menu />
              <Banner />
              <Feature />
          </div>
          <div className='container mt-5 mb-5'>
              <div className='row g-3'>
                  <div className='col-md-4 col-sm-6'><Card /></div>
                  <div className='col-md-4 col-sm-6'><Card /></div>
                  <div className='col-md-4 col-sm-6'><Card /></div>
                  <div className='col-md-4 col-sm-6'><Card /></div>
                  <div className='col-md-4 col-sm-6'><Card /></div>
                  <div className='col-md-4 col-sm-6'><Card /></div>
              </div>
          </div>
      </div>
  )
}
