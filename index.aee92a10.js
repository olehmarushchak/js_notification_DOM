var e=function(e,t,o,n,s){var a=document.getElementsByTagName("body")[0],i=document.createElement("div"),l=document.createElement("h4"),r=document.createElement("p");switch(l.textContent=o,l.style.marginBottom="10px",r.textContent=n,i.appendChild(l),i.appendChild(r),i.style.position="absolute",i.style.bottom="".concat(e,"px"),i.style.right="".concat(t,"px"),i.style.width="300px",i.style.height="120px",i.style.padding="10px",i.style.boxSizing="border-box",i.style.borderRadius="10px",s){case"error":i.style.backgroundColor="red";break;case"success":i.style.backgroundColor="green";break;case"warning":i.style.backgroundColor="yellow"}a.appendChild(i),setTimeout(function(){i.remove()},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.aee92a10.js.map
