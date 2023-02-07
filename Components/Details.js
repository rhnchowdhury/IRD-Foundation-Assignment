import img1 from "../Components/assests/image1.png";
import img2 from "../Components/assests/Vector4.png";
import img3 from "../Components/assests/vector5.png";
import img4 from "../Components/assests/vector6.png";
import img5 from "../Components/assests/vector7.png";
import Image from "next/image";
import { AiFillRightCircle } from "react-icons/ai";
import { IoMdPlayCircle } from "react-icons/io";
import { SiAdidas, SiNike, SiPuma, SiReebok } from "react-icons/si";

const Details = () => {

    return (
        <div className="m-10 lg:m-12">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                <div className="">
                    <div className="static">
                        <Image src={img1} alt='' className="max-w-sm h-96 rounded-lg shadow-2xl "></Image>
                    </div>
                    <div className="relative w-32 py-1 px-2 bottom-80 lg:bottom-80 rounded flex" style={{ background: '#FFFFFF', left: '-24%' }}>
                        <Image src={img2} alt='' className=' h-10  rounded-full'></Image>
                        <div className="ml-1">
                            <h6 className="font-semibold">150+</h6>
                            <p className="text-slate-400">Members</p>
                        </div>
                    </div>
                    <div className="relative px-3 py-1 bottom-36 lg:bottom-48 " style={{ left: '-25%' }}>
                        <Image src={img3} alt='' className='w-14 h-14 rounded-full' ></Image>
                    </div>
                    <div className="relative left-80 lg:left-80" style={{ bottom: '440px' }}>
                        <Image src={img4} alt='' className='w-14 h-14 rounded-full' ></Image>
                    </div>
                    <div className="relative px-1 py-1 w-36 bottom-72 left-64 lg:bottom-80 rounded lg:left-64 bg-white">
                        <Image src={img5} alt='' className=' h-10 w-10 lg:ml-10 rounded-full'></Image>
                        <div className="ml-1">
                            <h6 className="font-semibold">Zaqky Simorang</h6>
                            <p className="text-slate-400 lg:ml-5">Trainer</p>
                        </div>
                    </div>
                </div>
                <div className="lg:ml-10">
                    <h1 className="text-5xl font-medium">Healthy in side</h1>
                    <h1 className="text-5xl font-medium"><span style={{ color: '#8382EB' }}>fresh</span> out side</h1>
                    <p className="py-6">Exercise is a very important need for our body. Health and <br /> fitness will be obtained if you can do regular exercise and <br /> run a healthy routine.</p>
                    <button className=" text-white text-base font-normal btn" style={{ backgroundColor: '#264373' }}>Get started <span className="ml-2"><AiFillRightCircle></AiFillRightCircle></span></button>
                    <button className="btn ml-1 lg:ml-5" style={{ backgroundColor: '#FFFFFF', color: '#264373' }}><span className="mr-1"><IoMdPlayCircle></IoMdPlayCircle></span>Learn more</button>
                    <div className="mt-10">
                        <h6 className="text-base font-normal">Brands:</h6>
                        <div className="flex mt-3">
                            <p className="w-14 h-7 text-2xl" style={{ color: '#35507D' }}><SiNike></SiNike></p>
                            <p className="w-14 h-7 text-2xl" style={{ color: '#35507D' }}><SiAdidas></SiAdidas></p>
                            <p className="w-14 h-7 text-2xl" style={{ color: '#35507D' }}><SiPuma></SiPuma></p>
                            <p className="w-14 h-7 text-2xl" style={{ color: '#35507D' }}><SiReebok></SiReebok></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;