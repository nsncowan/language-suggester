function hideResults() {
  document.getElementById("result1").setAttribute("class", "hidden");
  document.getElementById("result2").setAttribute("class", "hidden");
  document.getElementById("result3").setAttribute("class", "hidden");
  document.getElementById("result4").setAttribute("class", "hidden");
  document.getElementById("result5").setAttribute("class", "hidden");
  document.getElementById("result6").setAttribute("class", "hidden");
}

function processSurvey(event) {
  
  event.preventDefault();
  hideResults();
  const mostImportant = document.getElementById("mostImportant").value;
  const question2 = document.querySelector("input[name='question2']:checked").value
  const name = document.getElementById("userName").value;
  
  document.getElementById("resultsHeading").removeAttribute("class");
  
  if (mostImportant === "1" && question2 === "startup") {
    document.getElementById("result1").removeAttribute("class");
    document.querySelector("span#name1").innerText = name;
  } else if (mostImportant === "2" && question2 === "startup") {
    document.getElementById("result2").removeAttribute("class");
    document.querySelector("span#name2").innerText = name;
  } else if (mostImportant === "3" && question2 === "startup") {
    document.getElementById("result3").removeAttribute("class");
    document.querySelector("span#name3").innerText = name;
  } else if (mostImportant === "1" && question2 === "established") {
    document.getElementById("result4").removeAttribute("class");
    document.querySelector("span#name5").innerText = name;
  } else if (mostImportant === "2" && question2 === "established") {
    document.getElementById("result5").removeAttribute("class");
    document.querySelector("span#name6").innerText = name;
  } else if (mostImportant === "3" && question2 === "established") {
    document.getElementById("result6").removeAttribute("class");
    document.querySelector("span#name7").innerText = name;
  }
};

window.addEventListener("load", function() {
  const survey = document.getElementById("languageSurvey");
  survey.addEventListener("submit", processSurvey);
});