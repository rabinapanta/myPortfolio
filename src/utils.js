// export const getImageUrl = (path) =>{
//     return new URL (`/assets/${path}`, import.meta.url).href;
// };

export const getImageUrl = (path) => {
    return `/assets/${path}`;
};

// export const getImageUrl = (path) => {
//     return `${import.meta.env.BASE_URL}assets/${path}`;
//   };
