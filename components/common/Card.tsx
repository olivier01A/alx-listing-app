import React from "react";
import Image from "next/image";

export interface CardProps {
  title: string;
  description?: string;
  imageUrl: string;
  price?: string;
  location?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  price,
  location,
  onClick,
}) => {
  return (
    <div
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {location && <p className="text-sm text-gray-500">{location}</p>}
        {description && (
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        )}
        {price && <p className="text-base font-bold text-gray-900">{price}</p>}
      </div>
    </div>
  );
};

export default Card;

