import Image from 'next/image';
import img1 from '../Components/assests/image2.png';
import img2 from '../Components/assests/Vector (10).png';
import img3 from '../Components/assests/Vector (11).png';
import img4 from '../Components/assests/vector6.png';
import { BsArrowRight } from "react-icons/bs";

const LastPart = () => {
    return (

        <div className="m-10 lg:m-48">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between ">
                <div className=''>
                    <div className="static">
                        <Image src={img1} alt='' className="max-w-sm h-80 w-80 shadow-2xl"></Image>
                    </div>
                    <div className="relative px-3 py-1 bottom-80 lg:bottom-80 lg:left-6" >
                        <Image src={img2} className='w-10 h-10 rounded-full' ></Image>
                    </div>

                    <div className="relative flex w-32 h-14 bg-white py-1 bottom-32 lg:bottom-32  rounded " style={{ left: '-10%' }}>
                        <Image src={img3} className=' h-10 w-10  rounded-full'></Image>
                        <div className="ml-1">
                            <h6 className="font-semibold">800 kall</h6>
                            <p className="text-slate-400">Burn fat</p>
                        </div>
                    </div>
                    <div className="relative px-3 py-1 bottom-2/3 left-72 lg:bottom-2/3" >
                        <Image src={img4} className='w-14 h-14 rounded-full' ></Image>
                    </div>
                </div>
                <div className=''>
                    <h1 className="text-4xl font-medium">Best full body <br /> workout to lose fat</h1>
                    <p className="py-6">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
                    <button className="btn btn-primary" style={{ backgroundColor: '#264373' }}>Get Started <BsArrowRight className='ml-5'></BsArrowRight></button>
                </div>
            </div>
        </div>

    );
};

export default LastPart;