import ChipInput from 'material-ui-chip-input';
import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useNavigate } from 'react-router-dom';

const initialState = {
  title: '',
  description: '',
  tags: [],
};

const AddEditTour = () => {
  const [tourData, setTourData] = useState(initialState);
  const navigate = useNavigate();
  const { title, description, tags } = tourData;

  console.log(tourData);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setTourData({ ...tourData, [name]: value });
  };

  const handleAddTag = (tag) => {
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

    handleClear();
  };

  return (
    <div className="md:container md:mx-auto flex justify-center items-center h-full px-5">
      <div class="card bg-neutral w-[500px]">
        <div class="card-body">
          <h2 class="card-title text-3xl text-center inline-block">Add Tour</h2>
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
                required
              />
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
            <button
              type="submit"
              className="btn btn-active btn-primary mt-4 w-full cursor-pointer"
            >
              Add Tour
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEditTour;
