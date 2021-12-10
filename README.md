# final
期末

ProductList.js的 editButton 可以改成

const editButton =  function(product){
  handleClickOpen();
  setProductid(product.id);
  setProduct({bfprice:product.bfprice,bfname:product.bfname,bfdesc:product.bfdesc});  -->多一行
}
