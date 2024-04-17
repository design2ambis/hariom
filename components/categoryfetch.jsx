import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Category = () => {
  const [categories, setCategories] = useState([]);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResponse = await fetch('https://utsarvajewels.com/api/crud?all_category_list');
        const categoryData = await categoryResponse.json();
        if (categoryData.option.status === 200) {
         
          setCategories(categoryData.data);          
        //   setSubCategories(categoryData.data.subcat);          
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {categories.map((category) => (
        <li key={category.id} className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
            {category.name}
          </a>
          <ul className="dropdown-menu" role="menu">
                
            {category.subcat.map((sub) => (
                <li key={sub.sid}>
                    <Link to={`shop/${category.cname}/${sub.sname}/1`}>{sub.name}</Link>
                </li>
            ))}
         
          </ul>
        </li>
      ))}
    </>
  );
};

export default Category;
