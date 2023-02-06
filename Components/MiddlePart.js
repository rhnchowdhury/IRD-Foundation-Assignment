import Image from 'next/image';
import img1 from '../Components/assests/Vector1.png';
const MiddlePart = () => {
    return (
        <div style={{ backgroundColor: '#9190E9' }}>
            <div className='flex'>
                <div>
                    <Image src={img1}></Image>
                </div>
                <div>
                    <p>Get that 11 line in 30 days</p>
                    <p>Learn more</p>
                </div>
            </div>
        </div>
    );
};

export default MiddlePart;