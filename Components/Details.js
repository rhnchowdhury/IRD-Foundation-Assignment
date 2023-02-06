import img1 from "../Components/assests/image1.png";
import img2 from "../Components/assests/Vector3.png";
import Image from "next/image";
import { AiFillRightCircle } from "react-icons/ai";
import { IoMdPlayCircle } from "react-icons/io";
import { SiAdidas, SiNike, SiPuma, SiReebok } from "react-icons/si";

const Details = () => {

    return (
        <div className="hero-content flex-col lg:flex-row-reverse mt-5 justify-between">
            <div>
                <div className="static">
                    <Image src={img1} alt='' className="max-w-sm h-96 rounded-lg shadow-2xl "></Image>
                </div>
                <div className="absolute px-3 py-1 bottom-36 lg:bottom-2/3 left-0 lg:left-2/4 rounded flex" style={{ background: '#FFFFFF' }}>
                    <Image src={img2} className=' h-10  rounded-full'></Image>
                    <div className="ml-1">
                        <h6 className="font-light font-semibold">150+</h6>
                        <p className="text-slate-400">Members</p>
                    </div>
                </div>
                <div className="absolute px-3 py-1 bottom-36 lg:bottom-36 left-2/4">
                    <Image src={img2} className=' h-10  rounded-full' style={{ background: 'red' }}></Image>
                </div>
            </div>
            <div className="lg:ml-10">
                <h1 className="text-5xl font-medium">Healthy in side</h1>
                <h1 className="text-5xl font-medium"><span style={{ color: '#8382EB' }}>fresh</span> out side</h1>
                <p className="py-6">Exercise is a very important need for our body. Health and <br /> fitness will be obtained if you can do regular exercise and <br /> run a healthy routine.</p>
                <button className=" text-white text-base font-normal btn" style={{ backgroundColor: '#264373' }}>Get started <span className="ml-2"><AiFillRightCircle></AiFillRightCircle></span></button>
                <button className="btn ml-2" style={{ backgroundColor: '#FFFFFF', color: '#264373' }}><span className="mr-1"><IoMdPlayCircle></IoMdPlayCircle></span>Learn more</button>
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
    );
};

export default Details;