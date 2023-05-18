

export interface User {
  id: string;
  username: string;
  avg_rating: number;
  reviews: Review[];
}


export interface Admin {
    id: string;
    username: string;
    password: string;
    avg_rating: number;
  }

export interface Review {
  id: number;
  rating: number;
  comment: string;
  user: User;
  product: Item;
}

// test_item_eight = {
//     "name": "at",
//     "description": "atesc",
//     "price": 0,
//     "seller": "atci",
//     "image": "https://www.imgur.com/i/8",
//     "size": "38",
//     "colour": "pink",
//     "spec": "i5",
//     "rating": 0,
//     "reviews": [],
// }
export interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    seller: string;
    image: string;
    size: string;
    colour: string;
    spec: string;
    rating: number;
    reviews: Review[];
    }
