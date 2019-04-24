import * as actions from './actions';

const initialState = {
  id: '',
  image: '',
  likeState: false,
  likedBy: [],
  comments: [],
  data: {
    userName: 'iamsrk',
    profilePic: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/9c93ee9cd7848b71c17e7e496e9e2f09/5D3A4460/t51.2885-19/11821175_1046879962002756_496959586_a.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
    fullName: 'Shah Rukh Khan',
    followedBy: ['aliaabhatt', 'ranveersingh'],
    posts: 483,
    followers: '16.9m',
    following: 6,
    images: [
      {
        id: 1,
        image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/b71426062b9e65f0dafe9bc14cd31633/5CC08232/t51.2885-15/e15/52841327_618400701952954_2506809471281465910_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
        likedBy: ['aliaabhatt', 'ranveersingh', 'asingh', 'akumar', 'rajeev', 'manish'],
        comments: [
          {
            by: 'avanti',
            comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            time: '1w',
            likes: '132',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/90aa7f65fe95f3e90a3845d98ac1da80/5D3E8F79/t51.2885-19/s150x150/57303622_325280051463386_3652803332298244096_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          },
          {
            by: 'ysingh',
            comment: 'standard dummy text ever since the 1500s',
            time: '2w',
            likes: '32',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/19b8400b297ba10d1ac243258e04202a/5D6FD25B/t51.2885-19/s150x150/57253562_416041492514151_6884806530806317056_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          },
          {
            by: 'akumar',
            comment: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            time: '3w',
            likes: '12',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/abf5b9ae9babf8883d5166b0a3c2329b/5D70B96E/t51.2885-19/s150x150/47114819_2269758739937549_1730972348292530176_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          }
        ]
      },
      {
        id: 2,
        image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/dc32cfcd00838ce265364f524d04d0b0/5D74B27E/t51.2885-15/e35/54447089_157697261902036_2805372222175351836_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net&se=8',
        likedBy: ['aliaabhatt', 'ranveersingh', 'asingh', 'akumar', 'rajeev', 'manish'],
        comments: [
          {
            by: 'avanti',
            comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            time: '1w',
            likes: '132',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/90aa7f65fe95f3e90a3845d98ac1da80/5D3E8F79/t51.2885-19/s150x150/57303622_325280051463386_3652803332298244096_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          },
          {
            by: 'ysingh',
            comment: 'standard dummy text ever since the 1500s',
            time: '2w',
            likes: '32',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/19b8400b297ba10d1ac243258e04202a/5D6FD25B/t51.2885-19/s150x150/57253562_416041492514151_6884806530806317056_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          },
          {
            by: 'akumar',
            comment: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            time: '3w',
            likes: '12',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/abf5b9ae9babf8883d5166b0a3c2329b/5D70B96E/t51.2885-19/s150x150/47114819_2269758739937549_1730972348292530176_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          }
        ]
      },
      {
        id: 3,
        image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/d6986a4f0fd593c432ec18720acbdbcf/5CC07B39/t51.2885-15/e15/53070155_2305618903042151_6400536694409555072_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
        likedBy: ['aliaabhatt', 'ranveersingh', 'asingh', 'akumar', 'rajeev', 'manish'],
        comments: [
          {
            by: 'avanti',
            comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            time: '1w',
            likes: '132',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/90aa7f65fe95f3e90a3845d98ac1da80/5D3E8F79/t51.2885-19/s150x150/57303622_325280051463386_3652803332298244096_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          },
          {
            by: 'ysingh',
            comment: 'standard dummy text ever since the 1500s',
            time: '2w',
            likes: '32',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/19b8400b297ba10d1ac243258e04202a/5D6FD25B/t51.2885-19/s150x150/57253562_416041492514151_6884806530806317056_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          },
          {
            by: 'akumar',
            comment: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            time: '3w',
            likes: '12',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/abf5b9ae9babf8883d5166b0a3c2329b/5D70B96E/t51.2885-19/s150x150/47114819_2269758739937549_1730972348292530176_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          }
        ]
      },
      {
        id: 4,
        image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/a2f7ca4533de9f961fe071c2d4af1099/5D44485B/t51.2885-15/e35/53482480_1922380921224714_4556301230912269312_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net&se=8',
        likedBy: ['aliaabhatt', 'ranveersingh', 'asingh', 'akumar', 'rajeev', 'manish'],
        comments: [
          {
            by: 'avanti',
            comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            time: '1w',
            likes: '132',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/90aa7f65fe95f3e90a3845d98ac1da80/5D3E8F79/t51.2885-19/s150x150/57303622_325280051463386_3652803332298244096_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          },
          {
            by: 'ysingh',
            comment: 'standard dummy text ever since the 1500s',
            time: '2w',
            likes: '32',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/19b8400b297ba10d1ac243258e04202a/5D6FD25B/t51.2885-19/s150x150/57253562_416041492514151_6884806530806317056_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          },
          {
            by: 'akumar',
            comment: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            time: '3w',
            likes: '12',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/abf5b9ae9babf8883d5166b0a3c2329b/5D70B96E/t51.2885-19/s150x150/47114819_2269758739937549_1730972348292530176_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          }
        ]
      },
      {
        id: 5,
        image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/4dd3a47ff9ee69fa2553e307f6f23271/5CC07AC4/t51.2885-15/e15/52859544_426566221423603_4177919198551586345_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
        likedBy: ['aliaabhatt', 'ranveersingh', 'asingh', 'akumar', 'rajeev', 'manish'],
        comments: [
          {
            by: 'avanti',
            comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            time: '1w',
            likes: '132',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/90aa7f65fe95f3e90a3845d98ac1da80/5D3E8F79/t51.2885-19/s150x150/57303622_325280051463386_3652803332298244096_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          },
          {
            by: 'ysingh',
            comment: 'standard dummy text ever since the 1500s',
            time: '2w',
            likes: '32',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/19b8400b297ba10d1ac243258e04202a/5D6FD25B/t51.2885-19/s150x150/57253562_416041492514151_6884806530806317056_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          },
          {
            by: 'akumar',
            comment: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            time: '3w',
            likes: '12',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/abf5b9ae9babf8883d5166b0a3c2329b/5D70B96E/t51.2885-19/s150x150/47114819_2269758739937549_1730972348292530176_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          }
        ]
      },
      {
        id: 6,
        image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/1cd4b4be902d1b03feac97b7124ecacc/5CC08ECE/t51.2885-15/e15/53305645_618738768596951_4345006943485981587_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
        likedBy: ['aliaabhatt', 'ranveersingh', 'asingh', 'akumar', 'rajeev', 'manish'],
        comments: [
          {
            by: 'avanti',
            comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            time: '1w',
            likes: '132',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/90aa7f65fe95f3e90a3845d98ac1da80/5D3E8F79/t51.2885-19/s150x150/57303622_325280051463386_3652803332298244096_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          },
          {
            by: 'ysingh',
            comment: 'standard dummy text ever since the 1500s',
            time: '2w',
            likes: '32',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/19b8400b297ba10d1ac243258e04202a/5D6FD25B/t51.2885-19/s150x150/57253562_416041492514151_6884806530806317056_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          },
          {
            by: 'akumar',
            comment: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            time: '3w',
            likes: '12',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/abf5b9ae9babf8883d5166b0a3c2329b/5D70B96E/t51.2885-19/s150x150/47114819_2269758739937549_1730972348292530176_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          }
        ]
      },
      {
        id: 7,
        image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/13303491ae0f266d1daa3e99f0450e56/5CBFF371/t51.2885-15/e15/52761077_610557979415309_653021392047158222_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
        likedBy: ['aliaabhatt', 'ranveersingh', 'asingh', 'akumar', 'rajeev', 'manish'],
        comments: [
          {
            by: 'avanti',
            comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            time: '1w',
            likes: '132',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/90aa7f65fe95f3e90a3845d98ac1da80/5D3E8F79/t51.2885-19/s150x150/57303622_325280051463386_3652803332298244096_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          },
          {
            by: 'ysingh',
            comment: 'standard dummy text ever since the 1500s',
            time: '2w',
            likes: '32',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/19b8400b297ba10d1ac243258e04202a/5D6FD25B/t51.2885-19/s150x150/57253562_416041492514151_6884806530806317056_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          },
          {
            by: 'akumar',
            comment: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            time: '3w',
            likes: '12',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/abf5b9ae9babf8883d5166b0a3c2329b/5D70B96E/t51.2885-19/s150x150/47114819_2269758739937549_1730972348292530176_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          }
        ]
      },
      {
        id: 8,
        image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/2b2fae3de139c435cdea39e3939be508/5D4100C0/t51.2885-15/e35/53070166_123318342071025_2066132368930925894_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net&se=7',
        likedBy: ['aliaabhatt', 'ranveersingh', 'asingh', 'akumar', 'rajeev', 'manish'],
        comments: [
          {
            by: 'avanti',
            comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            time: '1w',
            likes: '132',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/90aa7f65fe95f3e90a3845d98ac1da80/5D3E8F79/t51.2885-19/s150x150/57303622_325280051463386_3652803332298244096_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          },
          {
            by: 'ysingh',
            comment: 'standard dummy text ever since the 1500s',
            time: '2w',
            likes: '32',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/19b8400b297ba10d1ac243258e04202a/5D6FD25B/t51.2885-19/s150x150/57253562_416041492514151_6884806530806317056_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          },
          {
            by: 'akumar',
            comment: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            time: '3w',
            likes: '12',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/abf5b9ae9babf8883d5166b0a3c2329b/5D70B96E/t51.2885-19/s150x150/47114819_2269758739937549_1730972348292530176_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          }
        ]
      },
      {
        id: 9,
        image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/c1ae8f5d5b7b8db0942d1ac12002c2d3/5CC0679D/t51.2885-15/e15/51816654_336210533667662_8912414053731887548_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
        likedBy: ['aliaabhatt', 'ranveersingh', 'asingh', 'akumar', 'rajeev', 'manish'],
        comments: [
          {
            by: 'avanti',
            comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            time: '1w',
            likes: '132',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/90aa7f65fe95f3e90a3845d98ac1da80/5D3E8F79/t51.2885-19/s150x150/57303622_325280051463386_3652803332298244096_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          },
          {
            by: 'ysingh',
            comment: 'standard dummy text ever since the 1500s',
            time: '2w',
            likes: '32',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/19b8400b297ba10d1ac243258e04202a/5D6FD25B/t51.2885-19/s150x150/57253562_416041492514151_6884806530806317056_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          },
          {
            by: 'akumar',
            comment: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            time: '3w',
            likes: '12',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/abf5b9ae9babf8883d5166b0a3c2329b/5D70B96E/t51.2885-19/s150x150/47114819_2269758739937549_1730972348292530176_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          }
        ]
      },
      {
        id: 10,
        image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/b48e567451b15fcad7b1084b5080c66f/5CC0D670/t51.2885-15/e15/52527565_1105874006264693_7162414995742946904_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
        likedBy: ['aliaabhatt', 'ranveersingh', 'asingh', 'akumar', 'rajeev', 'manish'],
        comments: [
          {
            by: 'avanti',
            comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            time: '1w',
            likes: '132',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/90aa7f65fe95f3e90a3845d98ac1da80/5D3E8F79/t51.2885-19/s150x150/57303622_325280051463386_3652803332298244096_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          },
          {
            by: 'ysingh',
            comment: 'standard dummy text ever since the 1500s',
            time: '2w',
            likes: '32',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/19b8400b297ba10d1ac243258e04202a/5D6FD25B/t51.2885-19/s150x150/57253562_416041492514151_6884806530806317056_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          },
          {
            by: 'akumar',
            comment: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            time: '3w',
            likes: '12',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/abf5b9ae9babf8883d5166b0a3c2329b/5D70B96E/t51.2885-19/s150x150/47114819_2269758739937549_1730972348292530176_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          }
        ]
      },
      {
        id: 11,
        image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/05a5aa8df371851b87fddd737e82d988/5D367220/t51.2885-15/e35/51942531_414113669395234_8727599837753856905_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net&se=7',
        likedBy: ['aliaabhatt', 'ranveersingh', 'asingh', 'akumar', 'rajeev', 'manish'],
        comments: [
          {
            by: 'avanti',
            comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
            time: '1w',
            likes: '132',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/90aa7f65fe95f3e90a3845d98ac1da80/5D3E8F79/t51.2885-19/s150x150/57303622_325280051463386_3652803332298244096_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          },
          {
            by: 'ysingh',
            comment: 'standard dummy text ever since the 1500s',
            time: '2w',
            likes: '32',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/19b8400b297ba10d1ac243258e04202a/5D6FD25B/t51.2885-19/s150x150/57253562_416041492514151_6884806530806317056_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          },
          {
            by: 'akumar',
            comment: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            time: '3w',
            likes: '12',
            image: 'https://instagram.fblr2-1.fna.fbcdn.net/vp/abf5b9ae9babf8883d5166b0a3c2329b/5D70B96E/t51.2885-19/s150x150/47114819_2269758739937549_1730972348292530176_n.jpg?_nc_ht=instagram.fblr2-1.fna.fbcdn.net',
          }
        ]
      }
    ],
  }
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.ADD_POST:
      const comment = action.data.comment;
      return { ...state, comments: state.comments.concat(comment) };
    case actions.LIKE_IMAGE:
      return { ...state, likedBy: state.likedBy.concat(state.data.userName), likeState: true };
    case actions.UNLIKE_IMAGE:
      return { ...state, likedBy: state.likedBy.slice(0, state.likedBy.length - 1), likeState: false };
    case actions.SET_CURRENT_IMAGE:
      for(let i = 0; i < state.data.images.length; i++) {
        if(state.data.images[i].id == action.data) {
          return {
            ...state,
            likedBy: state.data.images[i].likedBy,
            comments:  state.data.images[i].comments,
            image: state.data.images[i].image,
            id: state.data.images[i].id,
          };
        }
      }
      return state;
    default:
      return state;
  }
}

export default reducer;