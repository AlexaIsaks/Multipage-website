 /*-----WEBSITE DATA-----*/

 //Photo gallery/portfolio list
 let imageList = [
     {
         id: 1,
         file: "image",
         alt: "image 1",
         src: "../images/annie-spratt-image-1.jpg",
         likes: 1,
         comments: [
             {
             commentId: 1,
             datePosted: "12 August 2020",
             username: "Abigail Grey",
             comment: ["Christmas time..."]
             }
        ]

     },
     {
         id: 2,
         file: "image",
         alt: "image 2",
         src: "../images/annie-spratt-image-2.jpg",
         likes: 0,
         comments: []
     },
     {
         id: 3,
         file: "image",
         alt: "image 3",
         src: "../images/annie-spratt-image-3.jpg",
         likes: 0,
         comments: []
     },
     {
         id: 4,
         file: "image",
         alt: "image 4",
         src: "../images/annie-spratt-image-4.jpg",
         likes: 0,
         comments: []
     },
     {
         id: 5,
         file: "image",
         alt: "image 5",
         src: "../images/annie-spratt-image-5.jpg",
         likes: 4,
         comments: [
             {
             commentId: 123.456,
             datePosted: "22 September 2020",
             username: "Robyn Muller",
             comment: ["Classic camera.", "Love this..."]
             }
        ]

     },
     {
         id: 6,
         file: "image",
         alt: "image 6",
         src: "../images/annie-spratt-image-6.jpg",
         likes: 0,
         comments: []
     },
     {
         id: 7,
         file: "image",
         alt: "image 7",
         src: "../images/annie-spratt-image-7.jpg",
         likes: 0,
         comments: []
     },
     {
         id: 8,
         file: "image",
         alt: "image 8",
         src: "../images/annie-spratt-image-8.jpg",
         likes: 0,
         comments: []
     },
     {
         id: 9,
         file: "image",
         alt: "image 9",
         src: "../images/annie-spratt-image-9.jpg",
         likes: 0,
         comments: []
     },
     {
         id: 10,
         file: "image",
         alt: "image 10",
         src: "../images/annie-spratt-image-10.jpg",
         likes: 0,
         comments: []
     },
     {
         id: 11,
         file: "image",
         alt: "image 11",
         src: "../images/annie-spratt-image-11.jpg",
         likes: 0,
         comments: []
     },
     {
         id: 12,
         file: "image",
         alt: "image 12",
         src: "../images/annie-spratt-image-12.jpg",
         likes: 0,
         comments: []
     }
 ];

 //Blog posts list
 let blogList = [
     {
         id: 1,
         file: "blog",
         title: "South Africa",
         datePosted: "22 March 2020",
         src: "../images/simon-greenwood-south-africa.jpg",
         alt: "Lion",
         paragraphs: ["South Africa: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum morbi blandit. Quam pellentesque nec nam aliquam sem et tortor. Nulla aliquet porttitor lacus luctus. Morbi tristique senectus et netus et malesuada fames ac. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Nunc sed augue lacus viverra vitae congue. Semper auctor neque vitae tempus quam pellentesque nec. Justo laoreet sit amet cursus sit amet dictum sit amet. Pretium quam vulputate dignissim suspendisse in est ante in. Dolor sit amet consectetur adipiscing elit duis tristique. Molestie at elementum eu facilisis sed.", "Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Turpis massa tincidunt dui ut ornare lectus. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Arcu vitae elementum curabitur vitae nunc. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Amet porttitor eget dolor morbi. Quam pellentesque nec nam aliquam sem et tortor consequat. Ullamcorper sit amet risus nullam eget felis eget. Et magnis dis parturient montes nascetur ridiculus. Donec adipiscing tristique risus nec feugiat. Lorem donec massa sapien faucibus. Tempor orci dapibus ultrices in iaculis. Sed euismod nisi porta lorem. Diam donec adipiscing tristique risus nec feugiat. Adipiscing commodo elit at imperdiet.", "Odio facilisis mauris sit amet massa vitae. Purus gravida quis blandit turpis cursus in hac habitasse platea. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Et tortor at risus viverra adipiscing at in. Lacus vestibulum sed arcu non odio euismod lacinia at. Vestibulum lectus mauris ultrices eros. Dictum fusce ut placerat orci. At tellus at urna condimentum mattis pellentesque. Massa id neque aliquam vestibulum morbi blandit cursus risus. Non nisi est sit amet facilisis magna.", "Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Turpis massatincidunt dui ut ornare lectus.Aliquet bibendum enim facilisis gravida neque convallis a crassemper.Arcu vitae elementum curabitur vitae nunc.Cursus euismod quis viverra nibh craspulvinar mattis nunc sed.Amet porttitor eget dolor morbi.Quam pellentesque nec nam aliquam semet tortor consequat.Ullamcorper sit amet risus nullam eget felis eget.Et magnis dis parturientmontes nascetur ridiculus.Donec adipiscing tristique risus nec feugiat.Lorem donec massasapien faucibus.Tempor orci dapibus ultrices in iaculis.Sed euismod nisi porta lorem.Diamdonec adipiscing tristique risus nec feugiat."],
         likes: 1,
         comments: [
             {
             commentId: 1,
             datePosted: "25 March 2020",
             username: "Jenny Bean",
             comment: ["Beautiful Place. Love South Africa's wildlife"]
            }
        ]

     },
     {
         id: 2,
         file: "blog",
         title: "Maldives",
         datePosted: "25 April 2020",
         src: "../images/ishan-seefromthesky-maldives.jpg",
         alt: "Kihavah Huravalhi Island Baa Atoll, Maldives",
         paragraphs: ["Maldives: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum morbi blandit. Quam pellentesque nec nam aliquam sem et tortor. Nulla aliquet porttitor lacus luctus. Morbi tristique senectus et netus et malesuada fames ac. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Nunc sed augue lacus viverra vitae congue. Semper auctor neque vitae tempus quam pellentesque nec. Justo laoreet sit amet cursus sit amet dictum sit amet. Pretium quam vulputate dignissim suspendisse in est ante in. Dolor sit amet consectetur adipiscing elit duis tristique. Molestie at elementum eu facilisis sed.", "Odio facilisis mauris sit amet massa vitae. Purus gravida quis blandit turpis cursus in hac habitasse platea. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Et tortor at risus viverra adipiscing at in. Lacus vestibulum sed arcu non odio euismod lacinia at. Vestibulum lectus mauris ultrices eros. Dictum fusce ut placerat orci. At tellus at urna condimentum mattis pellentesque. Massa id neque aliquam vestibulum morbi blandit cursus risus. Non nisi est sit amet facilisis magna."],
         likes: 25,
         comments: [
             {
                 commentId: 1,
                 datePosted: "25 April 2020",
                 username: "Kathryn October",
                 comment: ["Goals!"]

             },
             {
                 commentId: 2,
                 datePosted: "25 April 2020",
                 username: "Robyn",
                 comment: ["Best place in the world."]

             }
         ]
     },
     {
         id: 3,
         file: "blog",
         title: "Paris",
         datePosted: "14 May 2020",
         src: "../images/anthony-delanoix-paris.jpg",
         alt: "Eiffel tower",
         paragraphs: ["Paris: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa id neque aliquam vestibulum morbi blandit. Quam pellentesque nec nam aliquam sem et tortor. Nulla aliquet porttitor lacus luctus. Morbi tristique senectus et netus et malesuada fames ac. Accumsan lacus vel facilisis volutpat est velit egestas dui id. Nunc sed augue lacus viverra vitae congue. Semper auctor neque vitae tempus quam pellentesque nec. Justo laoreet sit amet cursus sit amet dictum sit amet. Pretium quam vulputate dignissim suspendisse in est ante in. Dolor sit amet consectetur adipiscing elit duis tristique. Molestie at elementum eu facilisis sed.", "Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Turpis massa tincidunt dui ut ornare lectus. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Arcu vitae elementum curabitur vitae nunc. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Amet porttitor eget dolor morbi. Quam pellentesque nec nam aliquam sem et tortor consequat. Ullamcorper sit amet risus nullam eget felis eget. Et magnis dis parturient montes nascetur ridiculus. Donec adipiscing tristique risus nec feugiat. Lorem donec massa sapien faucibus. Tempor orci dapibus ultrices in iaculis. Sed euismod nisi porta lorem. Diam donec adipiscing tristique risus nec feugiat. Adipiscing commodo elit at imperdiet.", "Odio facilisis mauris sit amet massa vitae."],
         likes: 0,
         comments: []
     }
 ];

 //"SAVE FOR LATER" folder
 //All the user's liked and "save for later" items will be stored in this array                                 
 let myFolder = [
     {
         savedItems: []
     },
     {
         likedItems: []
     }
 ];

 //Returns the selected image from "imageList" array using image's id
 function findImage(dataId) {

     const image = imageList.find(img => {
         return img.id === dataId;
     });

     return image;
 }

 //Returns the selected blog post from "blogList" array using blog's id
 function findBlog(dataId) {

     const blog = blogList.find(post => {
         return post.id === dataId;
     });

     return blog;

 }

 //Update "imageList" array with new activities (likes, comments)
 function updateImageList() {

     imageList = [...JSON.parse(localStorage.getItem("imageList"))];

 }

 //Update "blogList" array with new activities (likes, comments)
 function updateBlogList() {

     blogList = [...JSON.parse(localStorage.getItem("blogList"))];

 }

 //Update "myFolder" array with new liked items and "saved for later" items
 function updateMyFolder() {

     myFolder = [...JSON.parse(localStorage.getItem("myFolder"))];

 }


 export {imageList, blogList, myFolder, findImage, findBlog, updateImageList, updateBlogList, updateMyFolder};