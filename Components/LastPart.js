import Image from 'next/image';
import img1 from '../Components/assests/image2.png';
import { BsArrowRight } from "react-icons/bs";

const LastPart = () => {
    return (

        <div className="lg:m-48">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between ">
                <Image src={img1} alt='' className="max-w-sm h-80 w-80 shadow-2xl"></Image>

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