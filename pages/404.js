import Image from "next/image";

const ErrorPage = () => {
    return (
        <div>
            <Image src='/error.avif' alt='' width={800} height={250}></Image>
        </div>
    );
};

export default ErrorPage;