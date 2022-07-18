import React from 'react';

// const initialValue = {
//   user: {
//     id: 'asd',
//     password: 'asd',
//   },
//   posts: {
//     id: 'asd',
//     user: {
//       id: 'asd',
//       password: 'asd',
//     },
//   },
// };

// type User = typeof initialValue['user'];
// type Post = {
//     posts: {
//         id: string,
//         user: User
//     }
// };

// type LoginResult = {
//     user: User,
//     post: Post
// };

// type StringAndNumber = string | number;

// || (Or) && (and)
// | (union) & (Intersection)
type ImagePropsType = {
    src?: string
    alt?: string
};

type APropsType = {
    index?: string | number
    href?: string
};

type Props = ImagePropsType & APropsType;

function Anchor({
  index, href, src, alt,
}: Props) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <span>
        {index}
        -
      </span>
      <img src={src} className="logo" alt={alt} />
    </a>
  );
}

export default Anchor;
