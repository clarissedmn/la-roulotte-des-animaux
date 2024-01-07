import React from 'react';

type CardProps = {
    title: string;
    description: string;
    image: {
      url: string;
    }
}

const Card = ({ title, description, image }: CardProps) => {

    return (
        <>
    <div
        className="w-96 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 transition duration-300 ease-in-out transform hover:scale-105">
        <a href="#!">
            <img
                key={title}
                className="rounded-t-lg w-full overflow-hidden"
                src={image.url}
                alt="" />
        <div className="p-6">
            <h3 className="mb-2 text-xl font-vietnam font-semibold text-neutral-800 dark:text-neutral-50">
                {title}
            </h3>
            <p className="mb-4 text-base font-vietnam text-neutral-600 dark:text-neutral-200">
                {description}
            </p>
        </div>
        </a>
    </div>
    </>
    );
};

export default Card;
