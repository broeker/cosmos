if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}



function showNavigation() {
  const navigation = document.getElementById("navigation");
  navigation.classList.remove("hidden", "sticky","pt-32"); 
  navigation.classList.add("absolute","right-0","z-50", "pt-0", "bg-white","border-l", "border-gray-200"); 
}

function closeNavigation() {
  const navigation = document.getElementById("navigation");
  navigation.classList.add("hidden"); 
  navigation.classList.remove("absolute","right-0","z-50", "bg-gray-100", "border-r", "border-gray-800" ); 
}

function activateDarkMode() {
  document.body.classList.toggle("dark");
}


