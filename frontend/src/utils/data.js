export const categories = [
  {
    name: 'Java',
    image: 'https://thumbs.dreamstime.com/b/java-logo-java-logo-white-background-vector-format-available-127575473.jpg',
  },
  {
    name: 'Python',
    image: 'https://i.pinimg.com/originals/91/94/c9/9194c978fa63798b2e882e6fda5eb953.png',
  },
  {
    name: 'JavaScript',
    image: 'https://mpng.subpng.com/20180411/cvq/kisspng-javascript-html-computer-software-web-browser-watermark-5acdbd54ac19f7.4484983215234327887049.jpg',
  },
  {
    name: 'C++',
    image: 'https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue.png',
  },
  {
    name: 'HTML5',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png',
  },
  {
    name: 'CSS',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png',
  },
  {
    name: 'React',
    image: 'https://mpng.subpng.com/20180410/dbq/kisspng-react-javascript-responsive-web-design-github-angu-github-5accac24ced243.4761515415233628528472.jpg',
  },
  {
    name: 'Angular',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
  },
  {
    name: 'Vue',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/555px-Vue.js_Logo_2.svg.png',
  }, {
    name: 'Cloud-Computting',
    image: 'https://pngset.com/images/cloud-computing-logo-baseball-cap-clothing-text-vehicle-transparent-png-1476560.png',
  },
  {
    name: 'Microservices',
    image: 'https://comunytek.com/wp-content/uploads/2017/03/Microservices.png',
  }, {
    name: 'Projects',
    image: 'https://qph.fs.quoracdn.net/main-qimg-a3d793bb3d518f4f8eeae44e53dc6814',
  }, {
    name: 'Blockchain',
    image: 'https://www.mgscreativa.com/images/stories/virtuemart/product/logo-blockchain6.png',
  },
  {
    name: 'others',
    image: 'https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg',
  },
];

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
  image{
    asset->{
      url
    }
  },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    } `;

export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
    image{
      asset->{
        url
      }
    },
    _id,
    title, 
    about,
    category,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
   save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    }
  }`;
  return query;
};

export const pinDetailMorePinQuery = (pin) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
        image{
          asset->{
            url
          }
        },
            _id,
            destination,
            postedBy->{
              _id,
              userName,
              image
            },
            save[]{
              _key,
              postedBy->{
                _id,
                userName,
                image
              },
            },
          }`;
  return query;
};

export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};
