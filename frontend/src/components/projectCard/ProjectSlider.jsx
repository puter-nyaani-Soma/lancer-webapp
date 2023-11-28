import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Slide from '../slide/Slide';
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../utils/newRequest';

const ProjectSlider = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useQuery({
    queryKey: ['gigs'],
    queryFn: () =>
      newRequest.get('/gigs/top-10').then((res) => {
        console.log(res);
        setLoading(false);
        setData(res.data);
      }).catch((err) => {
        console.error(err);
        setLoading(false);
        setError('Something went wrong!');
      }),
  });

  return (
    <>
      <h1 className="font-bold text-4xl ml-10 mb-5 mt-10 relative right-0">
        Explore some of our top performing gigs
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Slide slidesToShow={4} arrowsScroll={4} direction={'left'}>
          {data.map((card) => (
            <ProjectCard key={card.id} card={card} />
          ))}
        </Slide>
      )}
    </>
  );
};

export default ProjectSlider;
