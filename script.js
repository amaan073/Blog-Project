var navbar = document.querySelectorAll(".nav>li>a");
var currentPage = window.location.pathname.split('/').pop().split('.')[0]; // Get the current page name using url of the page


if(currentPage == "index") {
    var currentPage = "home";   //file name as "index" for github 
}


navbar.forEach((nav) => {
    var targetLink = nav.getAttribute("data-page");

    if (targetLink === currentPage) {
        // Skip the active nav button, using return keyword which stops the normal flow of loop
        return;
    }

    var targetSvg = document.querySelector("#" + targetLink + ">path");

    nav.addEventListener("mouseover", () => {
        targetSvg.setAttribute("fill", "#000");
        nav.classList.add("active");
        nav.classList.remove("text-white");
    });

    nav.addEventListener("mouseout", () => {
        targetSvg.setAttribute("fill", "#fff");
        nav.classList.remove("active");
        nav.classList.add("text-white");
    });
});


const date = new Date().getFullYear();
document.querySelector("#date").innerHTML = date;










////////////////////////////////

//like button response

const likeIcon = document.querySelector(".like>svg.bi-heart");
const likeFilledIcon = document.querySelector(".like>svg.bi-heart-fill");
var likeCount = document.querySelector(".likeCount");


likeIcon.addEventListener("click",()=> {
    likeIcon.style.display = "none";
    likeFilledIcon.style.display = "inline-block";
    likeCount.innerHTML = parseInt(likeCount.innerHTML) + 1;
});                                     //no increment because its a static website

likeFilledIcon.addEventListener("click", ()=> {
    likeIcon.style.display = "inline-block";
    likeFilledIcon.style.display = "none";
    likeCount.innerHTML = parseInt(likeCount.innerHTML) - 1;
});

///////////////////////////////////






// /////////////////////////
// COMMENT FUNCTION

function handleForm(event) {
    event.preventDefault();
    var commentUser = document.querySelector("input[name='Name']").value;
    var commentText = document.querySelector("#commentText").value;
    var commentList = document.querySelector(".commentList");
    
    var commentCount = document.querySelector(".commentCount") ;
    commentCount.innerHTML = parseInt(commentCount.innerHTML) + 1;

    //for empty username and comment section
    if(commentText.length === 0 || commentUser.length === 0) {
      alert("Name and comment field can't be empty");
      return;               
    } 

    var commentArray = [
      {
        Name : "Amaan",
        comment : "The blog is great. Its explanation of A.I. is very simple and easy"
      }
    ];

    //new comment
    var comment = {
      Name : commentUser,
      comment : commentText
    }
    
    commentArray.push(comment);

    var commentHTML = `<div class='comment border-start border-dark border-3 rounded-end shadow w-100 p-4 my-3 bg-light'><h3>${comment.Name}</h1><p>&nbsp; > ${commentText}</p></div>`
    
    commentList.innerHTML += commentHTML ;
  
  }