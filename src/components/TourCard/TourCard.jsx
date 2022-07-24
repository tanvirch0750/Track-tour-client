import React from 'react';
import { Link } from 'react-router-dom';

const TourCard = ({ tour }) => {
  const { title, imageFile, description, tags, _id, name } = tour;

  const excerpt = (str) => {
    if (str.length > 45) {
      str = str.substring(0, 45) + ' ...';
    }
    return str;
  };

  return (
    <div className="card bg-neutral shadow-xl">
      <figure className="w-full h-60">
        <img className="w-full h-full" src={imageFile} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <div className="flex gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span key={idx} className="badge badge-info">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-sm mb-4">
          {excerpt(description)}{' '}
          <Link className="text-primary" to={`/tour/${_id}`}>
            Read More
          </Link>
        </p>
        <div className="card-actions">
          <div>
            Creator:{' '}
            <span className="inline-block bg-primary p-1 rounded-lg ml-2">
              {name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
