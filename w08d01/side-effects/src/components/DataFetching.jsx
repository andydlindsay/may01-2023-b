import {useEffect, useState} from 'react';
import axios from 'axios';

const DataFetching = () => {
  // useEffect(() => {
  //   fetch('http://localhost:8001/api/photos')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // });

  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const photoPromise = axios.get('/api/photos');
    const topicPromise = axios.get('/api/topics');

    const promises = [photoPromise, topicPromise];

    Promise.all(promises)
      .then((arrayOfResponses) => {
        console.log(arrayOfResponses);

        const photos = arrayOfResponses[0].data;
        const topics = arrayOfResponses[1].data;

        setPhotos(photos);
        setTopics(topics);
        // console.log(res.data);
        // setPhotos(res.data);
      });
  }, []);

  const photoMap = photos.map((photo) => {
    return <p key={photo.id}>{photo.description}</p>;
  });

  return (
    <div>
      <h2>Data Fetching!!!</h2>
      { photoMap }
    </div>
  );
};

export default DataFetching;
