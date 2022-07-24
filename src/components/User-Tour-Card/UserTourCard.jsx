import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserTourCard = ({ tour, handleDelete }) => {
  const navigate = useNavigate();
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
          <button
            onClick={() => navigate(`/editTour/${_id}`)}
            className="btn btn-sm bg-success text-neutral hover:text-white"
          >
            Edit
          </button>
          <button
            className="btn btn-sm bg-error text-neutral hover:text-white"
            onClick={() => handleDelete(_id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTourCard;
