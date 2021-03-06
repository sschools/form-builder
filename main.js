// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------
let formArea = document.getElementById("fields");

for (let i = 0; i < formData.length; i++) {
  /*
  let newLabel = document.createElement("label");
  let labelContent = document.createTextNode(formData[i].label);
  newLabel.setAttribute("for", formData[i].id);
  formArea.appendChild(newLabel);
  newLabel.appendChild(labelContent);
  */
  if (formData[i].type === "select") {
    let newSelect = document.createElement("select");
    newSelect.setAttribute("id", formData[i].id);
    newSelect.setAttribute("placeholder", formData[i].label);

    let newOption = document.createElement("option");
    let optionContent = document.createTextNode(formData[i].label + "...");
    newOption.setAttribute("disabled", true);
    newOption.setAttribute("selected", true);

    newSelect.appendChild(newOption);
    newOption.appendChild(optionContent);

    for (let j = 0; j < formData[i].options.length; j++) {
      newOption = document.createElement("option");
      optionContent = document.createTextNode(formData[i].options[j].label);
      newOption.setAttribute("value", formData[i].options[j].value);
      newSelect.appendChild(newOption);
      newOption.appendChild(optionContent);
    }

    formArea.appendChild(newSelect);

  } else if (formData[i].type === "textarea") {

    let newArea = document.createElement("textarea");

    newArea.setAttribute("id", formData[i].id);
    newArea.setAttribute("placeholder", formData[i].label);

    formArea.appendChild(newArea);

  }else {
    let newInput = document.createElement("input");

    /*
    let newIcon = document.createElement("i");
    newIcon.setAttribute("class", formData[i].icon);
    let testArray = [newIcon, formData[i].label];
    let newString = testArray.join(" ");
    */
    newInput.setAttribute("type", formData[i].type);
    newInput.setAttribute("id", formData[i].id);
    newInput.setAttribute("placeholder", formData[i].label);

    formArea.appendChild(newInput);
  }
}
