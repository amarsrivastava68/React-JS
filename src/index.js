import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: 'https://m.media-amazon.com/images/I/51JHnDoPVRL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        console.log(book);
        const { img, title, author } = book;
        return <Book book={book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);