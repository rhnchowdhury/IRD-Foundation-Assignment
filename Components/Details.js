import img1 from "../Components/assests/image1.png";
import Image from "next/image";
import { AiFillRightCircle } from "react-icons/ai";
import { IoMdPlayCircle } from "react-icons/io";
import { SiAdidas, SiNike, SiPuma, SiReebok } from "react-icons/si";

const Details = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image src={img1} alt='' className="max-w-sm rounded-lg shadow-2xl"></Image>
                <div>
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
        </div>
    );
};

export default Details;