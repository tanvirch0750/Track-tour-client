import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Spinner from '../../components/Spinner/Spinner';
import UserTourCard from '../../components/User-Tour-Card/UserTourCard';
import { deleteTour, getToursByUser } from '../../redux/features/tourSlice';

const MyTour = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { userTours, loading } = useSelector((state) => ({ ...state.tour }));
  const userId = user?.result?._id;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(getToursByUser(userId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this tour ?')) {
      dispatch(deleteTour({ id, toast }));
    }
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      {userTours?.length === 0 && (
        <div className="flex justify-center items-center h-full">
          <h2 class="text-5xl font-normal leading-normal mt-0 mb-2 text-secondary">
            No tours found
          </h2>
        </div>
      )}
      <div className="md:container md:mx-auto px-5 pb-10 grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
        {userTours?.map((tour) => (
          <UserTourCard
            key={tour._id}
            tour={tour}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};

export default MyTour;
