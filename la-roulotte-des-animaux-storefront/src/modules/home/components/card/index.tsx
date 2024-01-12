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
    <div
        className="w-1/3 p-10 block rounded-3xl bg-white transition duration-300 ease-in-out transform hover:scale-105">
        <a href="#!">
            <h3 className="mb-2 text-xl font-vietnam font-semibold text-neutral-800 dark:text-neutral-50">
                {title}
            </h3>
            <img
                key={title}
                className="rounded-3xl w-full "
                src={image.url}
                alt="" />
            <p className="pt-6 text-base font-vietnam text-neutral-600 dark:text-neutral-200">
                {description}
            </p>
        </a>
    </div>
    );
};

export default Card;
