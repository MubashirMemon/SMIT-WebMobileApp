      //DOM JavaScript 
      // 1. Get element of id “main-content” and assign them in a variable.
      var mainContent = document.getElementById("main-content");
      console.log(mainContent);

      // 2. Display all child elements of “main-content” element.
       var allChilds = mainContent.getElementsByTagName("p");
      for (var i = 0; i < allChilds.length; i++) {
        console.log(allChilds[i])  
      }

      // 3. Get all elements of class “render” and show their innerHTML in browser
      var allChilds = mainContent.getElementsByTagName("p");
      for (var i = 0; i < allChilds.length; i++) {
        console.log(allChilds[i].innerHTML);
      }

      // 4. Fill input value whose element id first-name using javascript.
      document.getElementById("first-name").placeholder = "Type  Your name here..";
      document.getElementById("first-name").value = "Type  Your name here..";
      console.log(document.getElementById("first-name"));

      // 5. Repeat part iv for id ”last-name” and “email”.
      document.getElementById("last-name").placeholder = "Type last name here..";
      document.getElementById("last-name").value = "Type last name here..";
      document.getElementById("email").value = "Type Email Here"
      document.getElementById("email").placeholder = "Type email here..";
  
      //TASK 2 of Chap 58- 67.
      // 1. Node type of element having id “form-content”.
      var formContent_nodeType = document.getElementById("form-content").nodeType;
      console.log(formContent_nodeType);

      // 2. Show node type of element having id “lastName” and its child node.
      // nodeType
      var lastName_nodeType = document.getElementById("lastName").nodeType;
      console.log(lastName_nodeType);
      // childNode
      var child = document.getElementById("lastName").childNodes[0];
      console.log(child);

      // 3. Update child node of element having id “lastName”.
      var update_child = document.getElementById("lastName").childNodes;
      console.log(update_child)

      // 4. Get First and last child of id “main-content”.
      var firstchild = document.getElementById("main-content").firstChild;
      console.log(firstchild);
      var lastchild = document.getElementById("main-content").lastChild;
      console.log(lastchild);

      // 5. Get next and previous siblings of id “lastName”.
      var previous_sibling = document.getElementById("lastName").previousSibling;
      console.log(previous_sibling);
      var next_sibling = document.getElementById("lastName").nextSibling ;
      console.log(next_sibling);

      // 6.  parent node and node type of element having id “email”.
      // parent_node
      var parent_node = document.getElementById("email").parentNode;
      console.log(parent_node);

      // email_nodeType
      var email_nodeType = document.getElementById("email").nodeType;
      console.log(email_nodeType);

   