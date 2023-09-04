import axios from "axios";
axios.defaults.baseURL =
  'https://books-backend.p.goit.global';

export default class Book_api {
  RESOURCE = '/books';
  TOP_BOOKS = `${this.RESOURCE}/top-books`;
  CATEGORY_LIST = `${this.RESOURCE}/category-list`;
  CATEGORY = `${this.RESOURCE}/category`;
  constructor() {}
  async getCategoryList() {
    return await axios(this.CATEGORY_LIST).then(({ data }) => data);
  }
  async getTopBooks() {
    return await axios(this.TOP_BOOKS).then(({ data }) => data);
  }
  async getBookByCategory(category) {
    return await axios(
      `${this.CATEGORY}?category=${category}`
    ).then(({ data }) => data);
  }
  async getBookById(bookId) {
    return await axios(`${this.RESOURCE}/${bookId}`).then(({ data }) => data);
  }
}