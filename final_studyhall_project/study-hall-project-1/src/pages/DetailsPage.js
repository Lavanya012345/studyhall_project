import React from 'react';
import { useParams } from 'react-router-dom';
import StudyHallDetails from '../components/StudyHallDetails';

function DetailsPage() {
  const { id } = useParams();
  return (
    <div>
      <StudyHallDetails hallId={id} />
    </div>
  );
}

export default DetailsPage;
