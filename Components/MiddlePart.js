import Image from 'next/image';
import img1 from '../Components/assests/Vector1.png';
import img2 from '../Components/assests/Vector2.png';
import img3 from '../Components/assests/Vector3.png';

const MiddlePart = () => {
    return (
        <div className='m-16 lg:m-40'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 rounded-lg lg:py-4' style={{ backgroundColor: '#9190E9' }}>
                <div className='flex p-5'>
                    <div className='shadow-2xl rounded-xl p-2'>
                        <Image src={img1} alt='' className='mt-2'></Image>
                    </div>
                    <div className='lg:ml-1'>
                        <p className='text-white'>Get that 11 line <br />in 30 days</p>
                        <p className='text-white'>Learn more</p>

                    </div>
                </div>
                <div className='flex p-5'>
                    <div className='shadow-2xl rounded-xl p-2'>
                        <Image src={img2} alt='' className='mt-2'></Image>
                    </div>
                    <div className='lg:ml-1'>
                        <p className='text-white'>14 Days sherd<br />challenge</p>
                        <p className='text-white'>Learn more</p>
                    </div>
                </div>
                <div className='flex p-5'>
                    <div className='shadow-2xl rounded-xl p-2'>
                        <Image src={img3} alt='' className='mt-2'></Image>
                    </div>
                    <div className='ml-1'>
                        <p className='text-white'>Get flat belly<br />in 30 days</p>
                        <p className='text-white'>Learn more</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddlePart;