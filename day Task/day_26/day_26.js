function setcookies()
{
    document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
}
setcookies();
localStorage.setItem("Ram","kumar");
sessionStorage.setItem("Name","RKmutech");
console.log(sessionStorage.getItem(('Ram')));
console.log(localStorage.getItem('Ram'));
