import Image from 'next/image';
import img1 from '../Components/assests/image2.png';
import { BsArrowRight } from "react-icons/bs";

const LastPart = () => {
    return (
        <div>
            <div className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <Image src={img1} alt='' className="max-w-sm rounded-lg shadow-2xl"></Image>
                    <div>
                        <h1 className="text-4xl font-medium">Best full body <br /> workout to lose fat</h1>
                        <p className="py-6">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
                        <button className="btn btn-primary" style={{ backgroundColor: '#264373' }}>Get Started <BsArrowRight className='ml-5'></BsArrowRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LastPart;