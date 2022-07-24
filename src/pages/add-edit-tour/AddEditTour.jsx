import ChipInput from 'material-ui-chip-input';
import React, { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createTour, updateTour } from '../../redux/features/tourSlice';

const initialState = {
  title: '',
  description: '',
  tags: [],
};

const AddEditTour = () => {
  const [tourData, setTourData] = useState(initialState);
  const [tagErrMsg, setTagErrMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { title, description, tags } = tourData;
  const { error, userTours, loading } = useSelector((state) => ({
    ...state.tour,
  }));
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const singleTour = userTours.find((tour) => tour._id === id);
      setTourData({ ...singleTour });
    }
  }, [id]);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setTourData({ ...tourData, [name]: value });
  };

  const handleAddTag = (tag) => {
    setTagErrMsg(null);
    setTourData({ ...tourData, tags: [...tourData.tags, tag] });
  };
  const handleDeleteTag = (deleteTag) => {
    setTourData({
      ...tourData,
      tags: tourData.tags.filter((tag) => tag !== deleteTag),
    });
  };

  const handleClear = () => {
    setTourData({ title: '', description: '', tags: [] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tags.length) {
      return setTagErrMsg('Please provide some tags');
    }
    if (title && description && tags) {
      const updatedTourData = { ...tourData, name: user?.result?.name };

      if (!id) {
        dispatch(createTour({ updatedTourData, navigate, toast }));
      } else {
        dispatch(updateTour({ id, updatedTourData, toast, navigate }));
      }
      handleClear();
    }
  };

  return (
    <div className="md:container md:mx-auto flex justify-center items-center h-full px-5">
      <div className="card bg-neutral w-[500px]">
        <div className="card-body">
          <h2 className="card-title text-3xl text-center inline-block">
            {id ? 'Update Tour' : 'Add Tour'}
          </h2>
          <form className="mt-8" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Tour Title"
                className="input w-full"
                value={title}
                name="title"
                onChange={onInputChange}
                required
              />
            </div>
            <div className="mt-4">
              <textarea
                type="text"
                placeholder="Tour Description"
                className="textarea w-full"
                value={description}
                name="description"
                onChange={onInputChange}
                required
              ></textarea>
            </div>
            <div className="mt-3">
              <ChipInput
                name="tags"
                placeholder="Enter Tag"
                value={tags}
                onAdd={(tag) => handleAddTag(tag)}
                onDelete={(tag) => handleDeleteTag(tag)}
              />
              {tagErrMsg && <p className="text-error mt-1">{tagErrMsg}</p>}
            </div>
            <div className="mt-5">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setTourData({ ...tourData, imageFile: base64 })
                }
              />
            </div>
            {loading ? (
              <button className="btn loading btn-primary mt-4 w-full">
                loading
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-active btn-primary mt-4 w-full cursor-pointer"
              >
                {id ? 'Update Tour' : 'Add Tour'}
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEditTour;
