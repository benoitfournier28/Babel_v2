// Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
if ('content' in document.createElement('template')) {

    // Instantiate the table with the existing HTML tbody
    // and the row with the template
    var generationTemplate = document.querySelector("#general_template");
    var template = document.querySelector('#product_content');

    // Clone the new row and insert it into the table
    var clone = template.content.cloneNode(true);
    var mangaTitle = clone.querySelectorAll("#manga_title");
    mangaTitle[0].textContent = "Death Notes";
    generationTemplate.appendChild(clone);
    
    
    var clone2 = document.importNode(template.content , true);
    var mangaTitle = clone2.querySelectorAll("#manga_title");
    var image = clone2.querySelectorAll("#image");
    mangaTitle[0].textContent = "One-Piece";
    image[0].src = "5918.jpg";
    generationTemplate.appendChild(clone2);
    
    var clone3 = template.content.cloneNode(true);
    var mangaTitle = clone3.querySelectorAll("#manga_title");
    var image = clone3.querySelectorAll("#image");
    mangaTitle[0].textContent = "uu";
    image[0].src = "5918.jpg";
    generationTemplate.appendChild(clone3);


    var clone4 = template.content.cloneNode(true);
    var mangaTitle = clone4.querySelectorAll("#manga_title");
    var image = clone4.querySelectorAll("#image");
    mangaTitle[0].textContent = "uu";
    image[0].src = "5918.jpg";
    generationTemplate.appendChild(clone4);
  
    var clone5 = template.content.cloneNode(true);
    var mangaTitle = clone5.querySelectorAll("#manga_title");
    var image = clone5.querySelectorAll("#image");
    mangaTitle[0].textContent = "uu";
    image[0].src = "5918.jpg";
    generationTemplate.appendChild(clone5);


    var clone6 = template.content.cloneNode(true);
    var mangaTitle = clone6.querySelectorAll("#manga_title");
    var image = clone6.querySelectorAll("#image");
    mangaTitle[0].textContent = "uu";
    image[0].src = "5918.jpg";
    generationTemplate.appendChild(clone6);
    ;
    
    


} else {
  // Find another way to add the rows to the table because 
  // the HTML template element is not supported.
}