import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import TourCard from '../../components/TourCard/TourCard';
import { getTours } from '../../redux/features/tourSlice';

const Tours = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { tours, loading } = useSelector((state) => ({
    ...state.tour,
  }));

  useEffect(() => {
    dispatch(getTours());
  }, []);

  return (
    <>
      <div className="md:container md:mx-auto px-5 py-[50px]">
        <h2 className="text-[36px] text-center uppercase font-bold">
          Tours - Explore the world
        </h2>

        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 gap-8 mt-8 mb-16 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {tours?.map((tour) => (
              <TourCard key={tour._id} tour={tour} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Tours;
