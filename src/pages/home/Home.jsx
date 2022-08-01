import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hero from '../../components/Hero/Hero';
import Spinner from '../../components/Spinner/Spinner';
import TourCard from '../../components/TourCard/TourCard';
import { getTours } from '../../redux/features/tourSlice';

const Home = () => {
  const dispatch = useDispatch();

  const { tours, loading } = useSelector((state) => ({
    ...state.tour,
  }));

  useEffect(() => {
    dispatch(getTours());
  }, []);

  return (
    <>
      <Hero />

      <div className="md:container md:mx-auto px-5 py-[96px]">
        <h2 className="text-[36px] text-center uppercase font-bold">
          Latest Tours
        </h2>
        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {tours?.slice(-6)?.map((tour) => (
              <TourCard key={tour._id} tour={tour} />
            ))}
          </div>
        )}
      </div>
      <section className="bg-neutral mt-[72px] py-16 home-cta">
        <div className="px-8 py-20 lg:flex lg:justify-center container mx-auto">
          <div className="">
            <h3 className="text-[36px] font-bold text-center text-white leading-[55px]">
              “The biggest adventure you can take is to <br /> live the life of
              your dreams”
            </h3>

            <div className="items-center justify-center mt-4 lg:flex lg:gap-2"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
