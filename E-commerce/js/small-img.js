  // <!-- ----js for product gallery---- -->
    
  var productimg = document.getElementById('productimg');
  var smallimg =document.getElementsByClassName('small-img');
  smallimg[0].onclick =function()
  {
      productimg.src=smallimg[0].src;
  }
  smallimg[1].onclick =function()
  {
      productimg.src=smallimg[1].src;
  }
  smallimg[2].onclick =function()
  {
      productimg.src=smallimg[2].src;
  }
  smallimg[3].onclick =function()
  {
      productimg.src=smallimg[3].src;
  }