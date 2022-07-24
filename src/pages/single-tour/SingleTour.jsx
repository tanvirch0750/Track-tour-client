import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import { getTour } from '../../redux/features/tourSlice';

const SingleTour = () => {
  const dispatch = useDispatch();
  const { tour, loading } = useSelector((state) => ({ ...state.tour }));
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(getTour(id));
    }
  }, [id]);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="md:container md:mx-auto px-5 py-10">
      <div className="card bg-neutral">
        <figure className="w-full">
          <img
            className="w-full max-h-[600px]"
            src={tour?.imageFile}
            alt="tour"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center mb-4">
            <h2 className="card-title text-3xl">{tour?.title}</h2>
            <div className="flex gap-2">
              {tour?.tags?.map((tag, idx) => (
                <span key={idx} className="badge badge-info">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="card-actions">
            <div>
              Created By:{' '}
              <span className="inline-block bg-primary px-1 rounded-lg ml-2">
                {tour?.name}
              </span>
            </div>
          </div>

          <div>
            <p>
              Date:{' '}
              <span className="inline-block bg-primary px-1 rounded-lg ml-2">
                {moment(tour?.createdAt).fromNow()}
              </span>
            </p>
          </div>

          <div className="mt-8">
            <p>{tour?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTour;
