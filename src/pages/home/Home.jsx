import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import TourCard from '../../components/TourCard/TourCard';
import { getTours } from '../../redux/features/tourSlice';

const Home = () => {
  const { tours, loading } = useSelector((state) => ({
    ...state.tour,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTours());
  }, []);

  if (loading) {
    return <Spinner />;
  }

  console.log(tours);

  return (
    <>
      {tours?.length === 0 && (
        <div className="flex justify-center items-center h-full">
          <h2 className="text-5xl font-normal leading-normal mt-0 mb-2 text-secondary">
            No tours found
          </h2>
        </div>
      )}
      <div className="md:container md:mx-auto px-5 pb-10 grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
        {tours?.map((tour) => (
          <TourCard key={tour._id} tour={tour} />
        ))}
      </div>
    </>
  );
};

export default Home;
