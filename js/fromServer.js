const ul = document.getElementById('ul-id');


fetch('https://reqres.in/api/unknown')
  .then(response =>{
      if(response.status!==200){
          throw response.status;
      }
      return response.json()
    })
  .then(userList=>{
    const fragment = document.createDocumentFragment();
    const liFragment = document.createDocumentFragment();
    let li = document.createElement('li');
    span1=document.createElement('span');
    span2=document.createElement('span');
    span3=document.createElement('span');
    span4=document.createElement('span');
    span5=document.createElement('span');

    span1.innerText='color';
    span2.innerText='id';
    span3.innerText='name';
    span4.innerText='pantone_value';
    span5.innerText='year';
    liFragment.appendChild(span1);
    liFragment.appendChild(span2);
    liFragment.appendChild(span3);
    liFragment.appendChild(span4);
    liFragment.appendChild(span5);
    li.appendChild(liFragment);
    fragment.appendChild(li);

    userList.data.map((item) =>{
        let li = document.createElement('li');
        span1=document.createElement('span');
        span2=document.createElement('span');
        span3=document.createElement('span');
        span4=document.createElement('span');
        span5=document.createElement('span');

        span1.innerText=item.color;
        span2.innerText=item.id;
        span3.innerText=item.name;
        span4.innerText=item.pantone_value;
        span5.innerText=item.year;
        liFragment.appendChild(span1);
        liFragment.appendChild(span2);
        liFragment.appendChild(span3);
        liFragment.appendChild(span4);
        liFragment.appendChild(span5);
        li.appendChild(liFragment);
        fragment.appendChild(li);
    })
    ul.appendChild(fragment);
})
.catch((error)=>{
    const div = document.getElementById('errorDiv');
    const h1 = document.createElement('h1');
    const h3 = document.createElement('h3');
    h1.innerText=error;
    h3.innerText='Page Not Found'
    div.appendChild(h1);
    div.appendChild(h3);
})