"use strict";
var object1 = {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "ladanum enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    description:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
    completed: false,
};

function cloneObject(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; 
    }
    var temp; 
    if (Array.isArray(obj)) {
        temp = [];
        for (var i = 0; i < obj.length; i++) {
            temp[i] = cloneObject(obj[i]);
        }
    } else {
        temp = {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                temp[key] = cloneObject(obj[key]); 
            } 
        }
    }
    return temp;
}

var clonedObject = cloneObject(object1);

console.log(clonedObject);
