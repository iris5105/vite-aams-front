import React from 'react';
import { useParams } from 'react-router-dom';

function CategoryPage() {
  const { id } = useParams();
  return (
        <div>
            <h1>Category {id}</h1>;
        </div>
        )
}

export default CategoryPage;
