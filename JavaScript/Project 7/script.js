
  
     // Task 1: Select the paragraph element with the id paragraph and change its content to "Hello World". 
     const paragraphElement = document.getElementById('paragraph'); 
     if (paragraphElement) { 
       paragraphElement.textContent = 'Hello World'; 
       
     } 
     let p = document.getElementsByTagName('p')
     console.log(p[0]);
     p[0].style.color = 'tomato'
     p[0].style.fontSize = '48px'
     console.log(p[1]);
     p[1].innerText = 'Douglas J. Ongoma'
     p[1].style.color = 'purple'
     p[1].style.fontSize = '20px'
     // Task 2: Using JavaScript, create an image element with the source attribute set to "image.jpg". 
     const imageElement = document.createElement('img'); 
     imageElement.src = 'image.jpg'; 
     //img.style.width = '100%'
     //img.style.height = 'auto'
  
     // Task 3: Append the created image element to the div element with the id imageContainer. 
     const imageContainer = document.getElementById('imageContainer'); 
     if (imageContainer) { 
       imageContainer.appendChild(imageElement); 
     }
