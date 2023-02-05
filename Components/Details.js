import img1 from "../Components/assests/image1.png";
import img2 from "../Components/assests/nike.png";
import img3 from "../Components/assests/adidas.png";
import img4 from "../Components/assests/puma.png";
import img5 from "../Components/assests/reebok.png";
import Image from "next/image";
import { AiFillRightCircle } from "react-icons/ai";
import { IoMdPlayCircle } from "react-icons/io";

const Details = () => {
    return (

        <div className="">
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image src={img1} alt='' className="max-w-sm rounded-lg shadow-2xl"></Image>
                    <div>
                        <h1 className="text-5xl font-medium">Healthy in side</h1>
                        <h1 className="text-5xl font-medium"><span style={{ color: '#8382EB' }}>fresh</span> out side</h1>
                        <p className="py-6">Exercise is a very important need for our body. Health and <br /> fitness will be obtained if you can do regular exercise and <br /> run a healthy routine.</p>
                        <button className=" text-white text-base font-normal btn" style={{ backgroundColor: '#264373' }}>Get started <span className="ml-2"><AiFillRightCircle></AiFillRightCircle></span></button>
                        <button className="btn ml-8" style={{ backgroundColor: '#FFFFFF', color: '#264373' }}><span className="mr-1"><IoMdPlayCircle></IoMdPlayCircle></span>Learn more</button>
                        <div className="mt-10">
                            <h6 className="text-base font-normal">Brands:</h6>
                            <div className="flex gap-2 mt-3">
                                <Image src={img2} alt='' className="w-14 h-7" ></Image>
                                <Image src={img3} alt='' className="w-14 h-7"></Image>
                                <Image src={img4} alt='' className="w-14 h-7"></Image>
                                <Image src={img5} alt='' className="w-14 h-7"></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;