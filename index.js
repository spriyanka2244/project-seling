'use strict';

const form = document.getElementById('productForm');
const link = 'https://crudcrud.com/api/ca75fa636a814021bae01022c4597ed2/AddProduct';
const productList = document.querySelector('.productList table');

form.addEventListener('submit', addProduct);

async function addProduct(event) {
  event.preventDefault();

  const sellingPrice = event.target.elements.Sellingprice.value;
  const productName = event.target.elements.ProductName.value;
  const category = event.target.elements.category.value;

  const product = {
    sellingPrice,
    productName,
    category,
  };

  try {
    const response = await axios.post(link, product);
    displayProduct(response.data);

    // Clear form inputs
    event.target.elements.Sellingprice.value = '';
    event.target.elements.ProductName.value = '';
    event.target.elements.category.value = '';
  } catch (error) {
    console.error(error);
  }
}

function displayProduct(product) {

  const s=product.sellingPrice
  const p=product.productName
  const ca=product.category

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  

  
  if(product.category=='Electronic Item'){
    
    var e=document.getElementById("ElectronicItem");

    var e1=document.createElement('li')
    e1.id="ele"
    e1.appendChild(document.createTextNode(`${s}---${ca}---${p}--`))
    e.append(e1)
    e.append(deleteButton)
  



  }else if(product.category=='Cosmetic'){
    
    var c=document.getElementById("Cosmetic");

    var c1=document.createElement('li')
    c1.id="ele"
    c1.appendChild(document.createTextNode(`${s}---${ca}---${p}--`))
    c.append(c1)
    c.append(deleteButton)



  }else if(product.category=='Foot Ware'){
    var f=document.getElementById("FootWare");

    var f1=document.createElement('li')
    f1.id="ele"
    f1.appendChild(document.createTextNode(`${s}---${ca}---${p}--`))
    f.append(f1)
    f.append(deleteButton)

  }else if(product.category=='Cloths'){
    var cl=document.getElementById("Cloths");

    var cl1=document.createElement('li')
    cl1.id="ele"
    cl1.appendChild(document.createTextNode(`${s}---${ca}---${p}--`))
    cl.append(cl1)
    cl.append(deleteButton)

  }else{
    alert("enter required field ?")
  }















  // const newRow = document.createElement('tr');
  
  // const productNameCell = document.createElement('td');
  // productNameCell.textContent = product.productName;
  
  // const sellingPriceCell = document.createElement('td');
  // sellingPriceCell.textContent = product.sellingPrice;
  
  // const deleteButtonCell = document.createElement('td');
  
  // deleteButton.dataset.productId = product._id;
  // deleteButton.addEventListener('click', deleteProduct);
  
  // deleteButtonCell.appendChild(deleteButton);
  
  // newRow.appendChild(productNameCell);
  // newRow.appendChild(sellingPriceCell);
  // newRow.appendChild(deleteButtonCell);

  // console.log(newRow)
  
  // const categoryTableId = product.category + 'Table';
  // const categoryTable = document.getElementById(categoryTableId);
  
  // if (categoryTable) {
  //   categoryTable.querySelector('table').appendChild(newRow);
  // }


}

async function deleteProduct(event) {
  const productId = event.target.dataset.productId;

  try {
    await axios.delete(`${link}/${productId}`);
    event.target.parentElement.parentElement.remove();
  } catch (error) {
    console.error(error);
  }
}

window.addEventListener('DOMContentLoaded', async () => {
  if (productList.rows.length === 1) {
    try {
      const response = await axios.get(link);
      response.data.forEach((product) => {
        displayProduct(product);
      });
    } catch (error) {
      console.error(error);
    }
  }
});