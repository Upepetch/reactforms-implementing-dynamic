import React from 'react'


export const CategorySelector = ({selectedCategory, onCategorySelect}) => {
  // const [selectedCategory, setSelectedCategory] = useState(null);

   const categories = ['Read Emails', 'Web Parsing', 'Send Emails'];

  const categoryStyles = {
    'Read Emails': {backgroundColor: 'orange'},
    'WebParsing': {backgroundColor: 'yellow'},
    'Send Emails': {backgroundColor: 'blue'},
    default: {backgroundColor: ' rgb(8, 124, 116)'}
  };

  return (
    <div>
       {categories.map((category) => (
      <button
          className= {`tag ${selectedCategory === category ? 'selected' : ''}`}
          type='button'
          key={category}
          onClick={() => onCategorySelect(category)}
          style={
            selectedCategory === category
              ? categoryStyles[category]
              : categoryStyles.default
          }
          
      >
        {category}
      </button>
    ))}

    </div>
  );
};
