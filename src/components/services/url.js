const baseUrl = (query, page, key) =>
  `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;

export default baseUrl;
