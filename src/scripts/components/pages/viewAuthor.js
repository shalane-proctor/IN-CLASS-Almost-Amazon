import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const viewAuthor = (item) => {
  clearDom();
  let domString = '';

  domString = `
  <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.email}</h6>
        <i class="fas fa-edit btn btn-info" id="update-author--${
  item.firebaseKey
}"></i>
        <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${
  item.firebaseKey
}"></i>
  <i id="author-favorite--${
  item.firebaseKey
}"  class="btn btn-secondary fas fa-solid fa-star ${
  item.favorite ? 'btn-warning' : ''
}"></i>
      </div>
    </div>`;

  item.authorBooksArray.forEach((obj) => {
    domString += `<div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <img src=${obj.image} alt=${obj.title} style="width: 300px;">
     <div class="mt-5">
       <i id="edit-book-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-book--${
  obj.firebaseKey
}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
   </div>
   <div class="text-white ms-5 details">
     <h5>${obj.title}
    <span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>
     <p>${obj.description || ''}</p>
     <hr>
     <p>${
  obj.sale
    ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> 
       $${obj.price}`
    : `$${obj.price}`
}</p>      
      </div>
    </div>`;
  });
  renderToDOM('#view', domString);
};

export default viewAuthor;
