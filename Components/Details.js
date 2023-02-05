import img1 from "../Components/assests/image1.png";
import Image from "next/image";
const Details = () => {
    return (

        <div className="m-16">
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image src={img1} alt='' className="max-w-sm rounded-lg shadow-2xl"></Image>
                    <div>
                        <h1 className="text-5xl font-bold">Healthy in side fresh out side</h1>
                        <p className="py-6">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                        <button className="btn btn-primary">Get Started</button>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;