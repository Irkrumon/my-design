import './Design.css';
import image from './images/clock 5.png'
import image1 from './images/Group 3182 (1).svg'

import image2 from './images/Rectangle 235 (1).png'
import image3 from './images/Rectangle 235 (2).png'
import image4 from './images/Rectangle 235.png'
import image5 from './images/pngwing 1.png'
function Design() {
    return <div className="container">
        <div className='box1'>
            <div className='spot'>
<div className='sp1'>
<p>SPOT RATE</p>
</div>
<div className='kk'>GOLD Oz</div>
<div className='boxxx'>
    <div className='op1'></div>
    <div className='op2'></div>
</div>
<hr/>
<div className='space'>
<div className='space1'>  </div>
<div className='space1'>  </div>
</div>
            </div>
            <div className='spot2'>

            </div>
            <div className='spot3'><img src={image1} />
                <p className='para'>-0.270%</p>
            </div>

            <div className='spot4'>

            </div>
        </div>
        <div className='box2'>
            <div className='time'>
                <div className='clock'>
                    <div className='images'>
                        <img src={image} alt='' width="120px" height="120px" />
                        <p>New York</p>
                    </div>
                    <div className='images'>
                        <img src={image} alt='' width="120px" height="120px" />
                        <p>London</p>
                    </div>
                    <div className='images'>
                        <img src={image} alt='' width="120px" height="120px" />
                        <p>Singapore</p>
                    </div>
                    <div className='images'>
                        <img src={image} alt='' width="120px" height="120px" />
                        <p>Hong Kong</p>
                    </div>
                    <div className='images'>
                        <img src={image} alt='' width="120px" height="120px" />
                        <p>Tokyo</p>
                    </div>
                </div>
                <div className='digital'>
                    <div><p className='AM'> 10:49 AM</p></div>
                    <div><p className='friday'>Friday</p></div>
                    <div><p className='date'>02 December 2022</p></div>
                </div>
            </div>
            <div className='graph'>
                <div className='lines'>

                </div>
            </div>
            <div className='logos'>
                <div className='lg1'>

                    <img src={image4} />
                    <p className='p4'>$13.38B</p>

                </div>
                <div className='lg2'>

                    <img src={image2} />
                    <p className='p4'>$13.38B</p>
                </div>
                <div className='lg3'>
                    <img src={image5} />
                    <p className='p4'>$13.38B</p>
                </div>
                <div className='lg4'>

                    <img src={image3} />
                    <p className='p4'>$13.38B</p>
                </div>

            </div>
            <div className='details'>
                <div className='c1'>
                    NEWS
                </div>
                <div className='c2'>
                    <p>
                    ow the latest Gold News, Gold rate, Gold price in India, Know thelatest Gold 
                    </p>
                </div>
            </div>

        </div>

    </div>

}
export default Design;